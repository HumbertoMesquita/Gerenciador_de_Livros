// Importa o módulo 'pg'
const { Pool } = require('pg');

// Configurações da conexão com o banco de dados
// É recomendado usar variáveis de ambiente para dados sensíveis
const pool = new Pool({
  user: 'postgres', // Troque pelo seu usuário
  host: 'localhost',
  database: 'gereciadordelivros', // Troque pelo seu banco
  password: 'admin@123', // Troque pela sua senha
  port: 5432,
});

// Exporta a instância do pool para ser usada em outros módulos
module.exports = pool;