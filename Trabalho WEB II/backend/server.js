const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const livroRoutes = require('./routes/livros'); // Importa as rotas

const app = express();
const PORT = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta 'public' do frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Utiliza o módulo de rotas para todas as requisições
app.use('/', livroRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});