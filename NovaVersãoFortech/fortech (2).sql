-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/12/2024 às 04:51
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fortech`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacoes`
--

CREATE TABLE `avaliacoes` (
  `id` int(11) NOT NULL,
  `qtd_estrela` int(11) NOT NULL,
  `mensagem` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL,
  `modified` datetime DEFAULT NULL,
  `id_dispositivos` int(11) NOT NULL,
  `id_usuario` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `avaliacoes`
--

INSERT INTO `avaliacoes` (`id`, `qtd_estrela`, `mensagem`, `created`, `modified`, `id_dispositivos`, `id_usuario`) VALUES
(70, 5, 'Muito bom para as minhas necessidades!!', '2024-12-02 00:43:16', NULL, 23, 23),
(71, 4, 'É um celular muito bom, porém é um dispositivo caro.', '2024-12-02 00:44:44', NULL, 17, 23);

-- --------------------------------------------------------

--
-- Estrutura para tabela `banco`
--

CREATE TABLE `banco` (
  `id` int(3) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `email` varchar(25) NOT NULL,
  `senha` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `banco`
--

INSERT INTO `banco` (`id`, `nome`, `sobrenome`, `email`, `senha`) VALUES
(23, 'Heloísa ', 'Bragatto', 'helo@gmail.com', '1234'),
(24, 'Teste', 'Id', 'id@gmail.com', '1020');

-- --------------------------------------------------------

--
-- Estrutura para tabela `dispositivos`
--

CREATE TABLE `dispositivos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dispositivos`
--

INSERT INTO `dispositivos` (`id`, `nome`) VALUES
(1, 'Samsung Galaxy A04'),
(2, 'Samsung Galaxy A05'),
(3, 'Xiaomi Redmi A2'),
(4, 'Xiaomi Redmi 12C'),
(5, 'Motorola Moto E13'),
(6, 'Motorola Moto E22i'),
(7, 'Realme C33'),
(8, 'Realme Narzo 50i'),
(9, 'Samsung Galaxy A34'),
(10, 'Samsung Galaxy A54'),
(11, 'Xiaomi Redmi Note 12'),
(12, 'Xiaomi Redmi Note 12 Pro'),
(13, 'Motorola Moto G53'),
(14, 'Samsung Galaxy S23 Ultra'),
(15, 'Samsung Galaxy Z Fold 5'),
(16, 'Iphone 15 Pro Max'),
(17, 'Iphone 15'),
(18, 'Acer Aspire 3'),
(19, 'HP Stream 14'),
(20, 'Lenovo IdeaPad 1 15\" AMD '),
(21, 'Samsung Chromebook 4'),
(22, 'Asus VivoBook 15'),
(23, 'Dell Inspiron 15 3000'),
(24, 'Acer Swift 3'),
(25, 'Lenovo IdeaPad Flex 5 '),
(26, 'Hp Pavilion 15'),
(27, 'Apple MacBook Pro 16');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `banco`
--
ALTER TABLE `banco`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `dispositivos`
--
ALTER TABLE `dispositivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
