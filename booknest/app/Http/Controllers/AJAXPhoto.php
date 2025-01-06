<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;

class AJAXPhoto extends Controller
{
    public function AJAXFoto($id , Request $Validate)
    {
        if(!Auth::check())
        {
            return redirect()->back()->with('feedback','Você precisa fazer Login para Acessar essa Área');
        }
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'contribuinte' && Auth::user()->nivel_acessos !== 'Administrador')
        {
            return response()->json(['status' => 'error', 'message' => 'Você não tem Nivel Acesso Reconhecido']);
        }
        // verifica e filtra a imagem 
        // validate(['nome_do_dado' => 'regras|regras|regras'] , ['nome_do_dado.regra' => 'mensagem de error'])
        $Validate->validate(['foto' => 'required|image|max:2048'],['foto.required' => 'É necessario escolher uma Foto','foto.image' => 'Não é uma imagem','foto.max' => 'A imagem ultrapassa o limite de 2048']);
        // passa no validade recupere a imagem com uma variavel ($foto)
        // usa instância de uma file() do Arquivo use Illuminate\Http\UploadedFile;
        $foto = $Validate->file('foto');
        if($foto->isValid())
        {
            // verifica a extensão
            $extensions = ['png','jpg','avif','webp'];
            if(!in_array($foto->extension(),$extensions))
            {
                return response()->json(['status' => 'error' , 'message' => 'A sua Foto não possui a extensão exigida (.png , .jpg , .webp ou .avif)']);
            }

            // adiciona um id unico para evitar sobrescrição
            $time = time().".".$foto->extension();
            
            // move para a pasta do servidor local
            // move(caminho , dado) -> move para algum lugar (caminho) alguma coisa (dado)
            // public_path() -> caminho publico , ele vai direto na pasta 'public' do arquivo 
            if($foto->move(public_path('imagens-de-perfil-de-usuarios'),$time))
            {
                // se movou corretamente 
                // insira no banco de dados 
                // verifica se o id enviado e o mesmo do id logado

                if((int)$id !== (int)Auth::user()->id)
                {
                    return response()->json(['status' => 'Error' , 'message' => 'error']);
                }
                // 1° -> cria uma nova variavel que alocará a pesquisa ao banco de dados
                // 2° -> aplica ::where() , enquanto ::where('id' => $id) , enquanto o id da tabela for igual ao id logado você traga o first() , o primeiro
                $usuarios = usuarios::where('id' , $id)->first();
                // 3° -> verifica se alguma linha foi afetada 
                if($usuarios)
                {
                    // se existir
                    // verifica se o pathname (foto) , já tem algum dado
                    if($usuarios->pathname)
                    {
                        // atualiza o dado existente com o dado atual
                        $usuarios->pathname = $time;
                        // verifica se foi salvo 
                        if($usuarios->save())
                        {
                            return response()->json(['status' => 'sucess','message' => 'A imagem foi editada com sucesso']);
                        }
                        else
                        {
                            return response()->json(['status' => 'error','message' => 'A Foto por Motivos Inesperado não foi atualizada']);
                        }
                    }
                    else
                    {
                        $usuarios->pathname = $time;
                        
                        if($usuarios->save())
                        {
                            return response()->json(['status' => 'sucess', 'message' => 'A imagem foi inserida com sucesso']);
                        }
                        else
                        {
                            return response()->json(['status' => 'sucess', 'message' => 'A Foto por Motivo Inesperado não foi atualizada']);
                        }
                    }
                }
            }
        }
        else
        if(!$foto->isValid())
        {
            return response()->json(['status' => 'error' , 'message' => $foto->getErrorMessage()]);
        }
    }
}
