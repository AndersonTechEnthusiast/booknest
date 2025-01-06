<?php

namespace App\Http\Controllers;

use App\Models\usuarios;
use App\Models\postarLivros;
use App\Models\denuncias;
use App\Models\usuarios_deletados;
use App\Models\usuarios_bloqueados;
use App\Models\usuarios_suspensos;
use App\Models\usuarios_desbloqueados;
use App\Models\usuarios_com_niveis_de_acessos_alterados;
use App\Models\autentificado;
use App\Models\descricao_do_contribuinte;
use App\Models\ComentariosTotal;
use App\Models\Curtida;
use App\Models\solicitacaoContribuinte;
use App\Models\controle_das_postagens_do_contribuinte_em_tempo_real;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class AdminLogin extends Controller
{
    public function Administrador(Request $AllUser)
    {
        if(!Auth::check())
        {
            return redirect("/");
        }
        if(Auth::user()->nivel_acessos != 'administrador')
        {
            return redirect("/");
        } 
        $usuarios = usuarios::where('nivel_acessos','usuario')->get()->toArray();
        $contribuinte = usuarios::where('nivel_acessos','contribuinte')->get()->toArray();
        $postagens = postarLivros::all()->toArray();
        $denuncias = denuncias::all()->toArray();
        $ficcao =           postarLivros::where('genero','Ficção')->get()->toArray();
        $nao_ficcao =       postarLivros::where('genero','Não-Ficção')->get()->toArray();
        $poesia =           postarLivros::where('genero','Poesia')->get()->toArray();
        $drama =            postarLivros::where('genero','Drama')->get()->toArray();
        $conto =            postarLivros::where('genero','Conto')->get()->toArray();
        $infantojuvenil =   postarLivros::where('genero','Infantojuvenil')->get()->toArray();
        $novelagrafica =    postarLivros::where('genero','Novela Gráfica')->get()->toArray();
        $humor =            postarLivros::where('genero','Humor')->get()->toArray();
        $guiadeviajem =     postarLivros::where('genero','Guias de Viagem')->get()->toArray();
        $ensaios =          postarLivros::where('genero','Ensaios')->get()->toArray();
        $usuarios_bloqueados = usuarios_bloqueados::all()->toArray();
        $usuarios_suspensos = usuarios_suspensos::all()->toArray();
        $usuarios_deletados = usuarios_deletados::all()->toArray();
        $usuarios_desbloqueados = usuarios_desbloqueados::all()->toArray();
        $usuarios_nivel_de_acessos_alterados = usuarios_com_niveis_de_acessos_alterados::all()->toArray();
        if($contribuinte)
        {
            $contribuinte_ver = [];
            foreach($contribuinte as $contri)
            {
                $contribuinte_ver[$contri['id']] = [
                    'id' => $contri['id'],
                    'nome' => $contri['nome'],
                    'email' => $contri['email'],
                    'perfil' => $contri['pathname'],
                    'genero' => $contri['generos'],
                    'descricao' => null,
                    'autentificado' => null,
                    'quantidade' => null,
                    'postagens' => null
                ];
            }
            if(descricao_do_contribuinte::all()->toArray())
            {
                foreach ($contribuinte_ver as $keys => $value)
                {
                    foreach (descricao_do_contribuinte::all()->toArray() as $descricao)
                    {
                        if($descricao['id_do_autor'] == $keys)
                        {
                            $contribuinte_ver[$descricao['id_do_autor']]['descricao'] = $descricao['descricao'];
                        }
                    }
                }
            }
            if(autentificado::all()->toArray())
            {
                foreach ($contribuinte_ver as $keys => $value)
                {
                    foreach (autentificado::all()->toArray() as $autentificado)
                    {
                        if($autentificado['id_do_autor'] == $keys)
                        {
                            $contribuinte_ver[$autentificado['id_do_autor']]['autentificado'] = $autentificado['autenitificacion'];
                        }
                    }
                }
            }
            if($postagens)
            {
                foreach($contribuinte_ver as $keys => $values)
                {
                    foreach($postagens as $post)
                    {
                        if($keys == $post['id_do_autor'])
                        {
                            $contribuinte_ver[$post['id_do_autor']]['quantidade'] = postarLivros::where('id_do_autor',$post['id_do_autor'])->count();
                            $contribuinte_ver[$post['id_do_autor']]['postagens'][$post['id']] = [
                                'id' => $post['id'],
                                'titulo' => $post['titulo'],
                                'autor' => $post['autor'],
                                'genero' => $post['genero'],
                                'sinopse' => $post['sinopse'],
                                'id_do_autor' => $post['id_do_autor'],
                                'imagem' => $post['imagem']
                            ];
                        }
                    }
                }
            }
        }
        $postagens_gerenciamento = [];
        if($postagens)
        {
            foreach($postagens as $post)
            {
                foreach($contribuinte as $contri)
                {
                    if($post['id_do_autor'] == $contri['id'])
                    {
                        $postagens_gerenciamento[$post['id']] = [
                            'id' => $post['id'],
                            'titulo' => $post['titulo'],
                            'autor' => $post['autor'],
                            'genero' => $post['genero'],
                            'sinopse' => $post['sinopse'],
                            'data' => $post['data'],
                            'hora' => $post['hora'],
                            'editora' => $post['editora'],
                            'paginas' => $post['num_paginas'],
                            'formato' => $post['formato'],
                            'isbn' => $post['isbn'],
                            'classificacao' => $post['classificacao'],
                            'id_do_autor' => $post['id_do_autor'],
                            'imagem' => $post['imagem'],
                            'contribuinte' => $contri['nome'],
                            'perfil' => $contri['pathname']
                        ];
                    }
                }
            }
        }
        $comentarios = ComentariosTotal::all()->toArray();
        $curtidas = Curtida::all()->toArray();
        $solicitacoes = solicitacaoContribuinte::all()->toArray();
        $controle_de_postagens = controle_das_postagens_do_contribuinte_em_tempo_real::all()->toArray();
        $controle_em_tempo_real = controle_em_tempo_real_dos_dados_do_booknest::all()->toArray();
       
        return view('admin-home',[
            'usuarios' => $usuarios,
            'contribuinte' => $contribuinte,
            'postagens' => $postagens,
            'denuncias' => $denuncias,
            'Ficcao' => $ficcao,
            'NaoFiccao' => $nao_ficcao,
            'Poesia' => $poesia,
            'Drama' => $drama,
            'Conto' => $conto,
            'Infantojuvenil' => $infantojuvenil,
            'NovelaGrafica' => $novelagrafica ,
            'Humor' => $humor,
            'GuiasdeViagem' => $guiadeviajem,
            'Ensaios' => $ensaios,
            'usuarios_bloqueados' => $usuarios_bloqueados,
            'usuarios_suspensos' => $usuarios_suspensos,
            'usuarios_deletados' => $usuarios_deletados,
            'usuarios_desbloqueados' => $usuarios_desbloqueados,
            'usuarios_nivel_de_acessos_alterados' => $usuarios_nivel_de_acessos_alterados,
            'autentificados' => autentificado::all()->toArray(),
            'descricoes' => descricao_do_contribuinte::all()->toArray(),
            'contribuintes' => $contribuinte_ver,
            'gerenciamento_postagens' => $postagens_gerenciamento,
            'comentarios' => $comentarios,
            'curtida' => $curtidas,
            'solicitacao' => $solicitacoes,
            'controle_de_postagens' => $controle_de_postagens,
            'controle_em_tempo_real' => $controle_em_tempo_real
        ]);
    }
}

