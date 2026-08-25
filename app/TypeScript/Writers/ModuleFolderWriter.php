<?php

namespace App\TypeScript\Writers;

use Spatie\TypeScriptTransformer\Actions\ResolveImportsAndResolvedReferenceMapAction;
use Spatie\TypeScriptTransformer\Actions\SplitTransformedPerLocationAction;
use Spatie\TypeScriptTransformer\Collections\TransformedCollection;
use Spatie\TypeScriptTransformer\Data\GlobalNamespaceResolvedReference;
use Spatie\TypeScriptTransformer\Data\Location;
use Spatie\TypeScriptTransformer\Data\ModuleImportResolvedReference;
use Spatie\TypeScriptTransformer\Data\WriteableFile;
use Spatie\TypeScriptTransformer\Data\WritingContext;
use Spatie\TypeScriptTransformer\Transformed\Transformed;
use Spatie\TypeScriptTransformer\Writers\Writer;

class ModuleFolderWriter implements Writer
{
    public function __construct(
        protected ?string $path,
        protected SplitTransformedPerLocationAction $split = new SplitTransformedPerLocationAction,
        protected ResolveImportsAndResolvedReferenceMapAction $resolver = new ResolveImportsAndResolvedReferenceMapAction,
    ) {}

    public function output(
        array $transformed,
        TransformedCollection $collection,
    ): array {

        $root = $this->split->execute($transformed);

        $files = [];

        $this->walk($root, $collection, $files);

        // Group transformed type files by directory to construct complete index.ts export files
        $dirExports = [];
        foreach ($files as $file) {
            $dir = dirname($file->path);
            $filename = basename($file->path);

            if ($filename !== 'index.ts' && str_ends_with($filename, '.ts')) {
                $typeName = substr($filename, 0, -3);
                $dirExports[$dir][$typeName] = "export type { {$typeName} } from './{$typeName}';";
            }
        }

        foreach ($dirExports as $dir => $exports) {
            $indexFile = "{$dir}/index.ts";
            $files[] = new WriteableFile(
                $indexFile,
                implode(PHP_EOL, array_values($exports))
            );
        }

        return $files;
    }

    /**
     * @param  array<int, WriteableFile>  $files
     */
    protected function walk(
        Location $location,
        TransformedCollection $collection,
        array &$files,
    ): void {

        if (count($location->transformed)) {
            $this->writeModule($location, $collection, $files);
        }

        foreach ($location->children as $child) {
            $this->walk($child, $collection, $files);
        }
    }

    /**
     * @param  array<int, WriteableFile>  $files
     */
    protected function writeModule(
        Location $location,
        TransformedCollection $collection,
        array &$files,
    ): void {

        $folder = $this->folder($location->path);

        foreach ($location->transformed as $transformed) {

            $file = $folder !== '' ? "{$folder}/{$transformed->getName()}.ts" : "{$transformed->getName()}.ts";

            [$imports, $map] = $this->resolver->execute(
                $file,
                [$transformed],
                $collection,
            );

            $context = new WritingContext($map);

            $content = '';

            foreach ($imports->getTypeScriptNodes() as $import) {
                $content .= $this->toTypeImport($import->write($context)).PHP_EOL;
            }

            $content .= $transformed->write($context).PHP_EOL;

            $files[] = new WriteableFile($file, $content);
        }
    }

    protected function toTypeImport(string $importStatement): string
    {
        // Turns `import { Foo } from '...'` into `import type { Foo } from '...'`
        // Leaves already-correct `import type { ... }` untouched.
        return preg_replace(
            '/^import\s+(?!type\s)/',
            'import type ',
            $importStatement,
            1
        );
    }

    /**
     * @param  array<int, string>  $segments
     */
    protected function folder(array $segments): string
    {
        // Find module name by excluding root namespace keywords
        $filtered = array_values(array_filter(
            $segments,
            fn (string $segment) => ! in_array($segment, [
                'Modules',
                'App',
                'Classes',
                'Data',
                'DTO',
                'Models',
                'Request',
                'Response',
            ], true)
        ));

        $module = $filtered[0] ?? 'Common';

        return $this->path === null || $this->path === ''
            ? $module
            : $this->path . DIRECTORY_SEPARATOR . $module;
    }

    public function resolveReference(
        Transformed $transformed,
    ): ModuleImportResolvedReference|GlobalNamespaceResolvedReference {

        return new ModuleImportResolvedReference(
            $transformed->getName(),
            $this->folder($transformed->getLocation())
            .DIRECTORY_SEPARATOR
            ."{$transformed->getName()}.ts",
        );
    }
}
