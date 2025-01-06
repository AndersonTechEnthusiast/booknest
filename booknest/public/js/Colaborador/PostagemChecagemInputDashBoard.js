$("#Page-2").find("#section-2-dashboard").find("#Container-Postar").find("#segundo-container-para-a-postagem-do-Livro").find(".Container-For-Inputs-DashBoards-Postagem").each(function(index , elemento){
    if($(elemento).find("input").attr("name") === "titulo")
    {
        $(elemento).find("input").css("text-transform","capitalize");
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            $(this).val(mascara);
        });
    }
    if($(elemento).find("input").attr("name") === "autor")
    {
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[0-9]/g,'');
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            mascara = mascara.slice(0,20);
            $(this).val(mascara);
        });
    }
    if($(elemento).find("input").attr("name") === "genero")
    {
        var datalist = $("<datalist>").attr("id","elemento-datalist-genero-sing-in-book-in-bank");
        var generos = [
            'Ficção','Não-Ficção','Poesia','Drama','Conto','Infantojuvenil','Novela Gráfica','Humor','Guias de Viagem','Ensaios',
        ];
        for (let index = 0; index < generos.length; index++) {
            var options = $("<option>").attr("value",generos[index]).text(generos[index]);
            datalist.append(options);
        }
        $(elemento).find("input").attr("list","elemento-datalist-genero-sing-in-book-in-bank");
        $(elemento).append(datalist);
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[0-9]/g,'');
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            $(this).val(mascara);
            if(generos.includes($(this).val()))
            {
                $(this).closest("div").css("border","2px groove white");
                $(this).closest("div").find("label").css("color","white");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"relative",
                        "top":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0"
                    });
                }
            }
            else
            {
                $(this).closest("div").css("border","2px groove red");
                $(this).closest("div").find("label").css("color","red");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"absolute",
                        "top":"-100px",
                        "left":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0",
                        "overflow":"hidden",
                    });
                }
            }
        });
    }
    if($(elemento).find("input").attr("name") === "sinopse")
    {
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            mascara = mascara.slice(0,400);
            $(this).val(mascara);
        });
    }
    if($(elemento).find("input").attr("name") === "data")
    {
        $(elemento).find("input").prop("readonly",true);
        $(elemento).find("input").prop("disabled",true);
        $(elemento).find("input").attr("value",new Date().toLocaleDateString());
    }
    if($(elemento).find("input").attr("name") === "editora")
    {
        var datalistEditora = $("<datalist>").attr("id","datalist-elementos-editora");
        var generosEditora = [
            'Editoras Conhecidas Globalmente',
            'Penguin Random House',
            'HarperCollins',
            'Simon & Schuster',
            'Macmillan',
            'Hachette Livre',
            'Scholastic',
            'Wiley',
            'Oxford University Press',
            'Cambridge University Press',
            'Pearson',
            'Tor Books',
            'Viking',
            'Farrar, Straus and Giroux',
            'Rizzoli',
            'Bloomsbury',
            "St. Martin's Press",
            'Workman Publishing',
            'Editoras Conhecidas no Brasil',
            'Companhia das Letras',
            'Editora Record',
            'Rocco',
            'Intrínseca',
            'Planeta',
            'Suma de Letras',
            'Alfaguara',
            'Editora Sextante',
            'Editora Contexto',
            'Editora Globo',
            'Editora Nova Fronteira',
            'Leya',
            'Editora 34',
            'Editora Objetiva',
            'Livraria Cultura (Grupo Livraria Cultura)',
            'Editora FGV (Fundação Getúlio Vargas)',
            'Panda Books',
            'Editora Unesp',
            'Editora Aleph',
            'Editora Martins Fontes',
            'Editora Autêntica',
            'Editora Zahar',
            'Editora Vozes',
            'Editora Saraiva',
            'Editora Parábola',
            'Editora Planeta',
            'Editora ID',
            'Editoras Independentes (Brasil)',
            'Editora Farol',
            'Editora Pólen',
            'Editora Draco',
            'Editora Arqueiro',
            'Editora Prumo',
            'Editora V&R',
            'Editora Lua de Papel',
            'Editora Fino Traço',
            'Editora Galera Record',
            'Editora 21',
            'Editoras Acadêmicas (Brasil)',
            'Editora UFPR (Universidade Federal do Paraná)',
            'Editora UNESP (Universidade Estadual Paulista)',
            'Editora Unicamp (Universidade Estadual de Campinas)',
            'Editora UnB (Universidade de Brasília)',
            'Editora UFMG (Universidade Federal de Minas Gerais)',
            'Editora FGV',
            'Editora PUC-Rio',
            'Editora Hucitec',
            'Editora da UFRJ (Universidade Federal do Rio de Janeiro)',
            'Editora Fiocruz',
            'Editora Ática',
            'Editora Peirópolis',
            'Little, Brown and Company (uma divisão de Hachette Livre)',
            'Bloomsbury Publishing (famosa pela série Harry Potter)',
            'Penguin Books (parte da Penguin Random House)',
            'Alfred A. Knopf (parte da Penguin Random House)',
            'Knopf Doubleday Publishing Group (subsidiária da Penguin Random House)',
            'HarperOne (divisão da HarperCollins, especializada em espiritualidade e bem-estar)',
            'Henry Holt and Company (uma das editoras do grupo Macmillan)',
            'Reed Elsevier (especializada em publicações acadêmicas e científicas)',
            'Springer (focada em publicações acadêmicas e científicas)',
            'John Wiley & Sons (focada em publicações acadêmicas, científicas e técnicas)',
            'Bertelsmann (conglomerado alemão que possui várias editoras, incluindo a Random House)',
            'Thomson Reuters (focada em publicações profissionais e acadêmicas)',
            'Elsevier (líder em publicações científicas, especialmente nas áreas de medicina e ciências aplicadas)',
            'Cengage Learning (especializada em educação, com livros acadêmicos e de treinamento profissional)',
            'Houghton Mifflin Harcourt (especializada em educação e publicações gerais)',
            'Tyndale House Publishers (publicadora de livros cristãos)',
            'Sourcebooks (focada em livros de não-ficção, autoajuda e ficção contemporânea)',
            'Scribner (uma divisão de Simon & Schuster)',
            'Crown Publishing Group (parte da Random House)',
            'Granta Publications (conhecida por publicações de literatura contemporânea)',
            'The University of Chicago Press (especializada em publicações acadêmicas e científicas)',
            'MIT Press (focada em livros acadêmicos de áreas como filosofia, ciência, tecnologia e arte)',
            'Stanford University Press (publicações acadêmicas)',
            'Cambridge University Press (muito focada em publicações acadêmicas e científicas)',
            'Routledge (especializada em publicações acadêmicas nas áreas de ciências sociais, humanas e educação)',
            'Editoras Conhecidas no Brasil (Adicionais)',
            'Editora Cengage Learning (voltada para livros técnicos e acadêmicos)',
            'Editora DVS (focada em livros didáticos e de literatura brasileira)',
            'Editora Aleph (conhecida por publicar ficção científica)',
            'Editora Quetzal (focada em literatura contemporânea)',
            'Editora Edições Loyola (livros religiosos e filosóficos)',
            'Editora Libertad (publicações independentes e de literatura)',
            'Editora Nemo (focada em graphic novels e quadrinhos)',
            'Editora Giostri (focada em literatura contemporânea)',
            'Editora Faber & Faber (especializada em ficção e livros culturais)',
            'Editora Cosac Naify (focada em arte, cultura e design)',
            'Editora Patuá (independente, focada em literatura contemporânea)',
            'Editora Chiado (portuguesa, com presença no Brasil)',
            'Editoras Independentes (Brasil) (Adicionais)',
            'Editora Mundo Mirim (focada em literatura infantojuvenil)',
            'Editoras Acadêmicas (Brasil) (Adicionais)',
            'Editora UFSC (Universidade Federal de Santa Catarina)',
            'Editora UNB (Universidade de Brasília)',
            'Editora UFMG (Universidade Federal de Minas Gerais)',
            'Editora UFPR (Universidade Federal do Paraná)',
            'Editora UFRJ (Universidade Federal do Rio de Janeiro)',
            'Editora da USP (Universidade de São Paulo)',
            'Editora PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro)',
            'Editora PUC-SP (Pontifícia Universidade Católica de São Paulo)',
            'Editora Martins Fontes (também com publicações acadêmicas)',
            'Editora FGV (Fundação Getúlio Vargas)',
            'Editora Ática (livros educacionais)',
            'Editora Politécnica (livros técnicos e acadêmicos)',
            'Editora Fiocruz (especializada em saúde e ciências da saúde)',    
            'Nenhuma das Alternativas Citadas'  
        ];
        for (let index = 0; index < generosEditora.length; index++) {
            var optionsEditora = $("<option>").attr("value",generosEditora[index]).text(generosEditora[index]);
            datalistEditora.append(optionsEditora);
        }
        $(elemento).append(datalistEditora);
        $(elemento).find("input").attr("list","datalist-elementos-editora");
        $(elemento).find("input").on("input",function(){
            if(generosEditora.includes($(this).val()))
            {
                $(this).closest("div").css("border","2px groove white");
                $(this).closest("div").find("label").css("color","white");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"relative",
                        "top":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0"
                    });
                }
            }
            else
            {
                $(this).closest("div").css("border","2px groove red");
                $(this).closest("div").find("label").css("color","red");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"absolute",
                        "top":"-100px",
                        "left":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0",
                        "overflow":"hidden",
                    });
                }
            }
        });
    }
    if($(elemento).find("input").attr("name") === "numero")
    {
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[a-zA-Z]/g,'');
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            $(this).val(mascara);
        });

    }
    if($(elemento).find("input").attr("name") === "formato")
    {
        $(elemento).find("input").prop("readonly",true);
        $(elemento).find("input").prop("disabled",true);
        $(elemento).find("input").attr("value","Digital");
    }
    if($(elemento).find("input").attr("name") === "ISBN")
    {
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.slice(0,17);
            mascara = mascara.replace(/[a-zA-Z]/g,'');
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            if(mascara.length === 13)
            {
                mascara = mascara.replace(/^(\d{3})(\d{2})(\d{3})(\d{4})(\d{1})/g, '$1-$2-$3-$4-$5');
            }
            else
            if(mascara.length === 10)
            {
                mascara = mascara.replace(/^(\d{2})(\d{3})(\d{4})(\d{1})/g, '$1-$2-$3-$4');
            }
            $(this).val(mascara);
        });
    }
    if($(elemento).find("input").attr("name") === "preco")
    {
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[a-zA-Z]/g,'');
            mascara = mascara.replace(/[0-9]/g,'');
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[+]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            mascara = mascara.slice(0,0);
            $(this).val(mascara);
        });
        $(elemento).remove();
    }
    if($(elemento).find("input").attr("name") === "classificacao")
    {
        var datalistClassificacao = $("<datalist>").attr("id","elemento-datalist-classificacao");
        var optionsClassificacao = [
            '+10',
            '+12',
            '+14',
            '+16',
            '+18',
            'Livre'
        ];
        for (let index = 0; index < optionsClassificacao.length; index++) {
            var options = $("<option>").attr("value",optionsClassificacao[index]).text(optionsClassificacao[index]);
            datalistClassificacao.append(options);
        }
        $(elemento).append(datalistClassificacao);
        $(elemento).find("input").attr("list","elemento-datalist-classificacao");
        $(elemento).find("input").on("input",function(){
            var mascara = $(this).val();
            mascara = mascara.replace(/[*]/g,'');
            mascara = mascara.replace(/[-]/g,'');
            mascara = mascara.replace(/[_]/g,'');
            mascara = mascara.replace(/[(]/g,'');
            mascara = mascara.replace(/[)]/g,'');
            mascara = mascara.replace(/[\[\]]/g,'');
            mascara = mascara.replace(/[=]/g,'');
            mascara = mascara.replace(/[§]/g,'');
            mascara = mascara.replace(/[º]/g,'');
            mascara = mascara.replace(/[{]/g,'');
            mascara = mascara.replace(/[}]/g,'');
            mascara = mascara.replace(/[:]/g,'');
            mascara = mascara.replace(/[;]/g,'');
            mascara = mascara.replace(/[ª]/g,'');
            mascara = mascara.replace(/[&]/g,'');
            mascara = mascara.replace(/[¨]/g,'');
            mascara = mascara.replace(/[¬]/g,'');
            mascara = mascara.replace(/[%]/g,'');
            mascara = mascara.replace(/[¢]/g,'');
            mascara = mascara.replace(/[$]/g,'');
            mascara = mascara.replace(/[£]/g,'');
            mascara = mascara.replace(/[³]/g,'');
            mascara = mascara.replace(/[#]/g,'');
            mascara = mascara.replace(/[²]/g,'');
            mascara = mascara.replace(/[@]/g,'');
            mascara = mascara.replace(/[¹]/g,'');
            mascara = mascara.replace(/[!]/g,'');
            mascara = mascara.replace(/[""]/g,'');
            mascara = mascara.replace(/['']/g,'');
            mascara = mascara.replace(/[<]/g,'');
            mascara = mascara.replace(/[>]/g,'');
            mascara = mascara.replace(/[--]/g,'');
            mascara = mascara.replace(/[|]/g,'');
            $(this).val(mascara);
            if(optionsClassificacao.includes($(this).val()))
            {
                $(this).closest("div").css("border","2px groove white");
                $(this).closest("div").find("label").css("color","white");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"relative",
                        "top":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0"
                    });
                }
            }
            else
            {
                $(this).closest("div").css("border","2px groove red");
                $(this).closest("div").find("label").css("color","red");
                if($(this).closest("div").closest("div").closest("form").find("button").attr("type") === "submit")
                {
                    $(this).closest("div").closest("div").closest("form").find("button").css({
                        "position":"absolute",
                        "top":"-100px",
                        "left":"0",
                        "transition":"1s"
                    });
                    $(this).closest("div").closest("div").closest("form").find("button").closest("div").css({
                        "position":"relative",
                        "top":"0",
                        "left":"0",
                        "overflow":"hidden",
                    });
                }
            }
        });
    }
});