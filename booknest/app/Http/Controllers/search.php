<?php

namespace App\Http\Controllers;

use App\Models\LivrosSalvos;
use Illuminate\Http\Request;
use App\Models\postarLivros;
use Illuminate\Support\Facades\Auth;

class search extends Controller
{
    public function pesquisar($search)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'é preciso fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'administrador'){return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área']);}

        if($search)
        {
            if($search === 'Todos')
            {
                return response()->json(['status'=>'success-group' , 'resultado' => postarLivros::all()->toArray()]);
            }
            else
            if(is_numeric($search))
            {
                $livros = postarLivros::where('id',$search)->first();
                if(!$livros)
                {
                    return response()->json(['status' => 'error','resultado' => 'Nenhum Resultado Encontrado !!!']);
                }
                return response()->json(['status' => 'success-single','resultado' => $livros]);
            }
            else
            if(is_string($search))
            {
                $livros = postarLivros::where('titulo',$search)->first();
                if(!$livros)
                {
                    $autores = postarLivros::where('autor',$search)->get()->toArray();
                    if(!$autores)
                    {
                        return response()->json(['status' => 'error','resultado' => 'Nenhum Resultado Encontrado !!!']);
                    }
                    return response()->json(['status' => 'success-group','resultado' => $autores]);
                }
                return response()->json(['status' => 'success-single','resultado' => $livros]);
            }
        }
        else
        {
            return response()->json(['resultado' => LivrosSalvos::all()->toArray()]);
        }
    }
}
