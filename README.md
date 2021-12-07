# Laravel Nano JSX Preset

A Laravel frontend preset for initial Nano JSX scaffolding, based on [wewowweb/laravel-svelte-preset](https://github.com/wewowweb/laravel-svelte-preset) by [We Wow Web](https://github.com/wewowweb) / [Gal Jakic](https://github.com/morpheus7cs).

## Why?

Nano JSX is a lightweight 1kB JSX library designed to build ultra fast MPAs and SPAs, created by [@Yannick Deubel](https://twitter.com/yannickdeubel). It uses a different approach than other JSX libraries like React, Preact or Inferno. Nano JSX is really close to the DOM. There is no Virtual DOM and you can manipulate the DOM as you want. You can even call Nano.`render()` inside a Component, which then renders some JSX code to manage another part of your app.

If you want to find out more about Nano JSX, check out the [Git Repository](https://github.com/nanojsx/nano) or the [official website](https://nanojsx.github.io/).

## SSR support?

This package does currently not support SSR, only client-side routing and full render/hydration of pages, which is not intended to be the concept of Nano JSX. This preset can be used to start developing SSR with [spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering) and I probably will release another repo with SSR support, when it's ready.

_This package is still in active development, so you might want to [watch](https://github.com/jrson83/laravel-nano-jsx-preset/subscription) the repository to be notified of future changes._

## Installation

You can install the package via composer:

```bash
composer require jrson83/laravel-nano-jsx-preset
```

After that, run the following command, which will provide you with the initial scaffolding of the project:

```bash
php artisan ui nanojsx
```

To install the JavaScript dependencies, run:

```bash
npm install && npm run dev
```

The package will provide you with the initial set of files:

- `/js/app.tsx`
- `/js/components/App.tsx`
- `/views/nanojsx.blade.php`
- `/sass/app.scss`
- `tsconfig.json`
- `webpack.mix.js`

needed to start developing with Laravel & Nano JSX.

### Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Nano JSX App</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <!-- Include the app.js file -->
    <script src="{{ mix('js/app.js') }}" defer></script>
  </head>
  <body>
    <!-- App Component will be rendered here -->
  </body>
</html>
```

### Create routes

Create a new route inside `routes/web.php`:

```php
Route::get('/', function () {
    return view('nanojsx');
});
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email **me@jrson.de** instead of using the issue tracker.

## Credits

- [jrson83](https://github.com/jrson83)
- [nanojsx](https://github.com/nanojsx/nano)
- [Yannick Deubel](https://github.com/yandeu)
- [We Wow Web](https://github.com/wewowweb)
- [Gal Jakic](https://github.com/morpheus7CS)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
