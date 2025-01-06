@if(Auth::user()->nivel_acessos === 'usuario')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BookNest - {{ Auth::user()->nome }}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&family=Timmana&display=swap');
        body{
            background:#333;
            color:white;
            font-family:'Montserrat',sans-serif;
            width:100%;
            overflow-x: hidden;
        }
    </style>
    <style> 
        .scroll_reveal{
            visibility: hidden;
        }
    </style>
    <script src="https://unpkg.com/scrollreveal"></script>
</head>
<body>
    {{-- definindo contador e array --}}
    @php $contador = 0; $dados = [];@endphp
    @php $Alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; @endphp
    {{-- percorrendo array do usuario logado em chave => valor --}}
    @foreach (Auth::user()->toArray() as $key => $value)
        {{-- contabiliza o loop e adiciona chave => valor na array --}}
        @php $contador++; $dados[str_replace("==",$Alfabeto[rand(0,25)],base64_encode(implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($key)))))] = str_replace("==",$Alfabeto[rand(0,25)],base64_encode(implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($value))))); @endphp
        {{-- se o contador atingir 9 , pare o loop --}}
        @if($contador === 10) @break @endif
    @endforeach

</body>
<script src="{{ asset('js/usuario-logado/Full-Profile/Profile.js?v=1.1') }}" defer></script>
<script src="{{ asset('js/usuario-logado/Full-Profile/ScrollReveal.js?v=1.1') }}" defer></script>
</html>
@php
    $string_id = base64_encode(chr((int)Auth::user()->id));
    $string_pathname = base64_encode(Auth::user()->pathname);
@endphp
@if($Curtidas)
    @php $curtidas_encode_K = []; @endphp
    @php $curtidas_encode_V = []; @endphp
    @php $curtidas_encode_chars_K = []; @endphp
    @php $curtidas_encode_chars_V = []; @endphp
    @php $curtidas_encode_base64_K = []; @endphp
    @php $curtidas_encode_base64_V = []; @endphp
    @foreach ($Curtidas as $curtida)
        @foreach ($curtida->toArray() as $key => $value)
            @php
                $curtidas_encode_K[] = $key;
                $curtidas_encode_V[] =  $value;
            @endphp
        @endforeach
    @endforeach
    @foreach (mb_str_split(implode('+-', $curtidas_encode_K)) as $encode_K)
        @php $curtidas_encode_chars_K[] = base64_encode(mb_ord($encode_K)); @endphp
    @endforeach
    @foreach (mb_str_split(implode('+-', $curtidas_encode_V)) as $encode_V)
        @php $curtidas_encode_chars_V[] = base64_encode(mb_ord($encode_V)); @endphp
    @endforeach
    @php
        $json_keys_encode = base64_encode(implode('+-',$curtidas_encode_chars_K));
        $json_values_encode = base64_encode(implode('+-',$curtidas_encode_chars_V));
    @endphp
@endif
@if($Livros_Salvos)
    @php
        $livros_encode_K = [];
        $livros_encode_V = [];
        $livros_encode_chars_K = [];
        $livros_encode_chars_V = [];
    @endphp
    <!-- Aloca os valores e as chaves dentro das arrays criadas -->
    @foreach ($Livros_Salvos as $livro_salvo)
        @foreach ($livro_salvo->toArray() as $key => $value)
            @php $livros_encode_K[] = $key; @endphp
            @php $livros_encode_V[] = $value; @endphp
        @endforeach
    @endforeach
    <!-- transforma em string com um separador e depois transforma em array de novo -->
    @foreach (mb_str_split(implode('+-',$livros_encode_K)) as $encode_K)
        @php
            $livros_encode_chars_K[] = base64_encode(mb_ord($encode_K));
        @endphp
    @endforeach
    <!-- transforma em string com um separador e depois transforma em array de novo -->
    @foreach (mb_str_split(implode('+-',$livros_encode_V)) as $encode_V)
        @php
            $livros_encode_chars_V[] = base64_encode(mb_ord($encode_V));
        @endphp
    @endforeach
    @php
        $string_livros_k = mb_str_split(implode('+-',$livros_encode_chars_K));
        $string_livros_v = mb_str_split(implode('+-',$livros_encode_chars_V));
        $array_dados_livros_k = [];
        $array_dados_livros_v = [];
        $Alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    @endphp
    @foreach ($string_livros_k as $k)
        @php
            $array_dados_livros_k[] = str_replace('=',$Alfabeto[rand(0,25)],base64_encode(mb_ord($k)))
        @endphp
    @endforeach
    @foreach ($string_livros_v as $v)
        @php
            $array_dados_livros_v[] = str_replace('=',$Alfabeto[rand(0,25)],base64_encode(mb_ord($v)));
        @endphp
    @endforeach
    @php
        $string_livros_keys_json = base64_encode(implode('+-',$array_dados_livros_k));
        $string_livros_values_json = base64_encode(implode('+-',$array_dados_livros_v));
    @endphp
