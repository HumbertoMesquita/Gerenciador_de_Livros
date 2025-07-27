
# Projeto Gerenciador de Livros


Aplicação web full-stack para gerenciar um catálogo de livros, permitindo cadastrar, listar, editar e excluir livros. O frontend é construído com HTML, CSS e jQuery, com interações dinâmicas via AJAX, e o backend é feito com Node.js/Express conectado a um banco de dados PostgreSQL.

Funcionalidades

Formulário de Cadastro: Interface para adicionar novos livros (título, autor, número de páginas).

Listagem Dinâmica: Exibição da lista de livros que se atualiza em tempo real, sem recarregar a página.

Interação via AJAX: Todas as operações (criar, ler, atualizar, deletar) são feitas de forma assíncrona.


Tecnologias:

Frontend

    HTML5 e CSS3

    JavaScript (ES6+)

    jQuery (para manipulação do DOM e requisições AJAX)

    Webpack (para empacotar os arquivos JavaScript)



Backend

    Node.js

    Express.js

    CORS (para permitir requisições de origens diferentes)

    express.json() (body-parser integrado para tratar requisições JSON)



Banco de Dados

    PostgreSQL

    Driver node-postgres (pg) com uso de parâmetros preparados para segurança.
