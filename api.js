app.post('/api/carrinho', (req, res) => {
    const item = req.body; // Obter o item a ser adicionado ao carrinho
    carrinho.push(item); // Adicionar o item ao array (ou banco de dados)
    res.json({ message: 'Item adicionado ao carrinho com sucesso!' });
  });
  