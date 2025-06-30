const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do MySQL
const db = mysql.createPool({
  host: 'sql301.infinityfree.com',
  user: 'if0_38937533',
  password: 'kniNszFcfqtpUfo',
  database: 'if0_38937533_loja',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste de conexão
// db.getConnection((err, conn) => {
//   if (err) console.error('Erro ao conectar ao MySQL:', err);
//   else {
//     console.log('Conectado ao MySQL!');
//     conn.release();
//   }
// });

app.get('/', (req, res) => {
  res.send('API Loja Digital Online (MySQL)');
});

// Produtos Digitais
app.get('/produtos-digitais', (req, res) => {
  db.query('SELECT * FROM produtos_digitais', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.post('/produtos-digitais', (req, res) => {
  const { nome, descricao, preco, arquivo } = req.body;
  db.query('INSERT INTO produtos_digitais (nome, descricao, preco, arquivo) VALUES (?, ?, ?, ?)', [nome, descricao, preco, arquivo], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
});

// Vendas Digitais
app.get('/vendas-digitais', (req, res) => {
  db.query('SELECT * FROM vendas_digitais', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Clientes
app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.post('/clientes', (req, res) => {
  const { nome, email, senha } = req.body;
  db.query('INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
});

// Cupons
app.get('/cupons', (req, res) => {
  db.query('SELECT * FROM cupons', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.post('/cupons', (req, res) => {
  const { codigo, desconto, validade } = req.body;
  db.query('INSERT INTO cupons (codigo, desconto, validade) VALUES (?, ?, ?)', [codigo, desconto, validade], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
});

// Relatórios (exemplo: total de vendas)
app.get('/relatorios/total-vendas', (req, res) => {
  db.query('SELECT COUNT(*) as total FROM vendas_digitais', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

// Mensagens
app.get('/mensagens', (req, res) => {
  db.query('SELECT * FROM mensagens', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Suporte
app.get('/suporte', (req, res) => {
  db.query('SELECT * FROM suporte', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Pagamentos
app.get('/pagamentos', (req, res) => {
  db.query('SELECT * FROM pagamentos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Avaliações
app.get('/avaliacoes', (req, res) => {
  db.query('SELECT * FROM avaliacoes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Logs
app.get('/logs', (req, res) => {
  db.query('SELECT * FROM logs', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Banners Digitais
app.get('/banners', (req, res) => {
  db.query('SELECT * FROM banners', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.post('/banners', (req, res) => {
  const { titulo, imagem, link } = req.body;
  db.query('INSERT INTO banners (titulo, imagem, link) VALUES (?, ?, ?)', [titulo, imagem, link], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT} (MySQL)`);
}); 