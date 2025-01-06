<?php

namespace App\Http\Controllers;
use illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\usuarios_com_niveis_de_acessos_alterados;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Http\Request;

class NivelDeAcessosAlterado extends Controller
{
    public function NivelDeAcessosAlterado($id, Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa fazer Login']);
        }

        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);
        }

        $Validate->validate(['nivel'=>'required|string|in:Alterar_o_Nivel_de_Acessos_para_Administrador,Alterar_o_Nivel_de_Acessos_para_Usuário,Alterar_o_Nivel_de_Acessos_para_Autor'],['nivel.required'=>'o nivel não pode ser nulo','nivel.string'=>'nivel não reconhecido','nivel.in' => 'nivel não reconhecido']);

        $niveis_de_acessos = [
            'Alterar_o_Nivel_de_Acessos_para_Administrador' => 'administrador',
            'Alterar_o_Nivel_de_Acessos_para_Usuário' => 'usuario',
            'Alterar_o_Nivel_de_Acessos_para_Autor' => 'contribuinte'
        ];

        $usuarios = usuarios::where('id',$id)->first();

        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'usuario não foi encontrado !!!']);
        }
        if($usuarios->nivel_acessos === $niveis_de_acessos[$Validate['nivel']])
        {
            return response()->json(['status' => 'error' , 'message' => 'O usuario '.$usuarios->nome.' , já tem o nível de acessos '.$niveis_de_acessos[$Validate['nivel']].'']);
        }
        $nivel_de_acessos_antigo_do_usuario = $usuarios->nivel_acessos;
        $usuarios->nivel_acessos = $niveis_de_acessos[$Validate['nivel']];
        if($usuarios->save())
        {
            $usuario_com_nivel_de_acessos_alterado = usuarios_com_niveis_de_acessos_alterados::where('id_do_cadastrado',$id)->first();
            if($usuario_com_nivel_de_acessos_alterado)
            {
                $usuario_com_nivel_de_acessos_alterado->id_do_cadastrado = $id;
                $usuario_com_nivel_de_acessos_alterado->data_da_alteracao = date('d/m/Y');
                $usuario_com_nivel_de_acessos_alterado->hora_da_alteracao = date('H:i:s');
                $usuario_com_nivel_de_acessos_alterado->nome_do_cadastrado = $usuarios->nome;
                $usuario_com_nivel_de_acessos_alterado->nivel_de_acessos_antigo = $nivel_de_acessos_antigo_do_usuario;
                $usuario_com_nivel_de_acessos_alterado->nivel_de_acessos_atual = $usuarios->nivel_acessos;
                if($usuario_com_nivel_de_acessos_alterado->save())
                {
                    $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                    $controle_do_usuario->mensagem = "O Administrador de nome: ".Auth::user()->nome." , alterou o nivel de acesso do usuario de nome: ".$usuarios->nome." , de ".$nivel_de_acessos_antigo_do_usuario." , para ".$usuarios->nivel_acessos." na data de ".date('d/m/Y')." , do horario de ".date('H:i:s')."";
                    if($controle_do_usuario->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'usuario teve seu nivel de acesso alterado de '.$nivel_de_acessos_antigo_do_usuario.' , '.$usuarios->nivel_acessos.'.']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'o usuario não teve o seu nivel de acessos alterado (controle)']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o usuario não teve o nivel de acesso alterado (nivel de acessos)']);
                }
            }
            else
            {
                $usuario_com_nivel_de_acessos_alterado = new usuarios_com_niveis_de_acessos_alterados();
                $usuario_com_nivel_de_acessos_alterado->id_do_cadastrado = $id;
                $usuario_com_nivel_de_acessos_alterado->data_da_alteracao = date('d/m/Y');
                $usuario_com_nivel_de_acessos_alterado->hora_da_alteracao = date('H:i:s');
                $usuario_com_nivel_de_acessos_alterado->nome_do_cadastrado = $usuarios->nome;
                $usuario_com_nivel_de_acessos_alterado->nivel_de_acessos_antigo = $nivel_de_acessos_antigo_do_usuario;
                $usuario_com_nivel_de_acessos_alterado->nivel_de_acessos_atual = $usuarios->nivel_acessos;
                if($usuario_com_nivel_de_acessos_alterado->save())
                {
                    $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                    $controle_do_usuario->mensagem = "O Administrador de nome: ".Auth::user()->nome." , alterou o nivel de acesso do usuario de nome: ".$usuarios->nome." , de ".$nivel_de_acessos_antigo_do_usuario." , para ".$usuarios->nivel_acessos." na data de ".date('d/m/Y')." , do horario de ".date('H:i:s')."";
                    if($controle_do_usuario->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'usuario teve seu nivel de acesso alterado de '.$nivel_de_acessos_antigo_do_usuario.' , '.$usuarios->nivel_acessos.'.']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'o usuario não teve o seu nivel de acessos alterado (controle)']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o usuario não teve o nivel de acesso alterado (nivel de acessos)']);
                }
            }
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'usuario não teve seu nivel de acesso alterado']);
        }
    }
}
