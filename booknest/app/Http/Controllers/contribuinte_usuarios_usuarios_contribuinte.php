<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\contribuinte_usuarios;
use App\Models\usuarios;
class contribuinte_usuarios_usuarios_contribuinte extends Controller
{
    public function contribuinte_para_usuarios_usuarios_para_contribuintes($id)
    {   
        if(!Auth::check())
        { 
            echo 'você precisa fazer Login';
        }
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'contribuinte')
        {
            echo 'você não é um contribuinte e nem usuario';
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            echo 'error inesperado !!!';
        }

        $contribuinte_usuario = contribuinte_usuarios::where('id_do_contribuinte',$id)->first();
        if(!$contribuinte_usuario)
        {
            echo "Você Não é contribuinte";
        }
        if(Auth::user()->nivel_acessos === 'contribuinte')
        {
            if($contribuinte_usuario->nivel_de_acessos === 'usuario')
            {
                $contribuinte_usuario->nivel_de_acessos = 'contribuinte';
                if($contribuinte_usuario->save())
                {
                    $usuarios = usuarios::where('id',$id)->first();
                    if(!$usuarios)
                    {
                        echo "usuario não encontrado !!!";
                    }
                    $usuarios->nivel_acessos = 'contribuinte';
                    if($usuarios->save())
                    {
                        return redirect('ContribuintControllerBookNest');
                    }
                    else
                    {
                        echo "error ao tentar fazer a troca de dominio";
                    }
                }
                else
                {
                    echo "erro ao tentar transforma um contribuinte em usuario";
                }
            }
            else
            if($contribuinte_usuario->nivel_de_acessos === 'contribuinte')
            {
                $contribuinte_usuario->nivel_de_acessos = 'usuario';
                if($contribuinte_usuario->save())
                {
                    $usuarios = usuarios::where('id',$id)->first();
                    if(!$usuarios){echo "error usuario não encontrado !!!";}
                    $usuarios->nivel_acessos = 'usuario';
                    if($usuarios->save())
                    {
                        return redirect('UsuarioController');
                    }
                    else
                    {
                        echo "error ao tentar trocar o nivel de acessos";
                    }
                }
                else
                {
                    echo "erro ao tentar transforma um usuario em contribuinte";
                }
            }
            
        }
        else
        if(Auth::user()->nivel_acessos === 'usuario')
        {
            if($contribuinte_usuario->nivel_de_acessos === 'usuario')
            {
                $contribuinte_usuario->nivel_de_acessos = 'contribuinte';
                if($contribuinte_usuario->save())
                {
                    $usuarios = usuarios::where('id',$id)->first();
                    if(!$usuarios){echo "usuario não encontrado !!!";}
                    $usuarios->nivel_acessos = 'contribuinte';
                    if($usuarios->save())
                    {
                        return redirect('ContribuintControllerBookNest');
                    }
                    else
                    {
                        echo "error ao tentar trocar o nivel de acessos";
                    }
                }
                else
                {
                    echo "erro ao tentar transforma um usuario em contribuinte";
                }
            }
            else
            if($contribuinte_usuario->nivel_de_acessos === 'contribuinte')
            {
                $contribuinte_usuario->nivel_de_acessos = 'usuario';
                if($contribuinte_usuario->save())
                {
                    $usuarios = usuarios::where('id',$id)->first();
                    if(!$usuarios){echo "usuario não encontrado!!";}
                    
                    $usuarios->nivel_acessos = 'usuario';

                    if($usuarios->save())
                    {
                        return redirect('UsuarioController');
                    }
                    else
                    {
                        echo "error ao tentar trocar seu nivel de acessos";
                    }
                }
                else
                {
                    echo "erro ao tentar transforma um contribuinte em usuario";
                }
            }
        }
        else
        {
            echo "Você é um Administrador ? , se sim volte não precisa de niveis de acessos";
        }
    }
}
