<?php

// Importa o UserController

use App\Http\Controllers\AdminLogin;
use App\Http\Controllers\CadastroUserBookNest;
use App\Http\Controllers\ContribuintControllerBookNest;
use App\Http\Controllers\LoginUserBookNest;
use App\Http\Controllers\LogoutAdmin;
use App\Http\Controllers\LogoutUserBookNest;
use App\Http\Controllers\Profile_Photo;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VerifyRedirectProfileFull;
use App\Http\Controllers\AJAXPhoto;
use App\Http\Controllers\AJAXEditNameProfileFullUser;
use App\Http\Controllers\AJAXEditEmailProfileFullUser;
use App\Http\Controllers\AJAXEditDataProfileFullUser;
use App\Http\Controllers\AJAXEditGeneroProfileFullUser;
use App\Http\Controllers\PostarLivro;
use App\Http\Controllers\EditMyPostTablePost;
use App\Http\Controllers\EditDadosFullProfileFromContribuinte;
use App\Http\Controllers\DescricaoDoContribuint;
use App\Http\Controllers\RequisicaoDescricao;
use App\Http\Controllers\verPostagemCompleta;
use App\Http\Controllers\Postagem;
use App\Http\Controllers\Comentarios;
use App\Http\Controllers\Comentar;
use App\Http\Controllers\LikeAndDeslike;
use App\Http\Controllers\PuxarCurtidas;
use App\Http\Controllers\HyparPostagem;
use App\Http\Controllers\PuxarHypagem;
use App\Http\Controllers\VerPerfilContribuinteBookNest;
use App\Http\Controllers\Livros_Salvos;
use App\Http\Controllers\solicitacao;
use App\Http\Controllers\exclusaoPost;
use App\Http\Controllers\contribuinte_usuarios_usuarios_contribuinte;
use App\Http\Controllers\ImagemDoAutor;
use App\Http\Controllers\DenunciasVerifyForUser;
use App\Http\Controllers\DenunciarPostagem;
use App\Http\Controllers\RemoverDenuncia;
use App\Http\Controllers\Administrador;
use App\Http\Controllers\redes_sociais;
use App\Http\Controllers\DelecaoDoUsuario;
use App\Http\Controllers\BloquearUsuario;
use App\Http\Controllers\SuspensaoDoUsuario;
use App\Http\Controllers\NivelDeAcessosAlterado;
use App\Http\Controllers\AcaoDoContribuinte;
use App\Http\Controllers\GerenciamentoDePostagensForAdministradorBookNest;
use App\Http\Controllers\SolicitacoesEcontrolersDoSistemaDoBookNestDoAdministrador;
use App\Http\Controllers\NotificacaoContribuinte;
use App\Http\Controllers\search;
use App\Http\Controllers\PageSearch;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Rota para exibir o formulário
Route::get('/' , function(){
    return view('home' , ['status' => session('Mensagem') , 'feedback' => session('feedback') , ['Login' => session('Login-feedback')] , ['NotFoundUser' => session('Return')], ['Login-feedback' => session('Login-feedback-failed')] , ['logout' => session('middleware-return-mensagem-try-logout-autentificação') , 'logout-if-exists' => session('middleware-return-mensagem-try-logout-nivel-de-acessos')], ['logout-feedback' => session('confirm-logout')]]); // capturando as mensagens de erros vinda direto de Acessos e criando uma sessão para elas serem mostradas na view);
    // estrutura do middleware: middleware('nome_do_middleware_registrado');
    // a diferença deles é que um é definido apenas um unico nivel de acesso o que não é definido pode-se definir no proprio middleware
})->middleware('Loged')->name('home');
// pega o pathname colocado ali em baixo
Route::get('/usuario-home' , [UsuarioController::class , 'UsuarioVerify'])->middleware('Acessos:usuario')->name('usuario-home');
// estrutura do middleware: middleware('nome_do_middleware_registrado':'nome_do_papel_($roles)')
Route::get('/admin-home',function(){
    return view('admin-home',['Login-feedback' => session('Login-feedback')]);
})->middleware('Admin:administrador')->name('admin-home');
// no formulario o action está assim <form action="{{route('cadastro-pathname')}}" method="POST">
// isso significa que ele está pegando o nome dessa Route::post abaixo , e ao pegar essa Route::post
// ele esta setando na URL esse pathname /CadastroUserBookNest , e logo acima
Route::post('/CadastroUserBookNest' , [CadastroUserBookNest::class , 'User'])->name('cadastro-pathname');
Route::post('/LoginUserBookNest' , [LoginUserBookNest::class , 'LoginUser'])->name('login-pathname');
Route::post('/LogoutUserBookNest' , [LogoutUserBookNest::class , 'LogoutUserBookNest'])->middleware('Acessos:usuario,contribuinte')->name('logout');
// pegando o id que foi enviado no action="{{route('perfil-photo',['id' => Auth::user()->id])}}"
Route::post('/Profile-Photo/{id}' , [Profile_Photo::class , 'Profile_Photo'])->middleware('Acessos:usuario')->name('perfil-photo');
Route::post('/LogoutAdmin' , [LogoutAdmin::class , 'LogoutAdmin'])->name('logout-adm');
Route::get('/AdminLogin' , [AdminLogin::class , 'Administrador'])->middleware('Admin:administrador')->name('HomeAdmin');
Route::get('/ContribuintControllerBookNest' , [ContribuintControllerBookNest::class , 'VerifyContribuint'])->middleware('ContribuinteVerify:contribuinte')->name('contribuinte-verify');
Route::get('/Contribuinte-Home',[ContribuintControllerBookNest::class , 'VerifyContribuint'])->middleware('ContribuinteVerify:contribuinte')->name('contribuinte');
Route::get('/UsuarioController', [UsuarioController::class , 'UsuarioVerify'])->middleware('Acessos:usuario')->name('usuario-verify');
Route::get('/VerifyRedirectProfileFull', [VerifyRedirectProfileFull::class , 'VerificandoNivelUser'])->middleware('usuarioVerifyProfille:usuario')->name('usuario-profile');
Route::get('/usuario-profile' , [VerifyRedirectProfileFull::class , 'VerificandoNivelUser'])->middleware('usuarioVerifyProfille:usuario')->name('usuario-profile');
Route::post('/EditarFotoPerfilProfile/{id}' , [AJAXPhoto::class , 'AJAXFoto'])->middleware('Acessos:usuario,contribuinte');
// Editar Dados Com Ajax na pade do Profile Full do User
Route::post('/EditarNomePerfil/{id}', [AJAXEditNameProfileFullUser::class , 'EditNameAjax'])->middleware('Acessos:usuario');
Route::post('/EditarEmailPerfil/{id}' , [AJAXEditEmailProfileFullUser::class , 'EmailAJAXEdit'])->middleware('Acessos:usuario');
Route::post('/EditarDataPerfil/{id}' , [AJAXEditDataProfileFullUser::class , 'EditDataAjax'])->middleware('Acessos:usuario');
Route::post('/EditarGenerosPerfil/{id}' , [AJAXEditGeneroProfileFullUser::class , 'EditGenerosAJAX'])->middleware('Acessos:usuario');
Route::post('/PostarPostagem/{id}' , [PostarLivro::class , 'PostarLivro'])->middleware('Acessos:contribuinte');
Route::post('/EditarPostagem/{id}' , [EditMyPostTablePost::class ,'EditarMyPostFromTable'])->middleware('Acessos:contribuinte');
Route::post('/EditarDadosContribuinte/{id}',[EditDadosFullProfileFromContribuinte::class, 'EditarDadosProfileFullPageContribuint'])->middleware('Acessos:contribuinte');
Route::post('/PostarDescricao/{id}', [DescricaoDoContribuint::class , 'Descricao'])->middleware('Acessos:contribuinte');
Route::get('/RequisicaoDescricao/{id}', [RequisicaoDescricao::class ,'DescricaoRequesicao'])->middleware('Acessos:contribuinte');
Route::get('/ViewPostFull/{id}',[verPostagemCompleta::class , 'verPostagemCompleta'])->name('ver-postagem-completa')->middleware('Acessos:usuario,contribuinte');
Route::get('/Postagem/{id}',[Postagem::class , 'Postagem'])->name('Postagem')->middleware('Acessos:usuario,administrador');
Route::get('/Comenterios/{id}', [Comentarios::class , 'Comentarios'])->name('comentarios')->middleware('Acessos:usuario,contribuinte');
Route::post('/Comentar/{id}/{id_autor}/{id_postagem}', [Comentar::class, 'Comentar'])->name('comentar')->middleware('Acessos:contribuinte,usuario');
Route::post('/CurtirPostagem/{id}/{id_autor}/{id_postagem}' ,[LikeAndDeslike::class , 'Curtidas'])->name('curtir')->middleware('Acessos:usuario');
Route::get('/PuxarCurtidas/{id}/{id_postagem}', [PuxarCurtidas::class , 'PuxarCurtidasDoUsuario'])->middleware('Acessos:usuario');
Route::post('/HyparPostagem/{id}/{id_autor}/{id_postagem}' , [HyparPostagem::class , 'Hypar'])->middleware('Acessos:usuario');
Route::get('/PuxarHypagens/{id}/{id_autor}/{id_postagem}',[PuxarHypagem::class , 'PuxarHypagem'])->middleware('Acessos:usuario');
Route::get('/VerPerfilDoAutor/{id}/{id_autor}', [VerPerfilContribuinteBookNest::class , 'PerfilAutor'])->name('ver-perfil')->middleware('Acessos:usuario,contribuinte,administrador');
Route::post('/Biblioteca/{id}/{id_autor}/{id_postagem}' , [Livros_Salvos::class , 'LivrosSalvos'])->middleware('Acessos:usuario');
Route::post('/solicitacao/{id}',[solicitacao::class , 'solicitacao'])->middleware('Acessos:usuario,contribuinte');
Route::post('/ExclusaoPost/',[exclusaoPost::class , 'exclusion'])->middleware('Acessos:contribuinte,administrador');
Route::post('/TrocarNivelDeAcessos/{id}' , [contribuinte_usuarios_usuarios_contribuinte::class , 'contribuinte_para_usuarios_usuarios_para_contribuintes'])->middleware('Acessos:usuario,contribuinte');
Route::post('/FotodePerfilDoContribuinte/{id}' , [ImagemDoAutor::class , 'ImagemDoAutor'])->middleware('Acessos:contribuinte,administrador');
Route::get('/DenunciasVerificadasDoUsuario/{id}/{id_do_autor}/{id_da_postagem}' , [DenunciasVerifyForUser::class , 'DenunciasDoUsuario'])->middleware('Acessos:usuario');
Route::post('/FazerDenunciaDeUmaPostagem/{id}/{id_do_contribuinte}/{id_da_postagem}' , [DenunciarPostagem::class , 'FazerDenuncia'])->middleware('Acessos:usuario');
Route::post('/RemoverDenuncia/{id}/{id_do_autor}/{id_da_postagem}' , [RemoverDenuncia::class , 'Remover'])->middleware('Acessos:usuario');
Route::get('/Administrador' , [Administrador::class , 'Administrador'])->middleware('Acessos:administrador');
Route::post('/RedesSociais/{id}',[redes_sociais::class , 'redes'])->middleware('Acessos:administrador');
Route::post('/DelecaoDoUsuario/{id}', [DelecaoDoUsuario::class , 'DelecaoDoUsuario'])->middleware('Acessos:administrador');
Route::post('/SuspensaoDoUsuario/{id}' , [SuspensaoDoUsuario::class , 'SuspensaoDoUsuario'])->middleware('Acessos:administrador');
Route::post('/BloquearOUsuario/{id}' ,[BloquearUsuario::class , 'BloquearUsuario'])->middleware('Acessos:administrador');
Route::post('/AlterarNivelDeAcessos/{id}' , [NivelDeAcessosAlterado::class , 'NivelDeAcessosAlterado'])->middleware('Acessos:administrador');
Route::post('/DeletarContribuinte/{id}' , [AcaoDoContribuinte::class , 'deletar_contribuinte'])->middleware('Acessos:administrador');
Route::post('/DelecaoDaPostagem/', [GerenciamentoDePostagensForAdministradorBookNest::class , 'GerenciamentoDePostagensForAdministradorBookNest'])->middleware('Acessos:administrador');
Route::post('/GerenciamentoDeAdministrador/' , [SolicitacoesEcontrolersDoSistemaDoBookNestDoAdministrador::class , 'SolicitacoesEcontrolersDoSistemaDoBookNestDoAdministrador'])->middleware('Acessos:administrador');
Route::get('/NotificacoesContribuinte/{id}', [NotificacaoContribuinte::class , 'notificacao'])->middleware('Acessos:contribuinte');
Route::get('/Pesquisar', [PageSearch::class ,'redirect'])->name('pesquisar')->middleware('Acessos:usuario,administrador');
Route::get('/Search/{livro}' , [search::class ,'pesquisar'])->middleware('Acessos:usuario,administrador');
Route::get('/verPostagemUsuario/{id}' ,[verPostagemCompleta::class ,'verPostagemCompleta'])->middleware('Acessos:usuario,administrador');