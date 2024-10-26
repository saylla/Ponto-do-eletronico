const express = require('express');
const app = express();
let carrinho = []; // Aqui você pode ter uma lista ou armazenar em uma base de dados.

app.get('/api/carrinho', (req, res) => {
  // Aqui você pode consultar o banco de dados para pegar os itens do carrinho do usuário
  res.json({ items: carrinho });
});

// Inicialize o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
