<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
class CheckUserLoged
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos == "usuario")
            {
                return redirect('usuario-home');
            }
            if(Auth::user()->nivel_acessos == "administrador")
            {
                return redirect('AdminLogin');
            }
        }
        
        return $next($request);
    }
}
