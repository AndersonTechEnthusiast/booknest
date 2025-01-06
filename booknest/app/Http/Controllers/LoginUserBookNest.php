<?php

namespace App\Http\Controllers;

use App\Models\usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios_deletados;
use App\Models\usuarios_suspensos;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
class LoginUserBookNest extends Controller
{
    public function LoginUser(Request $Dados)
    {
        // cria uma nova variavel $ValidandoDados
        // seta ela ao encapsulamento do Request ($Dados)
        // adiciona o validate
        $ValidandoDados = $Dados->validate(
            ['email-login' => 'required|email|min:10|max:255','password-login' => 'required|min:8|max:16'],
            ['email-login.required' => 'O Email é indispensavel para o Login','email-login.email' => 'O E-mail deve ser valido para o Login', 'email-login.min' => 'O E-mail deve ter no minimo 10 caracteres', 'email-login.max' =>  'O E-mail excedeu o limite de 255 de caracteres', 'password-login.required' => 'sua senha é indispensavel para o Login' ,  'password-login.min' => 'A senha não atingiu a capacidade minima' ,  'password.max' => 'A senha excedeu o limite de 16 caracteres']
        );
        $aviso_de_delecao = usuarios_deletados::where('email',$ValidandoDados['email-login'])->first();
        $aviso_de_suspensao = usuarios_suspensos::where('email_do_cadastrado',$ValidandoDados['email-login'])->first();
        if(!$aviso_de_delecao && !$aviso_de_suspensao)
        {
            // criando uma variavel que aloque a tabela usuarios
            $usuarios = usuarios::where('email',$ValidandoDados['email-login'])->first();
            if($usuarios)
            {
                if(Hash::check($ValidandoDados['password-login'],$usuarios->senha))
                {
                    if($usuarios->nivel_acessos == "usuario")
                    {
                        Auth::login($usuarios);
                        return redirect('UsuarioController');
                    }
                    else
                    if($usuarios->nivel_acessos == "administrador")
                    {
                        Auth::login($usuarios);
                        // redirecionando o Administrador para um controller e no controller (AdminLogin) setar todos os dados encapsulados dos banco de dados na view
                        return redirect('AdminLogin');
                    }
                    else
                    if($usuarios->nivel_acessos == "contribuinte")
                    {
                        Auth::login($usuarios);
                        return redirect('ContribuintControllerBookNest');
                    }
                }
                else
                {
                    return redirect('/')->with('Login-feedback-failed','senha incorreta !!!');
                }
            }
            else
            if(!$usuarios)
            {
                return redirect('/')->with('Login-feedback','Usuario Não Encontrado')->with('Return','Realize o Cadastro');
            }
        }
        if($aviso_de_delecao)
        {
            if(Hash::check($ValidandoDados['password-login'] , $aviso_de_delecao->senha))
            {
                return redirect('/')->with('Login-feedback-failed',$aviso_de_delecao->mensagem_final);
            }
            else
            {
                // criando uma variavel que aloque a tabela usuarios
                $usuarios = usuarios::where('email',$ValidandoDados['email-login'])->first();
                if($usuarios)
                {
                    if(Hash::check($ValidandoDados['password-login'],$usuarios->senha))
                    {
                        if($usuarios->nivel_acessos == "usuario")
                        {
                            Auth::login($usuarios);
                            return redirect('UsuarioController');
                        }
                        else
                        if($usuarios->nivel_acessos == "administrador")
                        {
                            Auth::login($usuarios);
                            // redirecionando o Administrador para um controller e no controller (AdminLogin) setar todos os dados encapsulados dos banco de dados na view
                            return redirect('AdminLogin');
                        }
                        else
                        if($usuarios->nivel_acessos == "contribuinte")
                        {
                            Auth::login($usuarios);
                            return redirect('ContribuintControllerBookNest');
                        }
                    }
                    else
                    {
                        return redirect('/')->with('Login-feedback-failed','senha incorreta !!!');
                    }
                }
                else
                if(!$usuarios)
                {
                    return redirect('/')->with('Login-feedback','Usuario Não Encontrado')->with('Return','Realize o Cadastro');
                }
            }
        }
        if($aviso_de_suspensao)
        {
            if(Hash::check($ValidandoDados['password-login'],$aviso_de_suspensao->senha_do_cadastrado))
            {
                $suspensao_date = Carbon::parse($aviso_de_suspensao->suspenso_ate);
                if(Carbon::now()->greaterThanOrEqualTo($suspensao_date))
                {
                    // o tempo expirou usuario liberado
                    $aviso_de_suspensao->delete();
                    // criando uma variavel que aloque a tabela usuarios
                    $usuarios = usuarios::where('email',$ValidandoDados['email-login'])->first();
                    if($usuarios)
                    {
                        if(Hash::check($ValidandoDados['password-login'],$usuarios->senha))
                        {
                            if($usuarios->nivel_acessos == "usuario")
                            {
                                Auth::login($usuarios);
                                return redirect('UsuarioController');
                            }
                            else
                            if($usuarios->nivel_acessos == "administrador")
                            {
                                Auth::login($usuarios);
                                // redirecionando o Administrador para um controller e no controller (AdminLogin) setar todos os dados encapsulados dos banco de dados na view
                                return redirect('AdminLogin');
                            }
                            else
                            if($usuarios->nivel_acessos == "contribuinte")
                            {
                                Auth::login($usuarios);
                                return redirect('ContribuintControllerBookNest');
                            }
                        }
                        else
                        {
                            return redirect('/')->with('Login-feedback-failed','senha incorreta !!!');
                        }
                    }
                    else
                    if(!$usuarios)
                    {
                        return redirect('/')->with('Login-feedback','Usuario Não Encontrado')->with('Return','Realize o Cadastro');
                    }
                }
                else
                {
                    return redirect('/')->with('Login-feedback-failed',$aviso_de_suspensao->Mensagem_ao_usuario);
                }
            }
            else
            {
                // criando uma variavel que aloque a tabela usuarios
                $usuarios = usuarios::where('email',$ValidandoDados['email-login'])->first();
                if($usuarios)
                {
                    if(Hash::check($ValidandoDados['password-login'],$usuarios->senha))
                    {
                        if($usuarios->nivel_acessos == "usuario")
                        {
                            Auth::login($usuarios);
                            return redirect('UsuarioController');
                        }
                        else
                        if($usuarios->nivel_acessos == "administrador")
                        {
                            Auth::login($usuarios);
                            // redirecionando o Administrador para um controller e no controller (AdminLogin) setar todos os dados encapsulados dos banco de dados na view
                            return redirect('AdminLogin');
                        }
                        else
                        if($usuarios->nivel_acessos == "contribuinte")
                        {
                            Auth::login($usuarios);
                            return redirect('ContribuintControllerBookNest');
                        }
                    }
                    else
                    {
                        return redirect('/')->with('Login-feedback-failed','senha incorreta !!!');
                    }
                }
                else
                if(!$usuarios)
                {
                    return redirect('/')->with('Login-feedback','Usuario Não Encontrado')->with('Return','Realize o Cadastro');
                }
            }
        }
    }
}