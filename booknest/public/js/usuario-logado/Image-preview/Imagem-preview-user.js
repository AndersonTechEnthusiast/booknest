// Criando Perfil PopUp do Usuario Pelo Js//
var Json_Dados = decodeURIComponent(escape(atob(window.user[2]))).split("+-");
var token = document.getElementById("token").textContent;
document.getElementById("Perfil-link").addEventListener("click",function(event){
    event.preventDefault;
    // criando containers com Js 
    var PopUp_Index = document.createElement("div");
    var PopUp_SubIndex_first = document.createElement("div");
    var PopUp_SubIndex_secound = document.createElement("div");
    var OverLay_Index_Perfil = document.createElement("div");
    var Title_PopUp_Index = document.createElement("div");
    var title_tag = document.createElement("p");
    var Containers_Foto = document.createElement("div");
    var Containers_Dados = document.createElement("div");
    var Divisoria_Containers = document.createElement("div");
    var Imagem_Foto = document.createElement("img");
    var Label_Imagem = document.createElement("label");
    var Form_Foto = document.createElement("form");
    var input_hidden_img = document.createElement("input");
    var input_file_img = document.createElement("input");
    var input_file_img_submit = document.createElement("input");
    var form_logout = document.createElement("form");
    // criando um input hidden que será adicionado no Formulario de Logout (sair)
    var input_hidden_logout = document.createElement("input");
    var input_logout = document.createElement("input");
    // adicionando classes com Js
    PopUp_Index.classList.add("PopUp_Perfil_Index");
    PopUp_SubIndex_first.classList.add("PopUp_Perfil_SubIndex_First");
    PopUp_SubIndex_secound.classList.add("PopUp_Perfil_SubIndex_Secound");
    OverLay_Index_Perfil.classList.add("OverLay_Perfil");
    Title_PopUp_Index.classList.add("Title_PopUp_Index");
    title_tag.classList.add("title_Perfil_Index");
    Containers_Foto.classList.add("Foto-de-Perfil");
    Containers_Dados.classList.add("Dados-do-Usuario");
    Divisoria_Containers.classList.add("Divisoria_PopUp_Perfil_Index");
    Imagem_Foto.classList.add("Imagem-file");
    Imagem_Foto.id = "Imagem";
    Imagem_Foto.src = this.querySelector("label").querySelector("img").src;
    Label_Imagem.classList.add("container_Imagem_referencial");
    Form_Foto.classList.add("formulario-da-foto-de-perfil");
    Form_Foto.method = "POST";
    Form_Foto.action = decodeURIComponent(escape(atob(window.user[1])));
    Form_Foto.enctype = "multipart/form-data";
    input_file_img.classList.add("input-imagem");
    input_file_img.type = "file";
    input_file_img.id = "file";
    input_file_img.name = "imagem-perfil";
    input_file_img.required = true;
    Label_Imagem.htmlFor = "file";
    input_file_img_submit.type = "submit";
    input_file_img_submit.value = "Adicionar foto de Perfil";
    input_file_img_submit.classList.add("input-imagem-submit");
    form_logout.classList.add("form-logout-user-logado");
    input_logout.classList.add("input-logout-user-logado");
    form_logout.method = "POST"; 
    form_logout.action = decodeURIComponent(escape(atob(window.user[0])));
    // no input hidden adicionando o tipo do input que é o hidden
    input_hidden_logout.type = "hidden";
    input_hidden_img.type = "hidden";
    // no input hidden o nome será _token
    input_hidden_logout.name = "_token";
    input_hidden_img.name = "_token";
    // no input hidden no value adicione o csrf_token() , que está no content do elemento html <meta id="token" content="{{csrf_token()}}"> , pege o content com getAttribute()
    input_hidden_logout.value = document.getElementById("token").getAttribute('content');
    input_logout.type = "submit";
    input_logout.value = "Sair";
    input_hidden_img.value = document.getElementById("token").getAttribute('content');
    // Adicionando com appendChild com Js
    PopUp_Index.appendChild(PopUp_SubIndex_first);
    PopUp_SubIndex_first.appendChild(PopUp_SubIndex_secound);
    PopUp_SubIndex_secound.appendChild(Title_PopUp_Index);
    Title_PopUp_Index.appendChild(title_tag);
    PopUp_SubIndex_secound.appendChild(Containers_Foto);
    PopUp_SubIndex_secound.appendChild(Divisoria_Containers);
    PopUp_SubIndex_secound.appendChild(Containers_Dados);
    Label_Imagem.appendChild(Imagem_Foto);
    Containers_Foto.appendChild(Label_Imagem);
    Form_Foto.appendChild(input_hidden_img);
    Form_Foto.appendChild(input_file_img);
    Form_Foto.appendChild(input_file_img_submit);
    Containers_Foto.appendChild(Form_Foto);
    // adicione o hidden aqui no formulario logout (sair)
    form_logout.appendChild(input_hidden_logout);
    form_logout.appendChild(input_logout);
    // Estilizando Elementos
    OverLay_Index_Perfil.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    PopUp_Index.style.cssText = "position: fixed; top: 50%; left: 50%; width: 90%; height: 90%; transform: translate(-50% , -50%); display: flex; align-items: center; justify-content: center; background: #121212; border-radius: 10px; z-index: 2;";
    PopUp_SubIndex_first.style.cssText = "width: 98%; height: 95%; border-radius: 10px; background: white; display: flex; align-items: center; justify-content: center;";
    PopUp_SubIndex_secound.style.cssText = "position: relative; top: 0; left: 0; width: 99%; height: 98%; border-radius: 10px; background: #121212; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;";
    Title_PopUp_Index.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; position: absolute; top: -30px; left: 0; background: transparent; font-family: 'Montserrat'; text-transform: uppercase;";
    Containers_Foto.style.cssText = "width: 50%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-direction: column; max-height: 90%; margin: 20px auto;";
    input_file_img.style.cssText = "display: none";
    Imagem_Foto.style.cssText = "border-radius: 50%; width: 360px; height: 360px;";
    input_file_img_submit.style.cssText = "padding: 10px; border: 2px groove white; border-radius: 10px; background: transparent; color: white; font-family: 'Montserrat'; cursor: pointer;";
    Containers_Dados.style.cssText = "width: 50%; height: 100%; max-height: 90%; background: transparent;display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column; margin: 20px auto;";
    Divisoria_Containers.style.cssText = "width: 2px; height: 90%; background: white; border-radius: 10px;";
    Label_Imagem.style.cursor = "pointer";
    input_file_img_submit.addEventListener('mouseenter',function(){
        this.style.cssText = "padding: 10px; border: none; border-radius: 10px; background: white; color: #121212; font-family: 'Montserrat'; transition: 1s; cursor: pointer;";
    });
    input_file_img_submit.addEventListener('mouseleave',function(){
        this.style.cssText = "padding: 10px; border: 2px groove white; border-radius: 10px; background: transparent; color: white; font-family: 'Montserrat'; transition: 1s; cursor: pointer;";
    });
    input_logout.style.cssText = "display: flex; align-items: center; justify-content: center; width: 200px; height: 50px; border: 2px groove red; background: transparent; color: red; font-family: 'Montserrat'; border-radius: 10px; transition: 1s; font-size: 20px; cursor: pointer;";
    input_logout.addEventListener("mouseenter",function(){
        this.style.cssText = "transition: 1s; display: flex; align-items: center; justify-content: center; width: 200px; height: 50px; background: red; color: white; border: none; font-family: 'Montserrat'; border-radius: 10px; font-size: 20px; cursor: pointer;";
    });
    input_logout.addEventListener("mouseleave",function(){
        this.style.cssText = "display: flex; align-items: center; justify-content: center; width: 200px; height: 50px; border: 2px groove red; background: transparent; color: red; font-family: 'Montserrat'; border-radius: 10px; transition: 1s; font-size: 20px; cursor: pointer;"
    });
    // pegando o primeiro termo da array JSON.parse
    title_tag.style.cssText = "color: white; background: #121212; padding-right: 5px; padding-left: 5px;";
    title_tag.textContent = decodeURIComponent(escape(atob(Json_Dados[1])));
    // Containers de Divisão do PopUp (Foto do Usuario | Dados do Usuario)
    var limit_show_dados = 5;
    for (let index = 1; index <= limit_show_dados; index++) {
        var containers_show_dados_perfil_user = document.createElement("div");
        var inputs_show_dados_perfil_user = document.createElement("input");
        var icones = document.createElement("i");
        icones.classList.add("fi");
        icones.classList.add("fi-sr-pencil");
        var Forms = document.createElement("form");
        var label_submit = document.createElement("label");
        var inputs_submits = document.createElement("input");
        var hiddens_inputs = document.createElement("input");
        Forms.action = "{{route('editar-dado',"+decodeURIComponent(escape(atob(Json_Dados[0])))+")}}";
        Forms.id = "formulario-"+index;
        Forms.method = "POST";
        hiddens_inputs.type = "hidden";
        hiddens_inputs.id = "hidden-"+index;
        hiddens_inputs.classList.add("inputs-hiddens-perfil-dados-edit");
        inputs_submits.id = "Id_Submit_"+index;
        inputs_submits.type = "submit";
        inputs_submits.style.display = "none";
        label_submit.htmlFor = "Id_Submit_"+index;
        label_submit.appendChild(icones);
        Forms.appendChild(hiddens_inputs);
        Forms.appendChild(label_submit);
        Forms.appendChild(inputs_submits);
        Forms.style.cssText = "position: absolute; top: 10px; left: 90%;";
        icones.style.cssText = "font-size: 25px; color: white; cursor: pointer;";
        containers_show_dados_perfil_user.classList.add("containers_show_dados_perfil_user"+index);
        containers_show_dados_perfil_user.appendChild(inputs_show_dados_perfil_user);
        containers_show_dados_perfil_user.appendChild(Forms);
        inputs_show_dados_perfil_user.value = decodeURIComponent(escape(atob(Json_Dados[index])));
        inputs_show_dados_perfil_user.disabled = true;
        inputs_show_dados_perfil_user.style.cssText = "width: 100%; padding: 10px; background: transparent; border: none; outline: none; text-align: center; font-family: 'Montserrat'; font-size: 20px; color: white;";
        Containers_Dados.appendChild(containers_show_dados_perfil_user);
        containers_show_dados_perfil_user.style.cssText = "width: 90%; border: 2px groove white; border-radius: 10px; position: relative; top: 0; left: 0;";
    }
    
    // adicionando o elemento criado em um laço for , fora do laço ele aplicará separadamente no ultimo elememto
    containers_show_dados_perfil_user.querySelector("input").type = "password"; 
    // adicionando o logout
    Containers_Dados.appendChild(form_logout);   
    // adicionando no documento
    document.body.appendChild(OverLay_Index_Perfil);
    document.body.appendChild(PopUp_Index);
    input_file_img.addEventListener("input",function(event){
        Imagem_Foto.src = URL.createObjectURL(event.target.files[0]);
    });
    OverLay_Index_Perfil.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(PopUp_Index);
    });
});
