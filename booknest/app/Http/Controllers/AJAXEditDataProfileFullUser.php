<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use Illuminate\Http\Request;

class AJAXEditDataProfileFullUser extends Controller
{
    public function EditDataAjax($id , Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisar para Acessar essa Área']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario')
        {
            return response()->json(['status' => 'error' , 'message' => 'Você não tem Acesso a essa Área']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado']);
        }

        $Validate->validate(['data' => 'max:10|min:10|regex:/^\d{2}\/\d{2}\/\d{4}$/'] , ['data.max' => 'O Limite Maximo é de 10','data.min' => 'O Limite Minimo é de 10', 'data.regex' => 'O Formato deve ser DD/MM/AAAA']);
        
        $usuarios = usuarios::where('id', $id)->first();

        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado !!!']);
        }
        if(!$usuarios->date)
        {
            return response()->json(['status' => 'error' , 'message' => 'data não encontrada !!!']);
        }

        $usuarios->date = $Validate['data'];
        if($usuarios->save())
        {
            return response()->json(['status' => 'sucess' , 'message' => 'Data Alterada com Sucesso !!!']);
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Data Não foi Alterada !!!']);
        }
    }
}
