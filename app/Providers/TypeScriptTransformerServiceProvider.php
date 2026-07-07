<?php

namespace App\Providers;

use App\TypeScript\Writers\ModuleFolderWriter;
use Illuminate\Support\Facades\File;
use Spatie\LaravelTypeScriptTransformer\TypeScriptTransformerApplicationServiceProvider as BaseTypeScriptTransformerServiceProvider;
use Spatie\TypeScriptTransformer\Formatters\PrettierFormatter;
use Spatie\TypeScriptTransformer\Transformers\AttributedClassTransformer;
use Spatie\TypeScriptTransformer\Transformers\EnumTransformer;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfigFactory;

class TypeScriptTransformerServiceProvider extends BaseTypeScriptTransformerServiceProvider
{
    protected function configure(TypeScriptTransformerConfigFactory $config): void
    {
        $config
            ->transformer(AttributedClassTransformer::class)
            ->transformer(EnumTransformer::class)
            ->transformDirectories(app_path());

        foreach (File::directories(base_path('Modules')) as $module) {
            $appPath = $module . '/app';

            if (is_dir($appPath)) {
                $config->transformDirectories($appPath);
            }
        }

        $config
            ->writer(new ModuleFolderWriter(""))
            ->formatter(PrettierFormatter::class);
    }
}