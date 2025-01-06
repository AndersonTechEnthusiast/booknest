<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\redesRedes;
use Illuminate\Support\Facades\Auth;

class redes_sociais extends Controller
{
    public function redes($id, Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'precisa estar logado']);
        }
        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'error inesperado !!']);
        }

        $Validate->validate(
            [
                'rede'=>'string|required|in:Facebook,Twitter,Instagram,LinkedIn,YouTube,Pinterest,SnapChat,TikTok',
                'link'=>'required|url'
            ] ,
            [
                'rede.string'=>'o link está em formato invalido',
                'rede.required'=>'a rede não pode ser vazio',
                'rede.in'=>'a rede não foi identificada !!!',
                'link.required'=>'o link é necessario',
                'link.url'=>'o link é invalido'
            ]
        );

        if($Validate['rede'] === 'Facebook'){
            $redes_sociais = redesRedes::where('Facebook',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->Facebook = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do Facebook , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->Facebook = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'Twitter'){
            $redes_sociais = redesRedes::where('Twitter',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->Twitter = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do Twitter , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->Twitter = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'Instagram'){
            $redes_sociais = redesRedes::where('Instagram',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->Instagram = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do Instagram , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->Instagram = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'LinkedIn'){
            $redes_sociais = redesRedes::where('LinkedIn',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->LinkedIn = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do LinkedIn , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->LinkedIn = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'YouTube'){
            $redes_sociais = redesRedes::where('YouTube',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->YouTube = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do YouTube , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->YouTube = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'Pinterest'){
            $redes_sociais = redesRedes::where('Pinterest',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->Pinterest = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do Pinterest , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->Pinterest = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'SnapChat'){
            $redes_sociais = redesRedes::where('SnapChat',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->SnapChat = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do SnapChat , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->SnapChat = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] === 'TikTok'){
            $redes_sociais = redesRedes::where('TikTok',$Validate['link'])->first();
            if(!$redes_sociais)
            {
                $redes_sociais = new redesRedes();
                $redes_sociais->TikTok = $Validate['link'];
                if($redes_sociais->save())
                {
                    return response()->json(['status'=>'success','message'=>'link do TikTok , inserido com sucesso no banco de dados']);
                }
                else
                {
                    return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
                }
            }
            $redes_sociais = new redesRedes();
            $redes_sociais->TikTok = $Validate['link'];
            if($redes_sociais->save())
            {
                return response()->json(['status'=>'success','message'=>'link adicionado com sucesso ao banco de dados']);
            }
            else
            {
                return response()->json(['status'=>'error','message'=>'error ao tentar adicionar o link no banco de dados']);
            }
        }
        if($Validate['rede'] !== 'Facebook' && $Validate['rede'] !== 'Twitter' && $Validate['rede'] !== 'Instagram' && $Validate['rede'] !== 'LinkedIn' && $Validate['rede'] !== 'YouTube' && $Validate['rede'] !== 'Pinterest' && $Validate['rede'] !== 'SnapChat' && $Validate['rede'] !== 'TikTok')
        {
            return response()->json(['status' => 'error' , 'message' => 'nenhuma das redes corresponde a redes sociais permitidas no BookNest']);
        }
    }
}
