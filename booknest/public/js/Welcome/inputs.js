// criando um objeto Login
let validação_login = {
    email_login: false,
    senha_login: false
};
// Email Login 
document.getElementById("check-email-login").style.display = "none";
document.querySelector(".email-login").addEventListener("input",function(){
    var Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // se o usuario apagar tudo
    if(this.value === '')
    {
        this.closest(".inputs").style.border = "2px solid #121212";
        this.closest(".inputs").querySelector("i").style.color = "#121212";
        var mensagem_de_error =this.closest(".inputs").querySelector(".mensagem-error-email-login");
        if(mensagem_de_error){this.closest(".inputs").removeChild(mensagem_de_error);}
        document.getElementById("check-email-login").style.display = "none";
        validação_login.email_login = false;
    }
    else
    if(Regex.test(this.value))
    {
        this.closest(".inputs").style.border = "2px solid #009688";
        this.closest(".inputs").querySelector("i").style.color = "#009688";
        this.style.color = "#009688";
        this.style.fontWeight = "700";
        document.getElementById("check-email-login").style.fontSize = "25px";
        document.getElementById("check-email-login").style.position = "absolute";
        document.getElementById("check-email-login").style.top = "6px";
        document.getElementById("check-email-login").style.left = "90%";
        document.getElementById("check-email-login").style.color = "#009688";
        document.getElementById("check-email-login").style.display = "block";
        // busca a mensagem de erro pela classe (ela não foi criada nesse condição (if e else))
        var mensagem_de_error =this.closest(".inputs").querySelector(".mensagem-error-email-login");
        // se existir, retire
        if(mensagem_de_error){this.closest(".inputs").removeChild(mensagem_de_error);}
        validação_login.email_login = true;
    }
    else
    {
        // previnindo a criação de inumeras mensagens de erros
        // a cada digito ele acrescentaria uma mensagem encima da outra
        if(!this.closest(".inputs").querySelector(".mensagem-error-email-login"))
        {
            var Commenter_mensagem = document.createElement("div");
            Commenter_mensagem.classList.add("mensagem-error-email-login");
            Commenter_mensagem.textContent = "Insira um E-mail Válido";
            Commenter_mensagem.style.width = "100%";
            Commenter_mensagem.style.textAlign = "center";
            Commenter_mensagem.style.fontFamily = "Montserrat";
            Commenter_mensagem.style.color = "red";
            Commenter_mensagem.style.position = "absolute";
            Commenter_mensagem.style.top = "50px";
            Commenter_mensagem.style.left = "0";
            var documento = this.closest(".inputs");
            documento.appendChild(Commenter_mensagem);
        }
        else
        {
            return null;
        }
        this.style.color = "black";
        this.style.fontWeight = "normal";
        this.closest(".inputs").style.border = "2px solid red";
        this.closest(".inputs").querySelector("i").style.color = "red";
        this.style.color = "red";
        document.getElementById("check-email-login").style.display = "none";
        validação_login.email_login = false;
    }
});
// Senha Login
document.getElementById("check-password-login").style.display = "none";
document.querySelector(".password-login").addEventListener("input",function(){
    var strings = /[a-zA-z]/g;
    var ints = /[0-9]/g;
    if(this.value === '')
    {
        this.closest(".inputs").style.border = "2px solid #121212";
        this.closest(".inputs").style.color = "black";
        this.closest(".inputs").querySelector("i").style.color = "black";
        var mensagem_1 = this.closest(".inputs").querySelector(".mensagem-error-password-login-1");
        var mensagem_2 = this.closest(".inputs").querySelector(".mensagem-error-password-login-2");
        var mensagem_3 = this.closest(".inputs").querySelector(".mensagem-error-password-login-3");
        this.closest(".inputs").querySelector(".i-login-open").style.color = "black";
        this.closest(".inputs").querySelector(".i-login-close").style.color = "black";
        this.closest(".inputs").querySelector(".i-login-open").style.color = "black";
        this.closest(".inputs").querySelector(".i-login-close").style.color = "black";
        if(mensagem_1){this.closest(".inputs").removeChild(mensagem_1);}
        if(mensagem_2){this.closest(".inputs").removeChild(mensagem_2);}
        if(mensagem_3){this.closest(".inputs").removeChild(mensagem_3);}
        validação_login.senha_login = false;
    }
    else
    if(strings.test(this.value) || ints.test(this.value))
    {
        // this.closest(".inputs").style.border = "2px solid #009688";
        if(this.value.length === 16)
        {
            if(!this.closest(".inputs").querySelector(".mensagem-error-password-login-3"))
            {
                var documento_3 = document.createElement("div");
                documento_3.classList.add("mensagem-error-password-login-3");
                this.closest(".inputs").appendChild(documento_3);
                documento_3.style.width = "100%";
                documento_3.style.position = "absolute";
                documento_3.style.top = "60px";
                documento_3.style.left = "0";
                documento_3.style.textAlign = "center";
                documento_3.style.color = "#009688";
                documento_3.style.fontWeight = "700";
                documento_3.textContent = "O máximo de caracteres é de 16 caracteres";
                document.getElementById("check-password-login").style.fontSize = "25px";
                document.getElementById("check-password-login").style.position = "absolute";
                document.getElementById("check-password-login").style.top = "6px";
                document.getElementById("check-password-login").style.left = "90%";
                document.getElementById("check-password-login").style.color = "#009688";
                document.getElementById("check-password-login").style.display = "block";
                this.closest(".inputs").querySelector(".i-login-open").style.left = "80%";
                this.closest(".inputs").querySelector(".i-login-close").style.left = "80%";
                this.closest(".inputs").querySelector(".i-login-open").style.color = "#009688";
                this.closest(".inputs").querySelector(".i-login-close").style.color = "#009688";
                this.closest(".inputs").style.border = "2px solid #009688";
                this.style.color = "#009688";
                this.style.fontWeight = "700";
                this.closest(".inputs").querySelector("i").style.color = "#009688";
            }
            var existe_mensagem_de_error_min_8 = this.closest(".inputs").querySelector(".mensagem-error-password-login-1");
            if(existe_mensagem_de_error_min_8){this.closest(".inputs").removeChild(existe_mensagem_de_error_min_8);}
            validação_login.senha_login = true;
        }
        else
        if(this.value.length === 8)
        {
            var verificacao_de_existencia_de_mensagem_min_8 = this.closest(".inputs").querySelector(".mensagem-error-password-login-1");
            if(verificacao_de_existencia_de_mensagem_min_8){this.closest(".inputs").removeChild(verificacao_de_existencia_de_mensagem_min_8);}
            document.getElementById("check-password-login").style.fontSize = "25px";
            document.getElementById("check-password-login").style.position = "absolute";
            document.getElementById("check-password-login").style.top = "6px";
            document.getElementById("check-password-login").style.left = "90%";
            document.getElementById("check-password-login").style.color = "#009688";
            document.getElementById("check-password-login").style.display = "block";
            this.closest(".inputs").querySelector(".i-login-open").style.left = "80%";
            this.closest(".inputs").querySelector(".i-login-close").style.left = "80%";
            this.closest(".inputs").querySelector(".i-login-open").style.color = "#009688";
            this.closest(".inputs").querySelector(".i-login-close").style.color = "#009688";
            this.closest(".inputs").style.border = "2px solid #009688";
            this.style.color = "#009688";
            this.style.fontWeight = "700";
            this.closest(".inputs").querySelector("i").style.color = "#009688";
            validação_login.senha_login = true;
        }
        var verificacao_de_existencia_de_mensagem_de_error_de_string_e_ints = this.closest(".inputs").querySelector(".mensagem-error-password-login-2");
        if(verificacao_de_existencia_de_mensagem_de_error_de_string_e_ints){this.closest(".inputs").removeChild(verificacao_de_existencia_de_mensagem_de_error_de_string_e_ints);}
    }
    else
    {
        if(!strings.test(this.value) || !ints.test(this.value))
        {
            if(!this.closest(".inputs").querySelector(".mensagem-error-password-login-2"))
            {
                var documento_2 = document.createElement("div");
                documento_2.classList.add("mensagem-error-password-login-2");
                this.closest(".inputs").appendChild(documento_2);
                documento_2.style.position = "absolute";
                documento_2.style.top = "40px";
                documento_2.style.left = "0";
                documento_2.style.width = "100%";
                documento_2.style.color = "red";
                documento_2.style.textAlign = "center";
                documento_2.textContent = "A senha deve conter letras e números";
            }
            document.getElementById("check-password-login").style.display = "none";
            this.closest(".inputs").querySelector(".i-login-open").style.left = "90%";
            this.closest(".inputs").querySelector(".i-login-close").style.left = "90%";
            this.closest(".inputs").querySelector(".i-login-open").style.color = "#009688";
            this.closest(".inputs").querySelector(".i-login-close").style.color = "#009688";
            this.closest(".inputs").style.border = "2px solid red";
            this.style.color = "red";
            this.style.fontWeight = "normal";
            this.closest(".inputs").querySelector("i").style.color = "red";
            validação_login.senha_login = false;
        }
        if(this.value.length < 8)
        {
            if(!this.closest(".inputs").querySelector(".mensagem-error-password-login-1"))
            {
                var documento_1 = document.createElement("div");
                documento_1.classList.add("mensagem-error-password-login-1");
                this.closest(".inputs").appendChild(documento_1);
                documento_1.style.position = "absolute";
                documento_1.style.top = "80px";
                documento_1.style.left = "0";
                documento_1.style.width = "100%";
                documento_1.style.textAlign = "center";
                documento_1.style.color = "red";
                documento_1.textContent = "A senha deve ter no mínimo 8 caracteres !!!";
            }
            var verificacao_de_mensagem_max_16 = this.closest(".inputs").querySelector(".mensagem-error-password-login-3");
            if(verificacao_de_mensagem_max_16){this.closest(".inputs").removeChild(verificacao_de_mensagem_max_16);}
            document.getElementById("check-password-login").style.display = "none";
            this.closest(".inputs").querySelector(".i-login-open").style.left = "90%";
            this.closest(".inputs").querySelector(".i-login-close").style.left = "90%";
            this.closest(".inputs").querySelector(".i-login-open").style.color = "red";
            this.closest(".inputs").querySelector(".i-login-close").style.color = "red";
            this.closest(".inputs").style.border = "2px solid red";
            this.style.color = "red";
            this.style.fontWeight = "normal";
            this.closest(".inputs").querySelector("i").style.color = "red";
            validação_login.senha_login = false;
        }
    } 
    this.value = this.value.slice(0,16);
});
// Submit Login
document.querySelector(".submit-value-login").addEventListener("click",function(event){
    if(validação.email_login === true && validação_login.senha_login === true)
    {
        return true;
    }
    else
    {
        event.preventDefault();
    }
});
// criando objeto Cadastrar
let validação_cadastrar = {
    nome: false,
    email: false,
    data: false,
    generos: false,
    senha: false
};
// Nome Cadastrar
document.getElementById("check-nome-cadastrar").style.display = "none";
document.querySelector(".nome-cadastrar").addEventListener("input",function(){
    // guarda os caracteres especiais
    var Regex_special_caracteres_01 = /[@]/g;   var Regex_special_caracteres_11 = /[!]/g;   var Regex_special_caracteres_21 = /[<]/g;    var Regex_special_caracteres_31 = /[³]/g; var Regex_special_caracteres_41 = /[ª]/g;
    var Regex_special_caracteres_02 = /[#]/g;   var Regex_special_caracteres_12 = /[_]/g;   var Regex_special_caracteres_22 = /[>]/g;    var Regex_special_caracteres_32 = /[£]/g;
    var Regex_special_caracteres_03 = /[$]/g;   var Regex_special_caracteres_13 = /[+]/g;   var Regex_special_caracteres_23 = /[,]/g;    var Regex_special_caracteres_33 = /[¢]/g;
    var Regex_special_caracteres_04 = /[%]/g;   var Regex_special_caracteres_14 = /[{]/g;   var Regex_special_caracteres_24 = /[.]/g;    var Regex_special_caracteres_34 = /[¬]/g;
    var Regex_special_caracteres_05 = /[¨]/g;   var Regex_special_caracteres_15 = /[}]/g;   var Regex_special_caracteres_25 = /[º]/g;    var Regex_special_caracteres_35 = /[[]/g;
    var Regex_special_caracteres_06 = /[&]/g;   var Regex_special_caracteres_16 = /[\^]/g;   var Regex_special_caracteres_26 = /[=]/g;    var Regex_special_caracteres_36 = /[]]/g;
    var Regex_special_caracteres_07 = /[*]/g;   var Regex_special_caracteres_17 = /[//]/g;  var Regex_special_caracteres_27 = /[´`]/g;   var Regex_special_caracteres_37 = /[?]/g;
    var Regex_special_caracteres_08 = /[(]/g;   var Regex_special_caracteres_18 = /[\\]/g;  var Regex_special_caracteres_28 = /[""]/g;   var Regex_special_caracteres_38 = /[°]/g;
    var Regex_special_caracteres_09 = /[)]/g;   var Regex_special_caracteres_19 = /[:]/g;   var Regex_special_caracteres_29 = /[¹]/g;    var Regex_special_caracteres_39 = /[0-9]/g;
    var Regex_special_caracteres_10 = /[-]/g;   var Regex_special_caracteres_20 = /[;]/g;   var Regex_special_caracteres_30 = /[²]/g;    var Regex_special_caracteres_40 = /[|]/g;
    var Regex_string_nome = /[a-zA-z]/g;
    if(this.value === '')
    {
        document.getElementById("check-nome-cadastrar").style.display = "none";
        this.closest(".inputs").style.border = "2px solid #121212";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        this.closest(".inputs").querySelector("i").style.color = "black";
        var verificação_de_mensagem_1_nome_cadastrar = this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-1");
        var verificação_de_mensagem_2_nome_cadastrar = this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-2");
        if(verificação_de_mensagem_2_nome_cadastrar){this.closest(".inputs").removeChild(verificação_de_mensagem_2_nome_cadastrar);}
        if(verificação_de_mensagem_1_nome_cadastrar){this.closest(".inputs").removeChild(verificação_de_mensagem_1_nome_cadastrar);}
        validação_cadastrar.nome = false;
    }
    else
    // se @ existir no input nome
    if
    (
        Regex_special_caracteres_01.test(this.value) ||
        Regex_special_caracteres_02.test(this.value) ||
        Regex_special_caracteres_03.test(this.value) ||
        Regex_special_caracteres_04.test(this.value) ||
        Regex_special_caracteres_05.test(this.value) ||
        Regex_special_caracteres_06.test(this.value) ||
        Regex_special_caracteres_07.test(this.value) ||
        Regex_special_caracteres_08.test(this.value) ||
        Regex_special_caracteres_09.test(this.value) ||
        Regex_special_caracteres_10.test(this.value) ||
        Regex_special_caracteres_11.test(this.value) ||
        Regex_special_caracteres_12.test(this.value) ||
        Regex_special_caracteres_13.test(this.value) ||
        Regex_special_caracteres_14.test(this.value) ||
        Regex_special_caracteres_15.test(this.value) ||
        Regex_special_caracteres_16.test(this.value) ||
        Regex_special_caracteres_17.test(this.value) ||
        Regex_special_caracteres_18.test(this.value) ||
        Regex_special_caracteres_19.test(this.value) ||
        Regex_special_caracteres_20.test(this.value) ||
        Regex_special_caracteres_21.test(this.value) ||
        Regex_special_caracteres_22.test(this.value) ||
        Regex_special_caracteres_23.test(this.value) ||
        Regex_special_caracteres_24.test(this.value) ||
        Regex_special_caracteres_25.test(this.value) ||
        Regex_special_caracteres_26.test(this.value) ||
        Regex_special_caracteres_27.test(this.value) ||
        Regex_special_caracteres_28.test(this.value) ||
        Regex_special_caracteres_29.test(this.value) ||
        Regex_special_caracteres_30.test(this.value) ||
        Regex_special_caracteres_31.test(this.value) ||
        Regex_special_caracteres_32.test(this.value) ||
        Regex_special_caracteres_33.test(this.value) ||
        Regex_special_caracteres_34.test(this.value) ||
        Regex_special_caracteres_35.test(this.value) ||
        Regex_special_caracteres_36.test(this.value) ||
        Regex_special_caracteres_37.test(this.value) ||
        Regex_special_caracteres_38.test(this.value) ||
        Regex_special_caracteres_39.test(this.value) ||
        Regex_special_caracteres_40.test(this.value) ||
        Regex_special_caracteres_41.test(this.value)
    )
    {
        // remova o ultimo caractere que seria as caracteres que foram inseridas
        this.value = this.value.slice(0,-1);
        this.closest(".inputs").style.border = "2px solid red";
        if(!this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-1"))
        {
            var mensagem_nome_cadastrar_1 = document.createElement("div");
            mensagem_nome_cadastrar_1.classList.add("mensagem-error-nome-cadastrar-1");
            this.closest(".inputs").appendChild(mensagem_nome_cadastrar_1);
            mensagem_nome_cadastrar_1.style.width = "100%";
            mensagem_nome_cadastrar_1.style.position = "absolute";
            mensagem_nome_cadastrar_1.style.top = "45px";
            mensagem_nome_cadastrar_1.style.left = "0";
            mensagem_nome_cadastrar_1.style.color = "red";
            mensagem_nome_cadastrar_1.style.textAlign = "center";
            mensagem_nome_cadastrar_1.style.fontFamily = "Montserrat";
            mensagem_nome_cadastrar_1.textContent = "Use seu Nome Social por favor";
            document.getElementById("check-nome-cadastrar").style.display = "none";
            var mensagem_existente_1 = this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-2");
            if(mensagem_existente_1){this.closest(".inputs").removeChild(mensagem_existente_1);}else{return null;}
        }
        else
        {
            return null;
        }
        validação_cadastrar.nome = false;
    }
    else
    if(Regex_string_nome.test(this.value))
    {
        if(this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-1"))
        {
            this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-1"));
        }
        else
        if(this.value.length <= 10)
        {
            this.closest(".inputs").style.border = "2px solid red";
            this.closest(".inputs").querySelector("i").style.color = "red";
            // verificando a existencia da variavel de avisos (evitando avisos repetidos)
            // (!) antes da condição torna a condição negativa então se não existir o elemento crie
            if(!this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-2"))
            {
                // criando uma variavel de aplicação dinamica (document.createElements("div"))
                var mensagem_nome_cadastrar_2 = document.createElement("div");
                mensagem_nome_cadastrar_2.classList.add("mensagem-error-nome-cadastrar-2");
                this.closest(".inputs").appendChild(mensagem_nome_cadastrar_2);
                mensagem_nome_cadastrar_2.style.width = "100%";
                mensagem_nome_cadastrar_2.style.position = "absolute";
                mensagem_nome_cadastrar_2.style.top = "45px";
                mensagem_nome_cadastrar_2.style.left = "0";
                mensagem_nome_cadastrar_2.style.textAlign = "center";
                mensagem_nome_cadastrar_2.style.fontFamily = "Montserrat";
                mensagem_nome_cadastrar_2.style.color = "red";
                mensagem_nome_cadastrar_2.textContent = "O nome deve ser completo";
                var mensagem_existente_2 = this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-1");
                if(mensagem_existente_2){this.closest(".inputs").removeChild(mensagem_existente_2);}

            }
            // se ja existir não crie mais...
            else
            {
                return null;
            }
            validação_cadastrar.nome = false;
        }
        else
        if(this.value.length > 10)
        {
            if(this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-2"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-nome-cadastrar-2"));
            }
            document.getElementById("check-nome-cadastrar").style.fontSize = "25px";
            document.getElementById("check-nome-cadastrar").style.position = "absolute";
            document.getElementById("check-nome-cadastrar").style.top = "6px";
            document.getElementById("check-nome-cadastrar").style.left = "90%";
            document.getElementById("check-nome-cadastrar").style.color = "#009688";
            document.getElementById("check-nome-cadastrar").style.display = "block";
            this.closest(".inputs").style.border = "2px solid #009688";
            this.closest(".inputs").querySelector("i").style.color = "#009688";
            this.style.color = "#009688";
            this.style.fontWeight = "700";
            validação_cadastrar.nome = true;
        }
    }
    
});
// Email Cadastrar
document.getElementById("check-email-cadastrar").style.display = "none";
document.querySelector(".email-cadastrar").addEventListener("input",function(){
    var Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(this.value === '')
    {
        this.closest(".inputs").style.border = "2px solid #121212";
        this.closest(".inputs").querySelector("i").style.color = "black";
        this.style.color = "black";
        this.style.fontFamily = "Montserrat";
        this.style.fontWeight = "normal";
        document.getElementById("check-email-cadastrar").style.display = "none";
        var verificação_de_mensagem_email_cadastrar = this.closest(".inputs").querySelector(".email-error-mensagem");
        if(verificação_de_mensagem_email_cadastrar){this.closest(".inputs").removeChild(verificação_de_mensagem_email_cadastrar)}
        validação_cadastrar.email = false;
    }
    else
    if(Regex.test(this.value))
    {
        this.closest(".inputs").style.border = "2px solid #009688";
        this.closest(".inputs").querySelector("i").style.color = "#009688";
        this.style.color = "#009688";
        this.style.fontFamily = "Montserrat";
        this.style.fontWeight = "700";
        document.getElementById("check-email-cadastrar").style.fontSize = "25px";
        document.getElementById("check-email-cadastrar").style.position = "absolute";
        document.getElementById("check-email-cadastrar").style.top = "6px";
        document.getElementById("check-email-cadastrar").style.left = "90%";
        document.getElementById("check-email-cadastrar").style.color = "#009688";
        document.getElementById("check-email-cadastrar").style.display = "block";
        var verificacao_de_mensagem_email_cadastrar = this.closest(".inputs").querySelector(".email-error-mensagem");
        if(verificacao_de_mensagem_email_cadastrar){this.closest(".inputs").removeChild(verificacao_de_mensagem_email_cadastrar);}
        validação_cadastrar.email = true;
    }
    else
    {
        document.getElementById("check-email-cadastrar").style.display = "none";
        this.closest(".inputs").style.border = "2px solid red";
        this.closest(".inputs").querySelector("i").style.color = "red";
        if(!this.closest(".inputs").querySelector(".email-error-mensagem"))
        {
            var mensagem_email_cadastrar = document.createElement("div");
            mensagem_email_cadastrar.classList.add("email-error-mensagem");
            this.closest(".inputs").appendChild(mensagem_email_cadastrar);
            mensagem_email_cadastrar.style.width = "100%";
            mensagem_email_cadastrar.style.position = "absolute";
            mensagem_email_cadastrar.style.top = "45px";
            mensagem_email_cadastrar.style.left = "0";
            mensagem_email_cadastrar.style.textAlign = "center";
            mensagem_email_cadastrar.style.fontFamily = "Montserrat";
            mensagem_email_cadastrar.style.color = "red";
            mensagem_email_cadastrar.textContent = "Insira um E-mail Válido";
        }
        else
        {
            return null;
        }
        validação_cadastrar.email = false;
    }
});
// Data Cadastrar
document.getElementById("check-data-cadastrar").style.display = "none";
document.querySelector(".date-cadastrar").addEventListener("input",function(){
    this.value = this.value.replace(/^(\d{2})(\d{2})(\d{4})/ , '$1/$2/$3');
    this.value = this.value.slice(0,10);
    if(this.value === '')
    {
        this.closest(".inputs").querySelector("i").style.color = "black";
        this.closest(".inputs").style.border = "2px solid #121212";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        document.getElementById("check-data-cadastrar").style.display = "none";
        if(this.closest(".inputs").querySelector(".date-error-mensagem")){this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".date-error-mensagem"));}
        validação_cadastrar.data = false;
    }
    if(this.value.length < 10)
    {
        this.closest(".inputs").style.border = "2px solid red";
        this.closest(".inputs").querySelector("i").style.color = "red";
        document.getElementById("check-data-cadastrar").style.display = "none";
        if(!this.closest(".inputs").querySelector(".date-error-mensagem"))
        {
            var mensagem_date = document.createElement("div");
            mensagem_date.classList.add("date-error-mensagem");
            this.closest(".inputs").appendChild(mensagem_date);
            mensagem_date.style.width = "100%";
            mensagem_date.style.position = "absolute";
            mensagem_date.style.top = "45px";
            mensagem_date.style.left = "0";
            mensagem_date.style.textAlign = "center";
            mensagem_date.style.fontFamily = "Montserrat";
            mensagem_date.style.color = "red";
            mensagem_date.textContent = "A data deve corresponder a DD/MM/AAAA";
        }
        else
        {
            return null;
        }
        validação_cadastrar.data = false;
    }
    if(this.value.length === 10)
    {
        var arrayData = this.value.split("/");
        var ano = arrayData[2];
        var AnoNumber = Number(ano);
        if(AnoNumber < 1925 || AnoNumber > 2006 || AnoNumber === new Date().getFullYear())
        {
            this.closest(".inputs").style.border = "2px solid red";
            this.closest(".inputs").querySelector("i").style.color = "red";
            document.getElementById("check-data-cadastrar").style.display = "none";
            if(!this.closest(".inputs").querySelector(".date-error-mensagem"))
            {
                var mensagem_date = document.createElement("div");
                mensagem_date.classList.add("date-error-mensagem");
                this.closest(".inputs").appendChild(mensagem_date);
                mensagem_date.style.width = "100%";
                mensagem_date.style.position = "absolute";
                mensagem_date.style.top = "45px";
                mensagem_date.style.left = "0";
                mensagem_date.style.textAlign = "center";
                mensagem_date.style.fontFamily = "Montserrat";
                mensagem_date.style.color = "red";
                mensagem_date.textContent = "Ano da Data Invalido";
            }
            else
            {
                return null;
            }
            validação_cadastrar.data = false;
        }
    }
    if(this.value.length === 10)
    {
        this.closest(".inputs").style.border = "2px solid #009688";
        this.closest(".inputs").querySelector("i").style.color = "#009688";
        this.style.color = "#009688";
        this.style.fontWeight = "700";
        document.getElementById("check-data-cadastrar").style.fontSize = "25px";
        document.getElementById("check-data-cadastrar").style.position = "absolute";
        document.getElementById("check-data-cadastrar").style.top = "6px";
        document.getElementById("check-data-cadastrar").style.left = "90%";
        document.getElementById("check-data-cadastrar").style.color = "#009688";
        document.getElementById("check-data-cadastrar").style.display = "block";
        if(this.closest(".inputs").querySelector(".date-error-mensagem")){this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".date-error-mensagem"));}
        validação_cadastrar.data = true;
    }
});
// Genero Cadastrar
document.getElementById("check-generos-cadastrar").style.display = "none";
document.querySelector(".generos-cadastrar").addEventListener("input",function(){
   // alocar o valor (this.value) do input em uma variavel
   var input_valor = this.value;
   // criando variavel para alocar o valor
   var Variavel = null;
    this.closest(".inputs").querySelector("datalist").querySelectorAll(".generos-topicos").forEach(function(options){
        if(input_valor === options.textContent)
        {
            Variavel = 1;
        }
    });
    if(this.value === '')
    {
        this.closest(".inputs").style.border = "2px solid #121212";
        this.closest(".inputs").style.color = "black";
        this.closest(".inputs").querySelector("i").style.color = "black";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        if(this.closest(".inputs").querySelector(".generos-error-mensagem")){this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".generos-error-mensagem"));}
        document.getElementById("check-generos-cadastrar").style.display = "none";
        validação_cadastrar.generos = false;
    }
    else
    if(Variavel === 1)
    {
        this.closest(".inputs").style.border = "2px solid #009688";
        this.closest(".inputs").querySelector("i").style.color = "#009688";
        this.style.color = "#009688";
        this.style.fontWeight = "700";
        this.style.fontFamily = "Montserrat";
        document.getElementById("check-generos-cadastrar").style.fontSize = "25px";
        document.getElementById("check-generos-cadastrar").style.position = "absolute";
        document.getElementById("check-generos-cadastrar").style.top = "6px";
        document.getElementById("check-generos-cadastrar").style.left = "90%";
        document.getElementById("check-generos-cadastrar").style.color = "#009688";
        document.getElementById("check-generos-cadastrar").style.display = "block";
        if(this.closest(".inputs").querySelector(".generos-error-mensagem")){this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".generos-error-mensagem"));}
        validação_cadastrar.generos = true;
    }
    else
    if(Variavel === null)
    {
        this.closest(".inputs").style.border = "2px solid red";
        this.closest(".inputs").querySelector("i").style.color = "red";
        this.style.color = "black";
        this.style.fontWeight = "normal";
        if(!this.closest(".inputs").querySelector(".generos-error-mensagem"))
        {
            var mensagem_generer = document.createElement("div");
            mensagem_generer.classList.add("generos-error-mensagem");
            this.closest(".inputs").appendChild(mensagem_generer);
            mensagem_generer.style.width = "100%";
            mensagem_generer.style.position = "absolute";
            mensagem_generer.style.top = "45px";
            mensagem_generer.style.left = "0";
            mensagem_generer.style.textAlign = "center";
            mensagem_generer.style.fontFamily = "Montserrat";
            mensagem_generer.style.color = "red";
            mensagem_generer.textContent = "Nenhum Resultado Encontrado";
        }
        document.getElementById("check-generos-cadastrar").style.display = "none";
        validação_cadastrar.generos = false;
    }
});
// Senha Cadastrar
document.getElementById("check-senha-cadastrar").style.display = "none";
document.querySelector(".password-cadastrar").addEventListener("input",function(){
    var strings = /[a-zA-Z]/g;
    var ints = /[0-9]/g;
    if(this.value === '')
    {
        this.closest(".inputs").style.border = "2px solid #121212";
        this.closest(".inputs").querySelector("i").style.color = "black";
        this.style.fontWeight = "normal";
        this.style.color = "black";
        if(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
        {
            this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
        }
        if(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"))
        {
            this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"));
        }
        validação_cadastrar.senha = false;
    }
    else
    if(strings.test(this.value) && ints.test(this.value))
    {
        if(this.value.length === 8)
        {
            this.closest(".inputs").style.border = "2px solid #009688";
            this.closest(".inputs").querySelector("i").style.color = "#009688";
            this.style.color = "#009688";
            this.style.fontFamily = "Montserrat";
            this.style.fontWeight = "700";
            if(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
            }
            if(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"));
            }
            this.closest(".inputs").querySelector("i.i-cadastrar-open").style.left = "80%";
            this.closest(".inputs").querySelector("i.i-cadastrar-close").style.left = "80%";
            document.getElementById("check-senha-cadastrar").style.fontSize = "25px";
            document.getElementById("check-senha-cadastrar").style.position = "absolute";
            document.getElementById("check-senha-cadastrar").style.top = "6px";
            document.getElementById("check-senha-cadastrar").style.left = "90%";
            document.getElementById("check-senha-cadastrar").style.color = "#009688";
            document.getElementById("check-senha-cadastrar").style.display = "block";
            if(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
            }
            if(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"));
            }
            validação_cadastrar.senha = true;
        }
        else
        if(this.value.length === 16)
        {
            this.closest(".inputs").style.border = "2px solid #009688";
            this.closest(".inputs").querySelector("i").style.color = "#009688";
            this.style.color = "#009688";
            this.style.fontFamily = "Montserrat";
            this.style.fontWeight = "700";
            if(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
            }
            if(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"));
            }
            this.closest(".inputs").querySelector("i.i-cadastrar-open").style.left = "80%";
            this.closest(".inputs").querySelector("i.i-cadastrar-close").style.left = "80%";
            document.getElementById("check-senha-cadastrar").style.fontSize = "25px";
            document.getElementById("check-senha-cadastrar").style.position = "absolute";
            document.getElementById("check-senha-cadastrar").style.top = "6px";
            document.getElementById("check-senha-cadastrar").style.left = "90%";
            document.getElementById("check-senha-cadastrar").style.color = "#009688";
            document.getElementById("check-senha-cadastrar").style.display = "block";
            if(!this.closest(".inputs").querySelector(".mensagem-de-limite"))
            {
                var mensagem_de_limite = document.createElement("div");
                mensagem_de_limite.classList.add("mensagem-de-limite");
                this.closest(".inputs").appendChild(mensagem_de_limite);
                mensagem_de_limite.style.width = "100%";
                mensagem_de_limite.style.position = "absolute";
                mensagem_de_limite.style.top = "45px";
                mensagem_de_limite.style.left = "0";
                mensagem_de_limite.style.textAlign = "center";
                mensagem_de_limite.style.fontFamily = "Montserrat";
                mensagem_de_limite.style.color = "#009688";
                mensagem_de_limite.textContent = "O Limite é 16 caracteres";
            }
            else
            {
                return null;
            }
            if(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
            }
            if(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-tamanho-da-senha-de-cadastramento"));
            }
            validação_cadastrar.senha = true;
        }

    }
    else
    {
        this.closest(".inputs").style.border = "2px solid red";
        this.closest(".inputs").querySelector("i").style.color = "red";
        this.style.fontWeight = "normal";
        this.closest(".inputs").querySelector("i.i-cadastrar-open").style.left = "90%";
        this.closest(".inputs").querySelector("i.i-cadastrar-close").style.left = "90%";
        if(!this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
        {
            var mensagem_senha_cadastrar = document.createElement("div");
            mensagem_senha_cadastrar.classList.add("mensagem-error-senha-cadastrar");
            this.closest(".inputs").appendChild(mensagem_senha_cadastrar);
            mensagem_senha_cadastrar.style.width = "100%";
            mensagem_senha_cadastrar.style.position = "absolute";
            mensagem_senha_cadastrar.style.top = "45px";
            mensagem_senha_cadastrar.style.left = "0";
            mensagem_senha_cadastrar.style.fontFamily = "Montserrat";
            mensagem_senha_cadastrar.style.color = "red";
            mensagem_senha_cadastrar.style.textAlign = "center";
            mensagem_senha_cadastrar.textContent = "A senha deve Letras e Números";
        }
        if(this.value.length < 8)
        {
            this.closest(".inputs").style.border = "2px solid red";
            this.closest(".inputs").querySelector("i").style.color = "red";
            this.style.color = "red";
            this.style.fontFamily = "Montserrat";
            if(!this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-error-senha-cadastrar"));
                var new_mensagem_senha_cadastrar = document.createElement("div");
                new_mensagem_senha_cadastrar.classList.add("mensagem-de-tamanho-da-senha-de-cadastramento");
                this.closest(".inputs").appendChild(new_mensagem_senha_cadastrar);
                new_mensagem_senha_cadastrar.style.width = "100%";
                new_mensagem_senha_cadastrar.style.position = "absolute";
                new_mensagem_senha_cadastrar.style.top = "45px";
                new_mensagem_senha_cadastrar.style.left = "0";
                new_mensagem_senha_cadastrar.style.fontFamily = "Montserrat";
                new_mensagem_senha_cadastrar.style.color = "red";
                new_mensagem_senha_cadastrar.style.textAlign = "center";
                new_mensagem_senha_cadastrar.textContent = "8 caracteres no mínimo para senha";
            }
            document.getElementById("check-senha-cadastrar").style.display = "none";
            if(this.closest(".inputs").querySelector(".mensagem-de-limite"))
            {
                this.closest(".inputs").removeChild(this.closest(".inputs").querySelector(".mensagem-de-limite"));
            }
            this.style.fontWeight = "normal";
            this.closest(".inputs").querySelector("i.i-cadastrar-open").style.left = "90%";
            this.closest(".inputs").querySelector("i.i-cadastrar-close").style.left = "90%";
            validação_cadastrar.senha = false;
        }
        validação_cadastrar.senha = false;
    }
    this.value = this.value.slice(0,16);
});
// Submit Cadastrar
document.querySelector(".submit-cadastrar").addEventListener("click",function(event){
    if
    (
        validação_cadastrar.nome === true &&
        validação_cadastrar.email === true &&
        validação_cadastrar.data === true &&
        validação_cadastrar.generos === true &&
        validação_cadastrar.senha === true
    )
    {
        return null;
    }
    else
    {
        return event.preventDefault();
    }
});