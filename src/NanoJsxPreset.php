<?php

namespace Jrson83\LaravelNanoJsxPreset;

use Illuminate\Support\Arr;
use Laravel\Ui\Presets\Preset;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;

class NanoJsxPreset extends Preset
{
    /**
     * Install the preset.
     *
     * @return void
     */
    public static function install()
    {
        static::ensureComponentDirectoryExists();
        static::updatePackages();
        static::updateWebpackConfiguration();
        static::updateBootstrapping();
        static::updateViews();
        static::updateSass();
        static::updateComponent();
        static::removeNodeModules();
    }

    /**
     * Update the given package array.
     *
     * @param  array  $packages
     * @return array
     */
    public static function updatePackageArray($packages)
    {
        return array_merge(
            [
                'nano-jsx' => '^0.0.25',
                'typescript' => '^4.5.2',
                'ts-loader' => '^9.2.6',
                '@types/node' => '^16.11.11',
            ],
            Arr::except($packages, [
                '@babel/preset-react',
                'react',
                'react-dom',
                'vue',
                'vue-template-compiler',
            ])
        );
    }

    /**
     * Update the Webpack configuration.
     *
     * @return void
     */
    public static function updateWebpackConfiguration()
    {
        copy(__DIR__.'/stubs/webpack.mix.js', base_path('webpack.mix.js'));
    }

    /**
     * Update the example component.
     *
     * @return void
     */
    protected static function updateComponent()
    {
        File::cleanDirectory(resource_path('js/components'));

        copy(__DIR__.'/stubs/components/App.tsx', resource_path('js/components/App.tsx'));
    }
    
    /**
     * Update the Sass files for the application.
     *
     * @return void
     */
    protected static function updateViews()
    {
        (new Filesystem)->ensureDirectoryExists(resource_path('views'));

        copy(__DIR__.'/stubs/nanojsx.blade.php', resource_path('views/nanojsx.blade.php'));
    }

    /**
     * Update the Sass files for the application.
     *
     * @return void
     */
    protected static function updateSass()
    {
        (new Filesystem)->ensureDirectoryExists(resource_path('sass'));

        copy(__DIR__.'/stubs/app.scss', resource_path('sass/app.scss'));
    }

    /**
     * Update the bootstrapping files.
     *
     * @return void
     */
    protected static function updateBootstrapping()
    {
        copy(__DIR__.'/stubs/app.tsx', resource_path('js/app.tsx'));
        copy(__DIR__.'/stubs/tsconfig.json', base_path('tsconfig.json'));
    }
}
