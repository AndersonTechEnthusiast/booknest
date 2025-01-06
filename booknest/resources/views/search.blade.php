@if(Auth::user()->nivel_acessos === 'usuario' || Auth::user()->nivel_acessos === 'administrador')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pesquisar Livros</title>
    <link rel="stylesheet" href="{{ asset('css/search.css') }}">
    <script src="https://kit.fontawesome.com/7bcc76ecaf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="search-booknest">
        <form action="#" id="search-book">
            <img src="{{ asset('img/welcome/Logo.png') }}">
            <div class="input-search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" id="search" placeholder="insira o titulo do Livro que Deseja">
            </div>
            <div>
                <button id="submit" type="submit"> 
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
    </div>
    <div class="result">
        <div class="non-items">
            PESQUISE ALGO
        </div>
    </div>
</body>
<script src="{{ asset('js/search.js?v=1.1') }}"></script>
</html>
@else
@endif