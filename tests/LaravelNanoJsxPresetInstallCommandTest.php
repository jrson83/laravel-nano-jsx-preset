<?php

namespace Jrson83\LaravelNanoJsxPreset\Tests;

use Laravel\Ui\UiServiceProvider;
use Orchestra\Testbench\TestCase;
use Jrson83\LaravelNanoJsxPreset\LaravelNanoJsxPresetServiceProvider;

class LaravelNanoJsxPresetInstallCommandTest extends TestCase
{
    /** Overrides the getPackageProviders
     *  to load the custom package service provider.
     *  for Orchestra Testbench */
    protected function getPackageProviders($app)
    {
        return [
            UiServiceProvider::class,
            LaravelNanoJsxPresetServiceProvider::class,
        ];
    }

    /** @test */
    public function test_console_install_command()
    {
        $this->withoutMockingConsoleOutput();

        $this->artisan('ui nanojsx');

        $this->assertFileExists(resource_path('js/components/App.tsx'));
    }
}
