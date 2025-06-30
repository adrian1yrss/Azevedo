CREATE TABLE IF NOT EXISTS produtos_digitais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  preco DECIMAL(10,2),
  arquivo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS vendas_digitais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  produto_id INT,
  data_venda DATETIME,
  status VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS cupons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(50),
  desconto DECIMAL(5,2),
  validade DATE
);

CREATE TABLE IF NOT EXISTS mensagens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  mensagem TEXT,
  data DATETIME
);

CREATE TABLE IF NOT EXISTS suporte (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  assunto VARCHAR(255),
  mensagem TEXT,
  status VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS pagamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  venda_id INT,
  valor DECIMAL(10,2),
  status VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS avaliacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT,
  cliente_id INT,
  nota INT,
  comentario TEXT
);

CREATE TABLE IF NOT EXISTS logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  acao VARCHAR(255),
  data DATETIME
);

CREATE TABLE IF NOT EXISTS banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  imagem VARCHAR(255),
  link VARCHAR(255)
); 