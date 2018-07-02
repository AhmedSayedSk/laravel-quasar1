<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel - Quasar</title>

        <link type="text/css" href="{{ mix(Master::getScriptMap()->css->app) }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
        <script type="text/javascript" charset="UTF-8" src="{{ mix(Master::getScriptMap()->js->app) }}"></script>
    </body>
</html>
