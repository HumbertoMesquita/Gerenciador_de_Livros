const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const livroRoutes = require('./routes/livros');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/', livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});