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
        protected SplitTransformedPerLocationAction $split = new SplitTransformedPerLocationAction(),
        protected ResolveImportsAndResolvedReferenceMapAction $resolver = new ResolveImportsAndResolvedReferenceMapAction(),
    ) {
    }

    public function output(
        array $transformed,
        TransformedCollection $collection,
    ): array {

        $root = $this->split->execute($transformed);

        $files = [];

        $this->walk($root, $collection, $files);

        return $files;
    }

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

    protected function writeModule(
        Location $location,
        TransformedCollection $collection,
        array &$files,
    ): void {

        $folder = $this->folder($location->path);

        $exports = [];

        foreach ($location->transformed as $transformed) {

            $file = "{$folder}/{$transformed->getName()}.ts";

            [$imports, $map] = $this->resolver->execute(
                $file,
                [$transformed],
                $collection,
            );

            $context = new WritingContext($map);

            $content = '';

            foreach ($imports->getTypeScriptNodes() as $import) {
                $content .= $import->write($context) . PHP_EOL;
            }

            $content .= $transformed->write($context) . PHP_EOL;

            $files[] = new WriteableFile($file, $content);

            $exports[] = "export type { {$transformed->getName()} } from './{$transformed->getName()}';";
        }

        $files[] = new WriteableFile(
            "{$folder}/index.ts",
            implode(PHP_EOL, $exports)
        );
    }

    protected function folder(array $segments): string
    {
        // Remove unwanted namespace segments
        $segments = array_values(array_filter(
            $segments,
            fn (string $segment) => ! in_array($segment, [
                'Modules',
                'Classes',
                'Data',
                'DTO',
                'Models',
            ], true)
        ));

        // Keep only the module name
        $module = $segments[0] ?? 'Common';

        return $this->path === null
        ? $module
        : implode(DIRECTORY_SEPARATOR, [$this->path, $module]);

    }

    public function resolveReference(
        Transformed $transformed,
    ): ModuleImportResolvedReference|GlobalNamespaceResolvedReference {

        return new ModuleImportResolvedReference(
            $transformed->getName(),
            $this->folder($transformed->getLocation())
            . DIRECTORY_SEPARATOR
            . "{$transformed->getName()}.ts",
        );
    }
}