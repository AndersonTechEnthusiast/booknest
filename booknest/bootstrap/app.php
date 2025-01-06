<?php

use App\Http\Middleware\Acessos;
use App\Http\Middleware\Admin_Acess;
use App\Http\Middleware\CheckUserLoged;
use App\http\Middleware\ContribuinteVerify;
use App\http\Middleware\VerifyUserLogadoProfileFull;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'Acessos' => Acessos::class,
            'Admin' => Admin_Acess::class,
            'Loged' => CheckUserLoged::class,
            'ContribuinteVerify' => ContribuinteVerify::class,
            'usuarioVerifyProfille' => VerifyUserLogadoProfileFull::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
