<?php

namespace Jrson83\LaravelNanoJsxPreset;

use Illuminate\Support\ServiceProvider;
use Laravel\Ui\UiCommand;

class LaravelNanoJsxPresetServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        UiCommand::macro('nanojsx', function ($command) {
            NanoJsxPreset::install();
            $command->info('Nano JSX scaffolding installed successfully.');
            $command->comment('Please run "npm install && npm run dev" to compile your fresh scaffolding.');
        });
    }
}
