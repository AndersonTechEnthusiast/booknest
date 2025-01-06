<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\ComentariosTotal;

class Comentarios extends Controller
{
    public function Comentarios($id_da_postagem)
    {
        // puxando os comentarios da postagem
        $comentarios = ComentariosTotal::where('id_postagem',$id_da_postagem)->get();
        return response()->json($comentarios);
    }
}
