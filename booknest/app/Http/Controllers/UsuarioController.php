<?php

namespace App\Http\Controllers;
use App\Models\usuarios;
use App\Models\postarLivros;
use App\Models\ComentariosTotal;
use App\Models\Curtida;
use App\Models\LivrosSalvos;
use App\Models\contribuinte_usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{
    public function UsuarioVerify(Request $Usuario)
    {
        if(!Auth::check())
        {
            return redirect()->back()->with("feedback","Faça Login Para Acessar");
        }

        if(Auth::user()->nivel_acessos !== 'usuario')
        {
            return back()->with('feedback','você não tem permissão para acessar essa área');
        }
        // não se esqueça de puxar pelo id do usuario Logado
        $Postagens = postarLivros::all();
        $curtidas = Curtida::where('id_usuario',Auth::user()->id)->get();
        $livros_comentados = ComentariosTotal::where('id_user',Auth::user()->id)->get();
        $livros_salvos = LivrosSalvos::where('id_do_usuario',Auth::user()->id)->get();
        $verificacaoDeContribuinte = contribuinte_usuarios::where('id_do_contribuinte',Auth::user()->id)->first();
        $complementoDoPerfil = [
            'criado_em' => '12/09/2024',
            'atualizado_em' => '12/09/2024'
        ];
        return view('usuario-home',[
            'Postagens' => $Postagens,
            'Curtidas' => $curtidas,
            'Livros_Salvos' => $livros_salvos,
            'Complemento_do_Perfil' => $complementoDoPerfil,
            'Livros_Comentados' => $livros_comentados,
            'Verificacao' => $verificacaoDeContribuinte
        ]);
    }
}
