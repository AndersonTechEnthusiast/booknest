<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use Illuminate\Http\UploadedFile;
class ImagemDoAutor extends Controller
{
    public function ImagemDoAutor($id, Request $Validate)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa fazer login']); }
        if(Auth::user()->nivel_acessos !== 'contribuinte' && Auth::user()->nivel_acessos !== 'administrador'){return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'error inesperado !!!']);}

        $Validate->validate(
            [
                'foto' => 'image|required|max:2048'
            ],
            [
                'foto.image' => 'O Documento Não é uma Imagem',
                'foto.required' => 'O Documento é Necessitado',
                'foto.max' => 'O Tamanho Excedeu o Limite de 2MB'
            ]
        );
        
        $foto = $Validate->file('foto');

        if($foto->isValid())
        {
            $extensions = ['jpg' , 'jpeg' , 'avif' , 'png' , 'webp'];

            if(!in_array($foto->extension(),$extensions))
            {
                return response()->json(['status' => 'error' , 'message' => 'a extensão não é aceita']);
            }

            $time = time().".".$foto->extension();

            if($foto->move(public_path('imagens-de-perfil-de-usuarios'),$time))
            {
                $usuarios = usuarios::where('id',$id)->first();
                if(!$usuarios)
                {
                    return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado']);
                }

                if($usuarios->pathname)
                {
                    $usuarios->pathname = $time;
                    if($usuarios->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'A sua Foto de Perfil foi Atualizada com Sucesso !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error'  , 'message' => 'A sua Foto de Perfil não Alterada !!!']);
                    }
                }

                $usuarios->pathname = $time;
                if($usuarios->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'sua Foto foi inserida com Sucesso']);
                }
                else
                {
                    return response()->json(['status' => 'error'  , 'message' => 'sua Foto Não foi inserida']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'a imagem não foi armazenada no servidor']);
            }
        }
        else
        if(!$foto->isValid())
        {
            return response()->json(['status' => 'error' , 'message' => $foto->getErrorMessage()]);
        }
    }
}
