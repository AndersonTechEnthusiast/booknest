<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\ComentariosTotal;
use App\Models\LivrosSalvos;
use App\Models\Curtida;
use App\Models\usuarios;
use Illuminate\Http\Request;

class VerifyRedirectProfileFull extends Controller
{
    public function VerificandoNivelUser(Request $Validation)
    {
        if(!Auth::check())
        {
            return redirect()->back()->with('feedback','Faça Login para Acessar !!!');
        }

        if(Auth::user()->nivel_acessos !== 'usuario')
        {
            return redirect()->back()->with('feedback','Você não tem Acesso a Essa Área !!!');
        } 
        $curtidas = Curtida::where('id_usuario',Auth::user()->id)->get();
        $livros_salvos = LivrosSalvos::where('id_do_usuario',Auth::user()->id)->get();
        $livros_comentados = ComentariosTotal::where('id_user',Auth::user()->id)->get();
        // $curtidas = [
        //     ['id' => 1, 'id_postagem' => 1, 'id_author'=> 1,  'id_usuario' => 1,  'titulo_postagem' => 'Os Cem Anos de Solidão', 'imagem_postagem' => 'Slides-1.jpg','curtida'=> 'like','data'=>'01/11/2024' ],
        //     ['id' => 2, 'id_postagem' => 2, 'id_author'=> 2,  'id_usuario' => 2,  'titulo_postagem' => 'Orgulho e Preconceito',  'imagem_postagem' => 'Slides-2.png','curtida'=> 'like','data'=>'01/11/2024' ],
        //     ['id' => 3, 'id_postagem' => 3, 'id_author'=> 3,  'id_usuario' => 3,  'titulo_postagem' => 'O Morro dos Ventos Uivantes', 'imagem_postagem' => 'Slides-3.jpg','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 4, 'id_postagem' => 4, 'id_author'=> 4,  'id_usuario' => 4,  'titulo_postagem' => 'A Revolução dos Bichos', 'imagem_postagem' => 'Slides-4.jpg','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 5, 'id_postagem' => 5, 'id_author'=> 5,  'id_usuario' => 5,  'titulo_postagem' => 'O Sol é Para Todos', 'imagem_postagem' => 'Slides-4.webp','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 6, 'id_postagem' => 6, 'id_author'=> 6,  'id_usuario' => 6,  'titulo_postagem' => 'Grande Sertão: Veredas', 'imagem_postagem' => 'Slides-5.jpg','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 7, 'id_postagem' => 7, 'id_author'=> 7,  'id_usuario' => 7,  'titulo_postagem' => 'Dom Quixote', 'imagem_postagem' => 'Slides-6.jpg','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 8, 'id_postagem' => 8, 'id_author'=> 8,  'id_usuario' => 8,  'titulo_postagem' => '1984', 'imagem_postagem' => 'Slides-6.webp','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 9, 'id_postagem' => 9, 'id_author'=> 9,  'id_usuario' => 9,  'titulo_postagem' => 'Memórias Póstumas de Brás Cubas', 'imagem_postagem' => 'Slides-7.webp','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 10,'id_postagem' => 10,'id_author'=> 10, 'id_usuario' => 10, 'titulo_postagem' => 'O Conde de Monte Cristo', 'imagem_postagem' => 'Slides-8.png','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 11,'id_postagem' => 11,'id_author'=> 11, 'id_usuario' => 11, 'titulo_postagem' => 'O Apanhador no Campo de Centeio', 'imagem_postagem' => 'Slides-9.webp','curtida'=> 'like','data'=>'01/11/2024'],
        //     ['id' => 12,'id_postagem' => 12,'id_author'=> 12, 'id_usuario' => 12, 'titulo_postagem' => 'Jane Eyre', 'imagem_postagem' => 'Slides-10.jpg','curtida'=> 'like','data'=>'01/11/2024'],
        // ];
        // $livros_salvos = [
        //     ['id'=>1,'id_da_postagem'=>1,'id_do_colaborador'=>1,'id_do_usuario'=>1,'titulo_da_postagem'=>'Duna','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>2,'id_da_postagem'=>2,'id_do_colaborador'=>2,'id_do_usuario'=>2,'titulo_da_postagem'=>'Fundação','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>3,'id_da_postagem'=>3,'id_do_colaborador'=>3,'id_do_usuario'=>3,'titulo_da_postagem'=>'Neuromancer','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>4,'id_da_postagem'=>4,'id_do_colaborador'=>4,'id_do_usuario'=>4,'titulo_da_postagem'=>'1984.','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>5,'id_da_postagem'=>5,'id_do_colaborador'=>5,'id_do_usuario'=>5,'titulo_da_postagem'=>'O Senhor dos Anéis','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>6,'id_da_postagem'=>6,'id_do_colaborador'=>6,'id_do_usuario'=>6,'titulo_da_postagem'=>'O Nome do Vento','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>7,'id_da_postagem'=>7,'id_do_colaborador'=>7,'id_do_usuario'=>7,'titulo_da_postagem'=>'As Crônicas de Nárnia','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>8,'id_da_postagem'=>8,'id_do_colaborador'=>8,'id_do_usuario'=>8,'titulo_da_postagem'=>'A Canção do Sangue','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>9,'id_da_postagem'=>9,'id_do_colaborador'=>9,'id_do_usuario'=>9,'titulo_da_postagem'=>'Orgulho e Preconceito','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>10,'id_da_postagem'=>10,'id_do_colaborador'=>10,'id_do_usuario'=>10,'titulo_da_postagem'=>'Dom Casmurro','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>11,'id_da_postagem'=>11,'id_do_colaborador'=>11,'id_do_usuario'=>11,'titulo_da_postagem'=>'O Grande Gatsby','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>12,'id_da_postagem'=>12,'id_do_colaborador'=>12,'id_do_usuario'=>12,'titulo_da_postagem'=>'Cem Anos de Solidão','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>13,'id_da_postagem'=>13,'id_do_colaborador'=>13,'id_do_usuario'=>13,'titulo_da_postagem'=>'O Código Da Vinci','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>14,'id_da_postagem'=>14,'id_do_colaborador'=>14,'id_do_usuario'=>14,'titulo_da_postagem'=>'Assassinato no Expresso do Oriente','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>15,'id_da_postagem'=>15,'id_do_colaborador'=>15,'id_do_usuario'=>15,'titulo_da_postagem'=>'Garota Exemplar','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>16,'id_da_postagem'=>16,'id_do_colaborador'=>16,'id_do_usuario'=>16,'titulo_da_postagem'=>'Os Homens Que Não Amavam as Mulheres','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>17,'id_da_postagem'=>17,'id_do_colaborador'=>17,'id_do_usuario'=>17,'titulo_da_postagem'=>'O Iluminado','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>18,'id_da_postagem'=>18,'id_do_colaborador'=>18,'id_do_usuario'=>18,'titulo_da_postagem'=>'Drácula','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>19,'id_da_postagem'=>19,'id_do_colaborador'=>19,'id_do_usuario'=>19,'titulo_da_postagem'=>'Frankenstein','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>20,'id_da_postagem'=>20,'id_do_colaborador'=>20,'id_do_usuario'=>20,'titulo_da_postagem'=>'A Assombração da Casa da Colina','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>21,'id_da_postagem'=>21,'id_do_colaborador'=>21,'id_do_usuario'=>21,'titulo_da_postagem'=>'Moby Dick','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>22,'id_da_postagem'=>22,'id_do_colaborador'=>22,'id_do_usuario'=>22,'titulo_da_postagem'=>'A Ilha do Tesouro','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>23,'id_da_postagem'=>23,'id_do_colaborador'=>23,'id_do_usuario'=>23,'titulo_da_postagem'=>'Viagem ao Centro da Terra','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>24,'id_da_postagem'=>24,'id_do_colaborador'=>24,'id_do_usuario'=>24,'titulo_da_postagem'=>'Coração das Trevas','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>25,'id_da_postagem'=>25,'id_do_colaborador'=>25,'id_do_usuario'=>25,'titulo_da_postagem'=>'O Pintassilgo','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>26,'id_da_postagem'=>26,'id_do_colaborador'=>26,'id_do_usuario'=>26,'titulo_da_postagem'=>'A Menina que Roubava Livros','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>27,'id_da_postagem'=>27,'id_do_colaborador'=>27,'id_do_usuario'=>27,'titulo_da_postagem'=>'Guerra e Paz','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>28,'id_da_postagem'=>28,'id_do_colaborador'=>28,'id_do_usuario'=>28,'titulo_da_postagem'=>'O Tempo Entre Costuras','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>29,'id_da_postagem'=>29,'id_do_colaborador'=>29,'id_do_usuario'=>29,'titulo_da_postagem'=>'Steve Jobs','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>30,'id_da_postagem'=>30,'id_do_colaborador'=>30,'id_do_usuario'=>30,'titulo_da_postagem'=>'Eu Sou Malala','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>31,'id_da_postagem'=>31,'id_do_colaborador'=>31,'id_do_usuario'=>31,'titulo_da_postagem'=>'Diário de Anne Frank','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>32,'id_da_postagem'=>32,'id_do_colaborador'=>32,'id_do_usuario'=>32,'titulo_da_postagem'=>'Longe da Árvore','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>33,'id_da_postagem'=>33,'id_do_colaborador'=>33,'id_do_usuario'=>33,'titulo_da_postagem'=>'O Coração é um Caçador Solitário','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>34,'id_da_postagem'=>34,'id_do_colaborador'=>34,'id_do_usuario'=>34,'titulo_da_postagem'=>'Poemas Completos de Fernando Pessoa','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>35,'id_da_postagem'=>35,'id_do_colaborador'=>35,'id_do_usuario'=>35,'titulo_da_postagem'=>'Outros Jeitos de Usar a Boca','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>36,'id_da_postagem'=>36,'id_do_colaborador'=>36,'id_do_usuario'=>36,'titulo_da_postagem'=>'A Divina Comédia','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>37,'id_da_postagem'=>37,'id_do_colaborador'=>37,'id_do_usuario'=>37,'titulo_da_postagem'=>'Sapiens','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>38,'id_da_postagem'=>38,'id_do_colaborador'=>38,'id_do_usuario'=>38,'titulo_da_postagem'=>'O Poder do Hábito','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>39,'id_da_postagem'=>39,'id_do_colaborador'=>39,'id_do_usuario'=>39,'titulo_da_postagem'=>'Como Fazer Amigos e Influenciar Pessoas','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],
        //     ['id'=>40,'id_da_postagem'=>40,'id_do_colaborador'=>40,'id_do_usuario'=>40,'titulo_da_postagem'=>'O Gene','livro'=>'binario','generos'=>'ficção','data'=>'09/11/2024','imagem_postagem' => 'Slides-4.jpg'],

        // ];
        // $livros_comentados = [
        //     ['id' => 1,'id_do_autor' => 1,'id_da_postagem' => 1,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 1',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 2,'id_do_autor' => 2,'id_da_postagem' => 2,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 2',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 3,'id_do_autor' => 3,'id_da_postagem' => 3,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 3',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 4,'id_do_autor' => 4,'id_da_postagem' => 4,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 4',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 5,'id_do_autor' => 5,'id_da_postagem' => 5,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 5',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 6,'id_do_autor' => 6,'id_da_postagem' => 6,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 6',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 7,'id_do_autor' => 7,'id_da_postagem' => 7,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 7',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 8,'id_do_autor' => 8,'id_da_postagem' => 8,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 8',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 9,'id_do_autor' => 9,'id_da_postagem' => 9,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 9',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 10,'id_do_autor' => 10,'id_da_postagem' => 10,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 10',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 11,'id_do_autor' => 11,'id_da_postagem' => 11,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 11',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 12,'id_do_autor' => 12,'id_da_postagem' => 12,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 12',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 13,'id_do_autor' => 13,'id_da_postagem' => 13,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 13',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 14,'id_do_autor' => 14,'id_da_postagem' => 14,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 14',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 15,'id_do_autor' => 15,'id_da_postagem' => 15,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 15',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 16,'id_do_autor' => 16,'id_da_postagem' => 16,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 16',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 17,'id_do_autor' => 17,'id_da_postagem' => 17,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 17',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 18,'id_do_autor' => 18,'id_da_postagem' => 18,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 18',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 19,'id_do_autor' => 19,'id_da_postagem' => 19,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 19',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 20,'id_do_autor' => 20,'id_da_postagem' => 20,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 20',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 21,'id_do_autor' => 21,'id_da_postagem' => 21,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 21',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 22,'id_do_autor' => 22,'id_da_postagem' => 22,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 22',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 23,'id_do_autor' => 23,'id_da_postagem' => 23,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 23',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 24,'id_do_autor' => 24,'id_da_postagem' => 24,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 24',"imagem_da_postagem" =>"Slide-4.webp"],
        //     ['id' => 25,'id_do_autor' => 25,'id_da_postagem' => 25,'titulo_da_postagem' => '1984','postagem' => 'binario','comentario' => 'Muito Bom Esse Livro em Nossa Top de Mais 25',"imagem_da_postagem" =>"Slide-4.webp"],
        // ];
        $complementoDoPerfil = [
            'criado_em' => usuarios::where('id',Auth::user()->id)->pluck('created_at'),
            'atualizado_em' => usuarios::where('id',Auth::user()->id)->pluck('updated_at')
        ];
        return view('profile-usuario-full',[
            'Curtidas' => $curtidas,
            'Livros_Salvos' => $livros_salvos,
            'Livros_Comentados' => $livros_comentados,
            'Complemento' => $complementoDoPerfil
        ]); 
    }
}
