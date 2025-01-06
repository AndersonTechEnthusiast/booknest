<?php

namespace App\Http\Controllers;
use App\Models\usuarios;
use Illuminate\Http\Request;
// importanto a classe que verifica o Upload de Imagens
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;

class Profile_Photo extends Controller
{
    public function Profile_Photo($id , Request $profile)
    {
       if(Auth::check()) 
       {
        if(Auth::user()->nivel_acessos === 'usuario')
        {
            // validando dados ['chave-do-input' => 'regras'] , ['chave-do-input.regra' => 'mensagem-de-error']
            $profile->validate(['imagem-perfil' => 'required|image|max:2048'] , ['imagem-perfil.required' => 'É necessario ter uma Foto','imagem-perfil.image' => 'O Arquivo deve ser uma Foto', 'imagem-perfil.max' => 'O Arquivo Excedeu o Limite de 2MB']);
            // file() trás a instância da classe que está em UploadedFile , lembrando a instância é a criação de um objeto concreto através de uma classe
            $foto = $profile->file('imagem-perfil');
            // verifica se o arquivo (file) é Valido (isValid)
            if($foto->isValid())
            {
                // isValid() mostra se existi algum error no sistema
                // verificando a extension()
                $extensions = ['jpg','png','webp','avif'];
                if(!in_array($foto->extension() , $extensions))
                {
                    return back()->with('error-extension', 'A Extensão deve ser , .PNG , .JPG , .WEBP ou .AVIF');
                }
                // evitando sobreposição de arquivos
                // time() adicione um nome "token" para evitar nomes repetidos
                $foto_pathname = time().'.'.$foto->extension();
                // movendo a imagem para uma pasta publica para ser puxada novamente
                if($foto->move(public_path('imagens-de-perfil-de-usuarios'),$foto_pathname))
                {
                    // verifica se o id enviado é o mesmo do logado
                    if($id == Auth::user()->id)
                    {
                        $usuario = usuarios::where('id', $id)->first();
                        // não estou criando uma nova instância, $inserção =  new usuarios; ou $update = new usuarios; porque so quero inserir em uma coluna
                        // então so verifica se a coluna existe
                        // se existir atualize
                        if($usuario)
                        {
                            if($usuario->pathname)
                            {
                                $usuario->pathname = $foto_pathname;
                                if($usuario->save())
                                {
                                    return back()->with('success-upload','foto editada com sucesso !!!');
                                }
                                else
                                {
                                    return back()->with('error-img','Error ao Tentar Inserir a Imagem');
                                }
                            }
                            else
                            // se não existir insira
                            {
                                $usuario->pathname = $foto_pathname;
                                if($usuario->save())
                                {
                                    return back()->with('success-upload','foto inserida com sucesso !!!');
                                }
                                else
                                {
                                    return back()->with('error-img','Error ao Tentar Inserir a Imagem');
                                }
                            }
                        }
                    }
                }
                else
                if(!$foto->move(public_path('imagens-de-perfil-de-usuarios'),$foto_pathname))
                {
                    return back()->with('error-img','error ao mover a imagem');
                }
            }
            else
            if(!$foto->isValid())
            {
                // se exitir
                $error = $foto->getErrorMessage();
                return back()->with('error-img',$error);
            }
        }
        else
        {
            return back()->with('error-img','você não tem acesso a essa Área');
        }
        return back()->with('error-img', 'Você precisa ta Logado');
       }
    }
}
