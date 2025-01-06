<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class LogoutAdmin extends Controller
{
    public function LogoutAdmin(Request $Dados)
    {
        // logout
        Auth::logout();

        // invalida a sessão
        $Dados->session()->invalidate();

        // regenra o Token da Sessão
        $Dados->session()->regenerateToken();

        if(Auth::check())
        {
            return back()->with('error-logout','Error ao Tentar Sair...');
        }

        return redirect('/')->with('confirm-logout','Até Logo Administrador');
    }
}
