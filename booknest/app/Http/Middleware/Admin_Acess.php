<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Admin_Acess
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
            return redirect('/')->with('Mensagem','Acesso Negado !!');
        }
        // verifica se o $roles é o administrador
        if($roles == 'administrador')
        {
            // se for
            // verifica se o nivel de acesso é diferente de administrador 
            if(Auth::user()->nivel_acessos != $roles)
            {
                // se for
                // deslogue o usuario 
                Auth::logout();
                // invalida a sessão
                $request = session()->invalidate();
                // regenera o Token da sessão
                $request = session()->regenerateToken();
                // retorna para a view passada
                return back()->with('Mensagem','Acesso Negado !!!');
            }
            return $next($request);
        }
        else
        // se $roles for diferente de administrador
        if($roles != 'administrador')
        {
            // deslogue o usuario 
            Auth::logout();
            // invalida a sessão
            $request = session()->invalidate();
            // regenera o Token da sessão
            $request = session()->regenerateToken();
            // retorna para a view passada
            return back();
        }
        
    }
}
