<?php

namespace App\Http\Controllers;
use App\Models\usuarios;
use App\Models\Curtida;
use App\Models\Hypar;
use App\Models\denuncias;
use App\Models\postarLivros;
use App\Models\controle_das_postagens_do_contribuinte_em_tempo_real;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class Administrador extends Controller
{
    public function Administrador()
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'administrador'){return response()->json(['status' => 'error' , 'message' => 'você não acesso a essa área']);}

        return response()->json([
            'usuarios' => usuarios::all(),
            'curtidas' => Curtida::all(),
            'hypagens' => Hypar::all(),
            'denuncias' => denuncias::all(),
            'postagens' => postarLivros::all(),
            'controle_do_usuario' => controle_em_tempo_real_dos_dados_do_booknest::all(),
            'controle_da_postagem' => controle_das_postagens_do_contribuinte_em_tempo_real::all()
        ]);
    }
}
