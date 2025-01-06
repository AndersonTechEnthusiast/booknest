<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
class Acessos
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // adicione o ...$roles manuealmente
    // ... antes do $roles é necessario pois especifica que a variavel pode ser uma string ou uma array
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // se o usuario não estiver autentificado (Logado)
        if(!Auth::check())
        {
            return back()->with('Mensagem','Você precisa fazer Login');
        }
        // ou
        // se o nivel de acesso do usuario não estiver contido na $roles
        // ...$roles recebe o parametro setado nas Routa
        if(!in_array(Auth::user()->nivel_acessos , $roles))
        {
            return back()->with('Mensagem','Você não tem acesso a essa Área');
        } 
        return $next($request);
    }
}
