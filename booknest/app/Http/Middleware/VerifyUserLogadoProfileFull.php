<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class VerifyUserLogadoProfileFull
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , $roles): Response
    {
        if(!Auth::check())
        {
            return redirect()->back()->with('feedback','Você Precisa Fazer Login para Acessar Essa Área !!!');
        }

        if(Auth::user()->nivel_acessos !== $roles)
        {
            return redirect()->back()->with('feedback','Você Não Tem Acesso a Essa Área !!!');
        }

        return $next($request);
    }
}
