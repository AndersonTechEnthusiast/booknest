<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LogoutUserBookNest extends Controller
{
    public function LogoutUserBookNest(Request $Dados)
    {
        // Desloga o Usuario 
        Auth::logout();

        // invalida a sessão atual 
        $Dados->session()->invalidate();

        // Regenera o Token
        $Dados->session()->regenerateToken();

        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos == "usuario")
            {
                return redirect('usuario-home')->with('confirm-logout','Error ao Sair');
            }
            else
            if(Auth::user()->nivel_acessos == "contribuinte")
            {
                return redirect('contribuinte')->with('confirm-logout','Error ao sair');
            }
        }
        else
        if(!Auth::check())
        {
            return redirect('/')->with('confirm-logout','Até Mais...');
        }
    }
}
