
# Projeto Gerenciador de Livros


Está aplicação web full-stack é para gerenciar um catálogo de livros, permitindo cadastrar, listar, editar e excluir livros. O frontend é construído com HTML, CSS e jQuery, com interações dinâmicas via AJAX, e o backend é feito com Node.js/Express conectado a um banco de dados PostgreSQL.

Funcionalidades:

Formulário de Cadastro: Interface para adicionar novos livros (título, autor, número de páginas).

Listagem Dinâmica: Exibição da lista de livros que se atualiza em tempo real, sem recarregar a página.

Interação via AJAX: Todas as operações (criar, ler, atualizar, deletar) são feitas de forma assíncrona.



Frontend:

    HTML5 e CSS3

    JavaScript (ES6+)

    jQuery (para manipulação do DOM e requisições AJAX)

    Webpack (para empacotar os arquivos JavaScript)



Backend:

    Node.js

    Express.js

    CORS (para permitir requisições de origens diferentes)

    express.json() (body-parser integrado para tratar requisições JSON)



Banco de Dados:

    PostgreSQL

    Driver node-postgres (pg) com uso de parâmetros preparados para segurança.
    
    
Link do vídeo demostrativo


	https://www.youtube.com/watch?v=vtr875hXReA


Como Rodar o Projeto Localmente

Pré-requisitos instalados:

    Node.js (v18.x ou superior)

    NPM

    PostgreSQL

Passos:

1 - Clonar o Repositório:
  
	git clone https://github.com/HumbertoMesquita/Gerenciador_de_Livros

Instalar Dependências: Execute o comando abaixo nas pastas frontend e backend.

	# No backend
	npm install

	# No frontend
	npm install
	

Configurar o Banco de Dados:

a. Crie o banco de dados no psql:

	sudo -u postgres psql
	CREATE DATABASE nome_do_banco;
	

b. Execute o script para criar a tabela livro:

	psql -h localhost -U postgres -d nome_do_banco -f ./backend/db/db.sql

Configurar Variáveis de Ambiente:

No arquivo backend/db/database.js  modifique as seguintes configurações, substituindo pela sua senha do PostgreSQL:

	PORT=3000
	DB_HOST=nome_do_usuario
	DB_PORT=5432
	DB_USER=postgres
	DB_PASSWORD=sua_senha_aqui
	DB_DATABASE=nome_do_banco

Executar a Aplicação: (Precisará de dois terminais)

Terminal 1 (Frontend):

	cd frontend
	npm run build


Terminal 2 (Backend):

    cd backend
    npm start

A API estará disponível em http://localhost:3000, abra no seu navegador.


