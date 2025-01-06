<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageSearch extends Controller
{
    public function redirect()
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa estar logado !!!']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não acesso a essa área !!!']);
        }

        return view('search');
    }
}
