document.querySelectorAll(".links-reedirect").forEach(function(links){
    links.addEventListener('click',function(event){
        event.preventDefault();
        // Criação de Elementos
        var Overlay_Link_Inicial_tabela_de_usuarios_sumario = document.createElement("div");
        var Modal_Link_Inicial_tabela_de_usuarios_sumario = document.createElement("div");
        var Middle_Modal_tabela_de_usuarios_sumario = document.createElement("div");
        var Modal_Index_sumario = document.createElement("div");
        var Title_Modal_Index_Sumario = document.createElement("div");
        var Container_Modal_Index_Sumario_1 = document.createElement("div");
        var Container_Modal_Index_Sumario_2 = document.createElement("div");
        var Container_Modal_Index_Sumario_3 = document.createElement("div");
        var Container_Modal_Index_Sumario_Title_2 = document.createElement("div");
        var Container_Modal_Index_Sumario_Imagem_2 = document.createElement("img");
        var Container_Modal_Index_Sumario_Title_3 = document.createElement("div");
        var Container_Modal_Index_Sumario_Middle_Number = document.createElement("div");
        var Container_Modal_Index_Sumario_Rodape_2 = document.createElement("div");
        var Container_Modal_Index_Sumario_Rodape_3 = document.createElement("div");
        var Container_Botton_Close_Container_Modal_Index_sumario = document.createElement("div");
        var Link_Botton_Close_Container_Modal_Index_sumario = document.createElement("a");
        var Button_Close_Container_Modal_Index_sumario = document.createElement("button");
        // Adicionando Classes
        Overlay_Link_Inicial_tabela_de_usuarios_sumario.classList.add("Overlay-Link-Inicial-Tabela-De-Usuarios-Sumario");
        Modal_Link_Inicial_tabela_de_usuarios_sumario.classList.add("Modal-Link-Inicial-Tabela-De-Usuarios-Sumario");
        Middle_Modal_tabela_de_usuarios_sumario.classList.add("Middle-Modal-Tabela-De-Usuarios-Sumario");
        Modal_Index_sumario.classList.add("Modal-Index-Sumario");
        Title_Modal_Index_Sumario.classList.add("Title-Modal-Index-Sumario");
        Container_Modal_Index_Sumario_1.classList.add("Container-Modal-Index-Sumario-1");
        Container_Modal_Index_Sumario_2.classList.add("Container-Modal-Index-Sumario-2");
        Container_Modal_Index_Sumario_3.classList.add("Container-Modal-Index-Sumario-3");
        Container_Modal_Index_Sumario_Title_2.classList.add("Container-Modal-Index-Sumario-Title-2");
        Container_Modal_Index_Sumario_Imagem_2.classList.add("Container-Modal-Index-Sumario-Imagem-2");
        Container_Modal_Index_Sumario_Title_3.classList.add("Container-Modal-Index-Sumario-Title-3");
        Container_Modal_Index_Sumario_Middle_Number.classList.add("Container-Modal-Index-Sumario-Middle-Number");
        Container_Modal_Index_Sumario_Rodape_2.classList.add("Container-Modal-Index-Sumario-Rodape-2");
        Container_Modal_Index_Sumario_Rodape_3.classList.add("Container-Modal-Index-Sumario-Rodape-3");
        Container_Botton_Close_Container_Modal_Index_sumario.classList.add("Container-Botton-Close-Container-Modal-Index-Sumario");
        Link_Botton_Close_Container_Modal_Index_sumario.classList.add("Link-Button-Close-Container-Modal-Index-Sumario");
        Button_Close_Container_Modal_Index_sumario.classList.add("Button-Close-Container-Modal-Index-Sumario");
        // Adicionando Estrutura
        Modal_Link_Inicial_tabela_de_usuarios_sumario.appendChild(Middle_Modal_tabela_de_usuarios_sumario);
        Middle_Modal_tabela_de_usuarios_sumario.appendChild(Modal_Index_sumario);
        Modal_Index_sumario.appendChild(Title_Modal_Index_Sumario);
        Modal_Index_sumario.appendChild(Container_Modal_Index_Sumario_1);
        Modal_Index_sumario.appendChild(Container_Modal_Index_Sumario_2);
        Modal_Index_sumario.appendChild(Container_Modal_Index_Sumario_3);
        Container_Modal_Index_Sumario_1.appendChild(Container_Modal_Index_Sumario_2);
        Container_Modal_Index_Sumario_1.appendChild(Container_Modal_Index_Sumario_3);
        Container_Modal_Index_Sumario_2.appendChild(Container_Modal_Index_Sumario_Title_2);
        Container_Modal_Index_Sumario_2.appendChild(Container_Modal_Index_Sumario_Imagem_2);
        Container_Modal_Index_Sumario_2.appendChild(Container_Modal_Index_Sumario_Rodape_2);
        Container_Modal_Index_Sumario_3.appendChild(Container_Modal_Index_Sumario_Title_3);
        Container_Modal_Index_Sumario_3.appendChild(Container_Modal_Index_Sumario_Middle_Number);
        Container_Modal_Index_Sumario_3.appendChild(Container_Modal_Index_Sumario_Rodape_3);
        Container_Botton_Close_Container_Modal_Index_sumario.appendChild(Link_Botton_Close_Container_Modal_Index_sumario);
        Link_Botton_Close_Container_Modal_Index_sumario.appendChild(Button_Close_Container_Modal_Index_sumario);
        Modal_Index_sumario.appendChild(Container_Botton_Close_Container_Modal_Index_sumario);
        // Adicionando Estilização
        Overlay_Link_Inicial_tabela_de_usuarios_sumario.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;";
        Modal_Link_Inicial_tabela_de_usuarios_sumario.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 1200px; height: 600px; border-radius: 20px; background: #121212; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; z-index: 11;";
        Middle_Modal_tabela_de_usuarios_sumario.style.cssText = "width: 98%; height: 98%; background: white; display: flex; align-items: center; justify-content: center; border-radius: 20px;";
        Modal_Index_sumario.style.cssText = "width: 98%; height: 98%; background: #121212; border-radius: 20px; display: flex; align-items: center; justify-content: space-eventy; flex-direction: column;";
        Title_Modal_Index_Sumario.style.cssText = "width: 100%; max-width: 90%; border: 2px groove white; padding: 10px; text-align: center; margin: 20px auto;";
        Title_Modal_Index_Sumario.textContent = this.closest(".options-reedict").querySelector(".links-reedirect").textContent;
        Container_Modal_Index_Sumario_1.style.cssText = "width: 100%; max-width: 90%; height: 70%; display: flex; align-items: center; justify-content: space-between; margin: 0 auto;";
        Container_Modal_Index_Sumario_2.style.cssText = "position: relative; top: 0; left: 0; width: 50%; height: 100%; border: 2px groove white; display: flex; align-items: center; justify-content: space-eventy; flex-direction: column; margin-right: 5px;";
        Container_Modal_Index_Sumario_Imagem_2.style.cssText = "width:"
        Container_Modal_Index_Sumario_3.style.cssText = "position: relative; top: 0; left: 0; width: 50%; height: 100%; border: 2px groove white; display: flex; align-items: center; justify-content: space-eventy; flex-direction: column; margin-left: 5px;";
        Container_Modal_Index_Sumario_Title_2.style.cssText = "position: absolute; top: 0; width: 100%; max-width: 90%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; text-align: center; height: 50px; display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: nowrap; margin: 0 auto;";
        Container_Modal_Index_Sumario_Imagem_2.style.cssText = "margin: auto;";
        Container_Modal_Index_Sumario_Rodape_2.style.cssText = "position: absolute; bottom: 0; width: 100%; max-width: 90%; border-top: 2px groove white; border-right: none; border-left: none; border-bottom: none; height: 50px; display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: nowrap; margin: 0 auto;";
        Container_Modal_Index_Sumario_Title_3.style.cssText = "position: absolute; top: 0; width: 100%; max-width: 90%; border-top: none; border-right: none; border-left: none; border-bottom: 2px groove white; text-align: center; height: 50px; display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: nowrap; margin: 0 auto;";
        Container_Modal_Index_Sumario_Middle_Number.style.cssText = "font-size: 200px; margin: auto;";
        Container_Modal_Index_Sumario_Rodape_3.style.cssText = "position: absolute; bottom: 0; width: 100%; max-width: 90%; border-top: 2px groove white; border-right: none; border-left: none; border-bottom: none; height: 50px; display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: nowrap; margin: 0 auto;";
        Container_Modal_Index_Sumario_Rodape_3.textContent = "Usuários";
        Container_Modal_Index_Sumario_Title_2.textContent = this.closest(".options-reedict").querySelector(".links-reedirect").textContent;
        Container_Modal_Index_Sumario_Title_3.textContent = "Usuarios " + this.closest(".options-reedict").querySelector(".links-reedirect").id;
        Container_Modal_Index_Sumario_Imagem_2.src = "img/Admin/"+this.closest(".options-reedict").id+"-Adm.png";
        Container_Modal_Index_Sumario_Middle_Number.textContent = this.closest(".options-reedict").getAttribute('aria-label');
        Container_Botton_Close_Container_Modal_Index_sumario.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: nowrap; margin: auto;";
        Link_Botton_Close_Container_Modal_Index_sumario.style.cssText = "text-decoration: none; width: 70%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap;";
        Button_Close_Container_Modal_Index_sumario.style.cssText = "cursor: pointer; width: 30%; height: 50px;  background: transparent; color: red; border: 2px groove red; border-radius: 10px; font-size: 20px; transition: 1s;";
        Button_Close_Container_Modal_Index_sumario.textContent = "Fechar";
        Button_Close_Container_Modal_Index_sumario.addEventListener("mouseenter",function(){
            this.style.cssText = "transition: 1s; cursor: pointer; width: 30%; height: 50px;  background: red; color: white; border: none; border-radius: 10px; font-size: 20px;";
        });
        Button_Close_Container_Modal_Index_sumario.addEventListener("mouseleave", function(){
            this.style.cssText = "transition: 1s; cursor: pointer; width: 30%; height: 50px;  background: transparent; color: red; border: 2px groove red; border-radius: 10px; font-size: 20px;"; 
        });
        // Adicionando no Documento HTML
        document.body.appendChild(Overlay_Link_Inicial_tabela_de_usuarios_sumario);
        document.body.appendChild(Modal_Link_Inicial_tabela_de_usuarios_sumario);
        // Removendo do Documento HTML
        Overlay_Link_Inicial_tabela_de_usuarios_sumario.addEventListener("click",function(){
            document.body.removeChild(Overlay_Link_Inicial_tabela_de_usuarios_sumario);
            document.body.removeChild(Modal_Link_Inicial_tabela_de_usuarios_sumario);
        });
        Button_Close_Container_Modal_Index_sumario.addEventListener("click",function(){
            document.body.removeChild(Overlay_Link_Inicial_tabela_de_usuarios_sumario);
            document.body.removeChild(Modal_Link_Inicial_tabela_de_usuarios_sumario);
        });
    });
});