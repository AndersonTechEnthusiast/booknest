<?php

namespace App\Http\Middleware;

use App\Models\usuarios;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class ContribuinteVerify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $roles): Response
    {
        if(!Auth::check())
        {
            return redirect('/')->with('Mensagem','Por Favor , Faça Login para Acessar !!!');
        }
        else
        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos != $roles)
            {
                return redirect("/")->with('Mensagem','Você Não Tem Acesso a essa Área !!!');
            }
        }
        return $next($request);
    }
}
