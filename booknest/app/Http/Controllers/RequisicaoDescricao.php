<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\descricao_do_contribuinte;
class RequisicaoDescricao extends Controller
{
    public function DescricaoRequesicao($id)
    {
        // retorna todos os registros
        return response()->json([descricao_do_contribuinte::where('id_do_autor',$id)->get()]);
    }
}
