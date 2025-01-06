# BookNest

**BookNest** é uma plataforma interativa e intuitiva para postagem de livros, artigos e disseminação de conhecimento. Este projeto foi desenvolvido com o objetivo de criar um ambiente de fácil utilização para escritores e leitores interagirem de forma dinâmica. O **BookNest** foi projetado para ser eficiente, funcional e fácil de navegar.

## 🧑‍💻 Tecnologias Usadas

O projeto **BookNest** utiliza uma combinação de tecnologias modernas para garantir um desempenho otimizado e uma experiência de usuário agradável.

- **Frontend**:
  - HTML5
  - CSS3 (Estilos e Layouts responsivos)
  - JavaScript
  - jQuery
  - AJAX, AXIOS e Fetch (para requisições assíncronas)
  - PDFPreview.js
  
- **Backend**:
  - PHP
  - Laravel (Framework PHP)

- **Banco de Dados**:
  - MySQL

- **Outras Ferramentas**:
  - Composer (Gerenciamento de dependências PHP)
  - NPM/Yarn (Gerenciamento de pacotes e dependências JavaScript)
  - Git (Controle de versão)

## ⚙️ Funcionalidades

### Para Usuários
- **Ler Livros em PDF**: Usuários podem ler livros em formato PDF diretamente na plataforma utilizando o **PDFPreview.js**.
- **Curtir Livros**: Os usuários podem curtir livros postados por outros usuários.
- **Hypear Livros**: Os usuários podem "hipar" livros, destacando suas postagens favoritas.
- **Comentar Livros**: Usuários podem interagir com as postagens comentando sobre os livros.
- **Denunciar Postagens**: Possibilidade de denunciar postagens inapropriadas ou que violem as regras da plataforma.
- **Salvar Postagens**: Usuários podem salvar livros para ler depois.
- **Ver Perfil do Contribuinte**: Os usuários podem visualizar o perfil do autor (contribuinte) de um livro.
- **Ver Descrição do Contribuinte**: Acesso à descrição e informações do contribuinte.
- **Solicitar Permissão ao Administrador**: Usuários podem solicitar ao administrador permissão para se tornarem contribuidores.
- **Pesquisar Livros**: Usuários podem pesquisar Livros Desejados Através de seus Nomes ou Através do Escritores do Livros.


### Para Contribuintes
- **Postar Livros**: Contribuidores podem adicionar novos livros à plataforma.
- **Editar Livros**: Capacidade de editar livros postados.
- **Excluir Livros**: Contribuidores podem excluir livros postados.
- **Criar Descrição Própria**: Contribuidores podem criar e personalizar a descrição de seu perfil.
- **Trocar para Usuários**: Contribuidores podem reverter sua função para usuário.
- **Manipular Suas Postagens**: Controle total sobre suas postagens.
- **Ver Suas Postagens**: Acesso para visualizar todas as postagens feitas.
- **Ver Postagens Antigas**: Contribuidores podem acessar e visualizar livros antigos que foram postados.
- **Receber Notificações**: Contribuintes recebem notificações sobre deleção ou edição de postagens feitas pelo administrador.

### Para Administradores
- **Excluir Postagens**: Administradores podem excluir postagens de livros se necessário.
- **Editar Postagens**: Administradores podem editar postagens de livros.
- **Enviar Notificações**: Administradores podem enviar notificações aos usuários e contribuintes.
- **Bloquear Usuários**: Administradores têm a capacidade de bloquear usuários.
- **Bloquear Contribuintes**: Administradores podem bloquear contribuintes da plataforma.
- **Suspender Usuários**: Administradores podem suspender temporariamente usuários.
- **Suspender Contribuintes**: Administradores podem suspender temporariamente contribuintes.
- **Deletar Usuários**: Administradores podem deletar usuários da plataforma.
- **Deletar Contribuintes**: Administradores têm a permissão para deletar contribuintes da plataforma.
- **Ver Perfil dos Contribuintes**: Administradores podem visualizar todos os perfis de contribuintes.
- **Ver Comentários dos Usuários**: Administradores têm acesso aos comentários feitos pelos usuários nas postagens.
- **Ver Postagens**: Administradores podem visualizar todas as postagens feitas na plataforma.
- **Analisar o Sistema**: Administradores têm acesso completo para monitorar e analisar o funcionamento do sistema.
- **Controle das Ações do Administrador**: Administradores podem revisar e controlar suas próprias ações dentro do sistema.


## 📌 Como Executar o Projeto Localmente

Para rodar o **BookNest** em seu ambiente local, siga os passos abaixo:

### 1. **Clone o Repositório**
```bash
git clone https://github.com/AndersonTechEnthusiast/booknest.git
```
### 2. **Instale as Dependências do PHP**

```bash
cd booknest
composer install
npm install
```
- **Para as dependências do Node.js (Frontend):**
```bash
npm install
```

### 3. **Configuração do Ambiente:**
-**Crie um arquivo .env a partir do .env.example:**
```bash
cp .env.example .env
```
- **No arquivo .env, configure o banco de dados e outras variáveis de ambiente, como a chave do aplicativo Laravel:**
```bash
php artisan key:generate
```
### 4. **Rodando o Servidor Localmente:**
- **Após a configuração, você pode rodar o servidor de desenvolvimento do Laravel com o comando:**
```bash
php artisan serve
```
- **Acesse a aplicação no navegador em http://localhost:8000.**
## 🚀 Implantação
- O BookNest pode ser facilmente implantado em servidores que suportam PHP, como Apache ou Nginx. Para implantar em um servidor remoto, basta seguir as instruções de configuração padrão do Laravel.
## 💡 Contribuição
- Contribuições são bem-vindas! Se você encontrar algum bug ou quiser sugerir novas funcionalidades, fique à vontade para abrir um issue ou enviar um pull request.
- Para contribuir:
- **Faça um fork deste repositório.**
- **Crie uma branch para sua nova funcionalidade** ```bash (git checkout -b feature-nova). ```
- **Faça commit das suas alterações** ```bash (git commit -m 'Adicionar nova funcionalidade'). ```
- **Envie para o repositório original** ```bash (git push origin feature-nova). ```
- **Abra um pull request.**
## 📄 Licença
- Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
