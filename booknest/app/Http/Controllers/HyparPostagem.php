<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\postarLivros;
use Illuminate\Http\Request;
use App\Models\Hypar;
class HyparPostagem extends Controller
{
    public function Hypar($id ,$id_autor,$id_postagem , Request $Validate)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'error inesperado !!!']);}

        $Validate->validate(
            ['hypar'=>'string|max:14|min:14'],
            [
                'hypar.string'=>'Erro ao tentar Hypar Postagem',
                'hypar.max'=>'Erro ao tentar Hypar Postagem',
                'hypar.min'=>'Erro ao tentar Hyper Postagem'
            ]
        );
        if($Validate['hypar'] !== 'hypar_postagem' && $Validate['hypar'] !== 'nao_hypar_post')
        {
            return response()->json(['status' => 'error' , 'message' => 'valor não reconhecido !!']);  
        }
        // puxando informações 
        $usuario = usuarios::where('id',$id)->first();
        $postagem = postarLivros::where('id',$id_postagem)->first();
        $contribuinte = usuarios::where('id',$id_autor)->first();
        // verificando inexistencia
        if(!$usuario){return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado !!']);}
        if(!$postagem){return response()->json(['status' => 'error' , 'message' => 'postagem não encontrada !!']);}
        if(!$contribuinte){return response()->json(['status' => 'error' , 'message' => 'contribuinte não foi encontrado !!']);}
        // verifica se já existe hypar
        $hypar = Hypar::where('id_usuario',$id)->where('id_author',$id_autor)->where('id_postagem',$id_postagem)->first();
        if($hypar)
        {
            if($Validate['hypar'] === 'hypar_postagem')
            {
                $hypar->id_usuario = $id;
                $hypar->id_author = $id_autor;
                $hypar->id_postagem = $id_postagem;
                $hypar->titulo_postagem = $postagem->titulo;
                $hypar->imagem_postagem = $postagem->imagem;
                $hypar->hypar_postagem = 'hypar';
                if($hypar->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'a postagem foi hypada']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'a postagem não foi hypada']);
                }
            }
            else
            if($Validate['hypar'] === 'nao_hypar_post')
            {
                $hypar->delete();
            }
        }
        else
        {
            if($Validate['hypar'] === 'hypar_postagem')
            {
                // cria uma nova instância
                $hypar = new Hypar();
                $hypar->id_usuario = $id;
                $hypar->id_author = $id_autor;
                $hypar->id_postagem = $id_postagem;
                $hypar->titulo_postagem = $postagem->titulo;
                $hypar->imagem_postagem = $postagem->imagem;
                $hypar->hypar_postagem = 'hypar';
                if($hypar->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'a postagem foi hypada']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'a postagem não foi hypada']);
                }
            }
            else
            if($Validate['hypar'] === 'nao_hypar_post')
            {
                return response()->json(['status' => 'alert' , 'message' => 'resposta enviada']);
            }
        }
    }
}
