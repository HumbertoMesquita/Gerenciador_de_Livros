const express = require('express');
const router = express.Router();
const pool = require('../db/database'); // Importa a conexão com o banco

// Rota para listar todos os livros (GET /livros)
router.get('/livros', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM livro ORDER BY id ASC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar um livro pelo ID (GET /livro/:id)
router.get('/livro/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM livro WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para inserir um novo livro (POST /livro)
router.post('/livro', async (req, res) => {
  const { titulo, autor, npags } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO livro (titulo, autor, npags) VALUES ($1, $2, $3) RETURNING *',
      [titulo, autor, npags]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um livro (PUT /livro/:id)
router.put('/livro/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, npags } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE livro SET titulo = $1, autor = $2, npags = $3 WHERE id = $4 RETURNING *',
      [titulo, autor, npags, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para remover um livro (DELETE /livro/:id)
router.delete('/livro/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM livro WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;