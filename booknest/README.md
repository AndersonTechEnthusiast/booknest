# BookNest

BookNest é uma plataforma online intuitiva e interativa para postagem de livros, permitindo a disseminação de conhecimento de forma acessível e eficiente. Este projeto foi criado com o objetivo de conectar leitores e escritores, promovendo o aprendizado e o compartilhamento de ideias.

## Funcionalidades Principais

- Postagem de livros e materiais educativos.
- Interface amigável e fácil de usar.
- Organização intuitiva por categorias e temas.
- Interação com outros usuários por meio de comentários e feedback.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5, CSS3.
  - JavaScript (puro) e jQuery.
  - Requisições AJAX, Axios e Fetch para comunicações assíncronas.
  
- **Backend**:
  - PHP com Laravel (framework robusto e escalável).

- **Banco de Dados**:
  - MySQL para armazenamento dos dados.

## Como Executar o Projeto

1. **Clone o repositório**:
git clone https://github.com/AndersonTechEnthusiast/booknest.git


2. **Instale as dependências**:
composer install npm install


3. **Configure o arquivo `.env`**:
- Defina as credenciais do banco de dados.
- Configure outras variáveis de ambiente conforme necessário.

4. **Execute as migrações**:
php artisan migrate


5. **Inicie o servidor local**:
php artisan serve


6. Acesse o projeto em: [http://localhost:8000](http://localhost:8000)

## Estrutura do Projeto

- `/resources`: Arquivos de frontend, como views e componentes.
- `/app`: Contém os controladores, modelos e serviços do Laravel.
- `/database`: Migrações e seeders para configurar o banco de dados.

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga estes passos:

1. Faça um fork do projeto.
2. Crie um branch com suas alterações:
git checkout -b minha-nova-feature

3. Envie suas alterações:
git push origin minha-nova-feature

4. Abra um Pull Request.

## Autor

Criado por **Anderson Pires** - [GitHub](https://github.com/AndersonTechEnthusiast)

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