@endif
@if ($Complemento)
    @php
        $profile_em_k = [];
        $profile_em_v = [];
        $contador_profile = 0;
    @endphp
    @foreach ($Complemento as $key => $value)
        @php $profile_em_k[] = $key; @endphp
        @php $profile_em_v[] = $value; @endphp
        @php $contador_profile++; @endphp
        @if((int)$contador_profile === (int)count($Complemento))
            @php $contador_profile_k = 0; @endphp
            @php $contador_profile_v = 0; @endphp
            @php $temporaria_profile_k = []; @endphp
            @php $temporaria_profile_v = []; @endphp
            @foreach (mb_str_split(implode('+-',$profile_em_k)) as $k)
                @php $temporaria_profile_k[] = base64_encode(mb_ord($k)); @endphp
                @php $contador_profile_k++; @endphp
                @if((int)$contador_profile_k === (int)count((mb_str_split(implode('+-',$profile_em_k)))))
                    @php $profile_em_k = []; @endphp
                    @php $profile_em_k[] = $temporaria_profile_k; @endphp
                @endif
            @endforeach
            @foreach (mb_str_split(implode('+-',$profile_em_v)) as $v)
                @php $temporaria_profile_v[] = base64_encode(mb_ord($v)); @endphp
                @php $contador_profile_v++; @endphp
                @if((int)$contador_profile_v === (int)count(mb_str_split(implode('+-',$profile_em_v))))
                    @php $profile_em_v = []; @endphp
                    @php $profile_em_v[] = $temporaria_profile_v; @endphp
                @endif
            @endforeach
        @endif
    @endforeach
    @php
        $string_profile_k_json = "";
        $string_profile_v_json = "";
    @endphp
    @foreach ($profile_em_k as $json_profile_k)
        @php $string_profile_k_json = base64_encode(implode('+-',$json_profile_k)); @endphp
    @endforeach
    @foreach ($profile_em_v as $json_profile_v)
        @php
            $string_profile_v_json = base64_encode(implode('+-',$json_profile_v));
        @endphp
    @endforeach
@endif
@if($Livros_Comentados)
    @php
    $chars_livros_1 = "";
    $chars_livros_2 = "";
    @endphp
    @foreach ($Livros_Comentados as $Column)
        @foreach ($Column->toArray() as $keys => $value)
            @php
                $chars_livros_1 = $chars_livros_1.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($keys)))."§";
                $chars_livros_2 = $chars_livros_2.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($value)))."§";
            @endphp
        @endforeach
    @endforeach
    @php $chars_livros_1 = rtrim($chars_livros_1,"§"); $chars_livros_2 = rtrim($chars_livros_2,"§"); @endphp
    @php $chars_livros_1 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_livros_1)); $chars_livros_2 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_livros_2)); @endphp
@endif
<script>
    window.user = [
        @json($string_id),                                // [0]
        @json(base64_encode(csrf_token())),               // [1] 
        @json($errors),                                   // [2]
        @json($string_pathname),                          // [3]
        @json($dados),                                    // [4]
        @json(base64_encode(csrf_token())),               // [5]
        @json($json_keys_encode),                         // [6]
        @json($json_values_encode),                       // [7]   
        @json($string_livros_keys_json),                  // [8]
        @json($string_livros_values_json),                // [9]
        @json($string_profile_k_json),                    // [10]
        @json($string_profile_v_json),                    // [11]
        @json($chars_livros_1),                           // [12]
        @json($chars_livros_2),                           // [13]
        @json(base64_encode(csrf_token())),               // [14]  
        @json(base64_encode(csrf_token())),               // [15]
        @json(base64_encode(csrf_token())),               // [16] 
        @json(base64_encode(csrf_token())),               // [17]
    ]
</script>
@endif