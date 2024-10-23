const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'loja_eletronicos'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rotas
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao fazer login.');
            return;
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Login realizado com sucesso!' });
        } else {
            res.status(401).json({ message: 'Email ou senha incorretos.' });
        }
    });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao cadastrar usuário.');
            return;
        }
        res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    });
});

app.post('/order', (req, res) => {
    const { userId, productId, quantity } = req.body;
    db.query('INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)', [userId, productId, quantity], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao processar pedido.');
            return;
        }
        res.status(201).json({ message: 'Pedido realizado com sucesso!' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
const mysql = require('mysql2');

// Configuração da conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Seu usuário MySQL
  password: 'sua_senha', // Sua senha MySQL
  database: 'nome_do_banco_de_dados' // O banco de dados que você deseja conectar
});

// Estabelecendo a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Exemplo de consulta
connection.query('SELECT * FROM tabela', (err, results) => {
  if (err) throw err;
  console.log(results);
});

// Fechar conexão quando terminar
connection.end();
