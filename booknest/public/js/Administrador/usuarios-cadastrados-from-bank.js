document.querySelectorAll(".hidden-information").forEach(function(elemento){
    elemento.style.color = "transparent";
})
document.querySelectorAll(".links-containers-user-cadastrado").forEach(function(links_table_usuarios){
    links_table_usuarios.addEventListener("click", function(event){
        event.preventDefault();
        var id = this.querySelector(".container-user-cadastrado").querySelector(".hidden-information").textContent;
        // Cria Elementos 
        var Overlay_Usuarios_Cadastrados_From_Bank = document.createElement("div");
        var Modal_Molde_Usuarios_Cadastrados_From_Banck = document.createElement("div");
        var Modal_Middle_Usuarios_Cadastrados_From_Bank = document.createElement("div");
        var Modal_Index_Usuarios_Cadastrados_From_Bank = document.createElement("div");
        var Container_Modal_Title_Usuarios_Cadastrados_From_Bank = document.createElement("div");
        var Containers_Modal_Index_Usuarios_Cadastrados_From_Banck = document.createElement("div");
        var Container_Modal_1_Index_Usuarios_Cadastrados_From_Banck = document.createElement("div");
        var Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck = document.createElement("div");
        var Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1 = document.createElement("form");
        var Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2 = document.createElement("form");
        var Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3 = document.createElement("form");
        var Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4 = document.createElement("form");
        var Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1 = document.createElement("select");
        var Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2 = document.createElement("select");
        var Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3 = document.createElement("select");
        var Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4 = document.createElement("select");
        var Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1 = document.createElement("input");
        var Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2 = document.createElement("input");
        var Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3 = document.createElement("input");
        var Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4 = document.createElement("input");
        var Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1 = document.createElement("input");

        var Container_Show_Nivel_de_Acessos_do_Usuarios_Cadastrados = document.createElement("div");
        var Nivel_de_Acessos_do_Usuarios_Cadastrados = document.createElement("p");
        var Container_Close_Usuarios_Cadastrados_From_Banck = document.createElement("div");
        var Imagem_Usuarios_Cadastrados_From_Banck = document.createElement("img");
        var Link_Close_Usuarios_Cadastrados_From_Banck = document.createElement("a");
        var Button_Close_Usuarios_Cadastrados_From_Banck = document.createElement("button");
        // Adicionando Classes
        Overlay_Usuarios_Cadastrados_From_Bank.classList.add("Overlay-Usuarios-Cadastrados-From-Bank");
        Modal_Molde_Usuarios_Cadastrados_From_Banck.classList.add("Modal-Molde-Usuarios-Cadastrados-From-Banck");
        Modal_Middle_Usuarios_Cadastrados_From_Bank.classList.add("Modal-Middle-Usuarios-Cadastrados-From-Bank");
        Modal_Index_Usuarios_Cadastrados_From_Bank.classList.add("Modal-Index-Usuarios-Cadastrados-From-Bank");
        Container_Modal_Title_Usuarios_Cadastrados_From_Bank.classList.add("Container-Modal-Title-Usuarios-Cadastrados-From-Bank");
        Containers_Modal_Index_Usuarios_Cadastrados_From_Banck.classList.add("Containers-Modal-Index-Usuarios-Cadastrados-From-Banck");
        Container_Modal_1_Index_Usuarios_Cadastrados_From_Banck.classList.add("Container-Modal-1-Index-Usuarios-Cadastrados-From-Banck");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.classList.add("Container-Modal-2-Index-Usuarios-Cadastrados-From-Banck");
        Container_Close_Usuarios_Cadastrados_From_Banck.classList.add("Container-Close-Usuarios-Cadastrados-From-Banck");
        Imagem_Usuarios_Cadastrados_From_Banck.classList.add("Imagem-Usuarios-Cadastrados-From-Banck");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.classList.add("Container-Modal-2-Index-Usuarios-Cadastrados-From-Banck-Informações-1");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.classList.add("Container-Modal-2-Index-Usuarios-Cadastrados-From-Banck-Informações-2");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.classList.add("Container-Modal-2-Index-Usuarios-Cadastrados-From-Banck-Informações-3");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.classList.add("Container-Modal-2-Index-Usuarios-Cadastrados-From-Banck-Informações-4");
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.classList.add("Button-Container-Modal-2-Index-Usuarios-Cadastrados-From-Back-Formulario-Submit");
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.classList.add("Button-Container-Modal-2-Index-Usuarios-Cadastrados-From-Back-Formulario-Submit");
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.classList.add("Button-Container-Modal-2-Index-Usuarios-Cadastrados-From-Back-Formulario-Submit");
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.classList.add("Button-Container-Modal-2-Index-Usuarios-Cadastrados-From-Back-Formulario-Submit");

        Container_Show_Nivel_de_Acessos_do_Usuarios_Cadastrados.classList.add("Container-Show-Nivel-de-Acessos-do-Usuarios-Cadastrados");
        Nivel_de_Acessos_do_Usuarios_Cadastrados.classList.add("Nivel-de-Acessos-do-Usuarios-Cadastrados");
        Link_Close_Usuarios_Cadastrados_From_Banck.classList.add("Link-Close-Usuarios-Cadastrados-From-Banck");
        Button_Close_Usuarios_Cadastrados_From_Banck.classList.add("Button-Close-Usuarios-Cadastrados-From-Banck");
        // Adicionando Estruturas
        Modal_Molde_Usuarios_Cadastrados_From_Banck.appendChild(Modal_Middle_Usuarios_Cadastrados_From_Bank);
        Modal_Middle_Usuarios_Cadastrados_From_Bank.appendChild(Modal_Index_Usuarios_Cadastrados_From_Bank);
        Modal_Index_Usuarios_Cadastrados_From_Bank.appendChild(Container_Modal_Title_Usuarios_Cadastrados_From_Bank);
        Modal_Index_Usuarios_Cadastrados_From_Bank.appendChild(Containers_Modal_Index_Usuarios_Cadastrados_From_Banck);
        Containers_Modal_Index_Usuarios_Cadastrados_From_Banck.appendChild(Container_Modal_1_Index_Usuarios_Cadastrados_From_Banck);
        Container_Modal_1_Index_Usuarios_Cadastrados_From_Banck.appendChild(Imagem_Usuarios_Cadastrados_From_Banck);
        Container_Show_Nivel_de_Acessos_do_Usuarios_Cadastrados.appendChild(Nivel_de_Acessos_do_Usuarios_Cadastrados);
        Containers_Modal_Index_Usuarios_Cadastrados_From_Banck.appendChild(Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.appendChild(Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.appendChild(Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.appendChild(Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.appendChild(Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.appendChild(Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.appendChild(Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.appendChild(Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.appendChild(Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4);
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.appendChild(Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4);
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.appendChild(Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1);
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.appendChild(Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2);
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.appendChild(Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3);
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.appendChild(Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4);
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.appendChild(Container_Show_Nivel_de_Acessos_do_Usuarios_Cadastrados);
        Modal_Index_Usuarios_Cadastrados_From_Bank.appendChild(Container_Close_Usuarios_Cadastrados_From_Banck);
        Container_Close_Usuarios_Cadastrados_From_Banck.appendChild(Link_Close_Usuarios_Cadastrados_From_Banck);
        Link_Close_Usuarios_Cadastrados_From_Banck.appendChild(Button_Close_Usuarios_Cadastrados_From_Banck);

        // Adicionando Estilizações
        Overlay_Usuarios_Cadastrados_From_Bank.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;";
        Modal_Molde_Usuarios_Cadastrados_From_Banck.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 1200px; height: 600px; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; z-index: 11;";
        Modal_Middle_Usuarios_Cadastrados_From_Bank.style.cssText = "width: 98%; height: 98%; background: white; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
        Modal_Index_Usuarios_Cadastrados_From_Bank.style.cssText = "width: 98%; height: 98%; background: #121212; border: none; border-radius: 10px; display: flex; align-items:center; justify-content: space-between; flex-direction: column; flex-wrap: nowrap;";
        Container_Modal_Title_Usuarios_Cadastrados_From_Bank.style.cssText = "width: 100%; max-width: 90%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; height: 50px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto;";
        Container_Modal_Title_Usuarios_Cadastrados_From_Bank.textContent = this.querySelector(".container-user-cadastrado").querySelector(".informacoes2").querySelector("p").textContent;
        Containers_Modal_Index_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 100%; max-width: 90%; height: 80%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 5px auto;";
        Container_Modal_1_Index_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 50%; height: 100%; border-right: 2px groove white; display: flex; align-items: center; justify-content: center;";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 50%; height: 100%; border-left: 2px groove white; display: flex; align-items: center; justify-content: space-around; flex-wrap: nowrap; flex-direction: column;";
        Container_Close_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 100%; max-width: 20%; margin: 0 auto;";
        Link_Close_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 100%; text-decoraticon: none;";
        Button_Close_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; background: transparent; border: 2px groove red; border-radius: 10px; color: red; font-size: 20px; cursor: pointer; transition: 1s; margin: 10px auto;";
        Button_Close_Usuarios_Cadastrados_From_Banck.addEventListener('mouseenter',function(){
            this.style.cssText = "transition: 1s; width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; background: red; border: none; border-radius: 10px; color: #121212; font-size: 20px; cursor: pointer; margin: 10px auto;";
        });
        Button_Close_Usuarios_Cadastrados_From_Banck.addEventListener('mouseleave',function(){
            this.style.cssText = "transition: 1s; width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; background: transparent; border: 2px groove red; border-radius: 10px; color: red; font-size: 20px; cursor: pointer; margin: 10px auto;";
        });
        Button_Close_Usuarios_Cadastrados_From_Banck.textContent = "FECHAR";
        Imagem_Usuarios_Cadastrados_From_Banck.style.cssText = "width: 400px; height: 400px; border-radius: 50%;";
        Imagem_Usuarios_Cadastrados_From_Banck.src = this.closest(".usuarios-cadastrados-from-bank").querySelector(".links-containers-user-cadastrado").querySelector(".container-user-cadastrado").querySelector(".informacoes1").querySelector("img").src;
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-direction: column; flex-wrap: nowrap; padding: 10px;";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-direction: column; flex-wrap: nowrap; padding: 10px;";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-direction: column; flex-wrap: nowrap; padding: 10px;";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-direction: column; flex-wrap: nowrap; padding: 10px;";

        var NullValueOptions = ['null'];
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.style.cssText = "width: 100%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; background: transparent; color: white; text-align: center; outline: none; font-family: 'Montserrat'; font-size: 18px;";
        var DeletarOptions_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1 = ['Deletar Este Usuário , Essa Opção é Permanente'];
        var Primeiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1_Option = document.createElement("option");
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.appendChild(Primeiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1_Option);
        Primeiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1_Option.textContent = "Selecione Deletar";
        Primeiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1_Option.value = NullValueOptions[0];
        Primeiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1_Option.style.cssText = "color: #121212; font-family: 'Montserrat'; font-size: 18px;";
        for (let DeletarOptions = 0; DeletarOptions < DeletarOptions_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.length; DeletarOptions++) {
            var Options_DeletarOptions = document.createElement("option");
            Options_DeletarOptions.classList.add("Options-DeletarOptions");
            Options_DeletarOptions.id = "Options-DeletarOptions-"+DeletarOptions;
            Options_DeletarOptions.value = DeletarOptions_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1[DeletarOptions];
            Options_DeletarOptions.textContent = DeletarOptions_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1[DeletarOptions];
            Options_DeletarOptions.style.cssText = "color: #121212; font-family: 'Montserrat'; font-size: 18px;";
            Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.appendChild(Options_DeletarOptions);
        }
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.style.cssText = "width: 100%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; background: transparent; color: white; text-align: center; outline: none; font-family: 'Montserrat'; font-size: 18px;";
        var ids_strings_options = ["Suspender Usuário por: 15 minutos ","Suspender Usuário por: 30 minutos ","Suspender Usuário por: 45 minutos ","Suspender Usuário por: 1 hora ","Suspender Usuário por: 2 horas ","Suspender Usuário por: 3 horas "];
        var Segundo_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2_Option = document.createElement("option");
        Segundo_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2_Option.style.cssText = "color: #121212; font-family: 'Montserrat'; font-size: 18px;";
        Segundo_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2_Option.value = NullValueOptions[0];
        Segundo_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2_Option.textContent = "Selecione Suspender";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.appendChild(Segundo_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2_Option)
        for (let option = 0; option < ids_strings_options.length; option++) {
            var Options_Suspensos = document.createElement("option");
            Options_Suspensos.classList.add("Options-Suspensos");
            Options_Suspensos.id = "Options-Suspensos-"+option;
            Options_Suspensos.value = ids_strings_options[option].trim().replace(/[' ']/g ,'_');
            Options_Suspensos.textContent = ids_strings_options[option];
            Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.appendChild(Options_Suspensos);
            Options_Suspensos.style.cssText = "color: #121212; font-size: 18px; font-family: 'Montserrat';";
        }
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.style.cssText = "width: 100%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; background: transparent; color: white; text-align: center; outline: none; font-family: 'Montserrat'; font-size: 18px;";
        var Terceiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3_Option = document.createElement("option");
        Terceiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3_Option.style.cssText = "color: #121212; font-family: 'Montserrat'; font-size: 18px;";
        Terceiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3_Option.value = NullValueOptions[0];
        Terceiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3_Option.textContent = "Selecione Bloquear";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.appendChild(Terceiro_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3_Option);
        var BloqueadosOptions = [
            'Bloquear esse Usuario por Violação dos Termos de Serviço',
            'Bloquear esse Usuario por Comportamento Inapropriado',
            'Bloquear esse Usuario por Atividades Fraudulentas',
            'Bloquear esse Usuario por Spam e Publicidade Indevida',
            'Bloquear esse Usuario por Problemas com Pagamentos',
            'Bloquear esse Usuario por Violação de Direitos Autorais',
            'Bloquear esse Usuario por Comprometimento da Segurança da Plataforma',
            'Bloquear esse Usuario por Uso Indevido de Bots ou Automação',
            'Bloquear esse Usuario por Publicação de Conteúdo Inapropriado',
            'Bloquear esse Usuario por Atividades Contrárias à Missão do BookNest'
        ];
        for (let Bloqueados = 0; Bloqueados < BloqueadosOptions.length; Bloqueados++) {
            var Options_Bloqueados = document.createElement("option");
            Options_Bloqueados.classList.add("Options-Bloqueados");
            Options_Bloqueados.id = "Options-Bloqueados-"+Bloqueados;
            Options_Bloqueados.value = BloqueadosOptions[Bloqueados].trim().replace(/[' ']/g,'_');
            Options_Bloqueados.textContent = BloqueadosOptions[Bloqueados];
            Options_Bloqueados.style.cssText = "color: #121212; font-size: 18px; font-family: 'Montserrat';";
            Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.appendChild(Options_Bloqueados);
        }
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.style.cssText = "width: 100%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; background: transparent; color: white; text-align: center; outline: none; font-family: 'Montserrat'; font-size: 18px;";
        var Quarta_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4_Option = document.createElement("option");
        Quarta_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4_Option.style.cssText = "color: #121212; font-family: 'Montserrat'; font-size: 18px;";
        Quarta_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4_Option.value = NullValueOptions[0];
        Quarta_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4_Option.textContent = "Selecionar o Nivel de Acessos";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.appendChild(Quarta_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4_Option);
        var NivelDeAcessosOptions = ['Alterar o Nivel de Acessos para Administrador','Alterar o Nivel de Acessos para Usuário','Alterar o Nivel de Acessos para Autor'];
        for (let NivelDeAcessos = 0; NivelDeAcessos < NivelDeAcessosOptions.length; NivelDeAcessos++) {
            var OptionsNivelDeAcessos = document.createElement("option");
            OptionsNivelDeAcessos.classList.add("Options-Nivel-de-Acessos");
            OptionsNivelDeAcessos.id = "Options-Nivel-de-Acessos-"+NivelDeAcessos;
            OptionsNivelDeAcessos.value = NivelDeAcessosOptions[NivelDeAcessos].trim().replace(/[' ']/g ,'_');
            OptionsNivelDeAcessos.textContent = NivelDeAcessosOptions[NivelDeAcessos];
            OptionsNivelDeAcessos.style.cssText = "color: #121212; font-size: 18px; font-family: 'Montserrat';";
            Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.appendChild(OptionsNivelDeAcessos);
        }
        Container_Show_Nivel_de_Acessos_do_Usuarios_Cadastrados.style.cssText = "width: 100%;";
        Nivel_de_Acessos_do_Usuarios_Cadastrados.style.cssText = "color: white; font-family: 'Montserrat'; font-size: 18px;";
        Nivel_de_Acessos_do_Usuarios_Cadastrados.textContent = "Nivel de Acessos desse Usuário: " + this.closest(".usuarios-cadastrados-from-bank").querySelector(".links-containers-user-cadastrado").querySelector(".container-user-cadastrado").querySelector(".hidden-Informações").querySelector("p").textContent;
        
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.type = "submit";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.value = "Atualizar Status do Usuário";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.style.cssText = "padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer; transition: 1s;";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.addEventListener("mouseenter",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: #00d7ff; border: none; border-radius: 10px; color: #121212; outline: none; cursor: pointer;";
        });
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.addEventListener("mouseleave",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer;";
        });
        
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.type = "submit";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.value = "Atualizar Status do Usuário";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.style.cssText = "padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer; transition: 1s;";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.addEventListener("mouseenter",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: #00d7ff; border: none; border-radius: 10px; color: #121212; outline: none; cursor: pointer;";
        });
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.addEventListener("mouseleave",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer;";
        });

        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.type = "submit";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.value = "Atualizar Status do Usuário";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.style.cssText = "padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer; transition: 1s;";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.addEventListener("mouseenter",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: #00d7ff; border: none; border-radius: 10px; color: #121212; outline: none; cursor: pointer;";
        });
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.addEventListener("mouseleave",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer;";
        });

        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.type = "submit";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.value = "Atualizar Status do Usuário";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.style.cssText = "padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer; transition: 1s;";
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.addEventListener("mouseenter",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: #00d7ff; border: none; border-radius: 10px; color: #121212; outline: none; cursor: pointer;";
        });
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.addEventListener("mouseleave",function(){
            this.style.cssText = "transition: 1s; padding: 10px; font-family: 'Montserrat'; font-size: 18px; background: transparent; border: 2px groove #00d7ff; border-radius: 10px; color: #00d7ff; outline: none; cursor: pointer;";
        });

        Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1.style.cssText = "width:100%; height: 40px; background: transparent; color: white; border:none; outline: none; font-family: 'Montserrat',sans-serfi; max-width: 80%; margin: 0 auto;";
        Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1.required;
        Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1.placeholder = "Insira o Motivo da Deleção";
        Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1.id = "input-de-texto-motivo-da-deleção";
        Input_Container_Modal_2_Index_usuarios_Cadastrados_From_Banck_Formulario_Text_1.type = "text";
        
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.name = "Deletar?";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_1.id = "Deletar";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.name = "Suspender?";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_2.id = "Suspender";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.name = "Bloquear?";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_3.id = "Bloquear";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.name = "Alterar_Nivel_de_Acessos?";
        Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_Informações_4.id = "Alterar_Nivel_de_Acessos";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.method = "POST";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.method = "POST";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.method = "POST";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.method = "POST";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.action = "";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.action = "";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.action = "";
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.action = "";
        // Adicionando no Documento HTML
        document.body.appendChild(Overlay_Usuarios_Cadastrados_From_Bank);
        document.body.appendChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
        // Removedo do Documento HTML 
        Overlay_Usuarios_Cadastrados_From_Bank.addEventListener("click",function(){
            document.body.removeChild(this);
            document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
        });
        Link_Close_Usuarios_Cadastrados_From_Banck.addEventListener("click",function(){
            document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
            document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
        });
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_1.addEventListener("submit",function(event){
            event.preventDefault();
        });
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_2.addEventListener("submit",function(event){
            event.preventDefault();
        });
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_3.addEventListener("submit",function(event){
            event.preventDefault();
        });
        Formulario_Container_Modal_2_Index_Usuarios_Cadastrados_From_Banck_4.addEventListener("submit",function(event){
            event.preventDefault();
        });
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.addEventListener("submit",function(event){event.preventDefault();});
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.addEventListener("submit",function(event){event.preventDefault();});
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.addEventListener("submit",function(event){event.preventDefault();});
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.addEventListener("submit",function(event){event.preventDefault();});
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_1.addEventListener("click",function(){
            
            axios.post(`/DelecaoDoUsuario/${atob(id).charCodeAt(0)}`,{
                delecao: $("#Deletar").val(),
                motivos: $("#input-de-texto-motivo-da-deleção").val()
            
            }).then(response => {
                if(response.data.status === 'success')
                {
                    
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
            }).catch(error => {
                if(error.response.data.errors)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: "error",
                        draggable: true
                    });
                }
                if(error.response.data.message)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "error",
                        draggable: true
                    });
                }
            });
        });
        
        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_2.addEventListener("click",function(){
            
            axios.post(`/SuspensaoDoUsuario/${atob(id).charCodeAt(0)}`,{
                suspensao: $("#Suspender").val()
            }).then(response => {
            
                if(response.data.status === 'success')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
                else
                if(response.data.status === 'error')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "error",
                        draggable: true
                    });
                }
            }).catch(error => {
                if(error.response.data.errors)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: "success",
                        draggable: true
                    });
                }
                if(error.response.data.message)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
            });
        });

        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_3.addEventListener("click",function(){
            
            axios.post(`/BloquearOUsuario/${atob(id).charCodeAt(0)}`,{
                acao: 'bloquear',
                motivo: $("#Bloquear").val()
            
            }).then(response => {
                if(response.data.status === 'success')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
                else
                if(response.data.status === 'error')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "error",
                        draggable: true
                    });
                }
            }).catch(error => {
                if(error.response.data.errors)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: "success",
                        draggable: true
                    });
                }
                if(error.response.data.message)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
            });
        });

        Button_Container_Modal_2_Index_Usuarios_Cadastrados_From_Back_Formulario_Submit_4.addEventListener("click",function(){
            
            axios.post(`/AlterarNivelDeAcessos/${atob(id).charCodeAt(0)}`,{
                nivel: $("#Alterar_Nivel_de_Acessos").val()
            }).then(response => {    
            
                if(response.data.status === 'success')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
                else
                if(response.data.status === 'error')
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: response.data.message,
                        icon: "error",
                        draggable: true
                    });
                }
            }).catch(error => {
                if(error.response.data.errors)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: "success",
                        draggable: true
                    });
                }
                if(error.response.data.message)
                {
                    document.body.removeChild(Overlay_Usuarios_Cadastrados_From_Bank);
                    document.body.removeChild(Modal_Molde_Usuarios_Cadastrados_From_Banck);
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "success",
                        draggable: true
                    });
                }
            });
        });
    });
});
// Falta adicionar o Token de @csrt lá do formulario
// Falta Criar o Controller para a o action