-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 10.129.76.12
-- Tempo de geração: 14/02/2018 às 19:10
-- Versão do servidor: 5.6.26-log
-- Versão do PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `talkus`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bestPosts`
--

CREATE TABLE IF NOT EXISTS `bestPosts` (
`id` int(11) NOT NULL,
  `idPost` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Fazendo dump de dados para tabela `bestPosts`
--

INSERT INTO `bestPosts` (`id`, `idPost`, `idUser`) VALUES
(1, 66, 32),
(2, 62, 37),
(3, 65, 37),
(4, 66, 20),
(5, 66, 38),
(6, 62, 38),
(7, 58, 38),
(8, 58, 38),
(9, 53, 38),
(10, 60, 38),
(11, 60, 38),
(12, 85, 38),
(13, 80, 38),
(14, 80, 38),
(15, 87, 38),
(16, 85, 38),
(17, 87, 38),
(18, 88, 20),
(19, 54, 20),
(20, 74, 20),
(21, 58, 20),
(22, 65, 20),
(23, 88, 20),
(24, 93, 20),
(25, 58, 20),
(26, 53, 20),
(27, 52, 20),
(28, 62, 20),
(29, 94, 20),
(30, 101, 35),
(31, 101, 20),
(32, 99, 20),
(33, 102, 20),
(34, 104, 38),
(35, 105, 38),
(36, 113, 38),
(37, 116, 38),
(38, 118, 20);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastroUser`
--

CREATE TABLE IF NOT EXISTS `cadastroUser` (
`id` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `numero` int(11) NOT NULL,
  `telefone` varchar(50) NOT NULL,
  `rg` varchar(50) NOT NULL,
  `cpf` varchar(50) NOT NULL,
  `filho1` varchar(50) NOT NULL,
  `filho2` varchar(50) NOT NULL,
  `filho3` varchar(50) NOT NULL,
  `dataf1` varchar(50) NOT NULL,
  `dataf2` varchar(50) NOT NULL,
  `dataf3` varchar(50) NOT NULL,
  `uc` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Fazendo dump de dados para tabela `cadastroUser`
--

INSERT INTO `cadastroUser` (`id`, `nome`, `cidade`, `bairro`, `endereco`, `numero`, `telefone`, `rg`, `cpf`, `filho1`, `filho2`, `filho3`, `dataf1`, `dataf2`, `dataf3`, `uc`) VALUES
(15, 'JOSEANE LIRA DOS SANTOS', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MARIA DAS DORES', 330, '(88) 99713-3189', '.', '402.649.538-86', 'HOLGATHY GABRIEL LIRA DOS SANTOS', '', '', '', '', '', ''),
(17, 'FRANCISCA EVANGELISTA DOS SANTOS', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1252, '(88) 99984-9374', '2014020808-1', '.', '', '', '', '', '', '', '6422605-0'),
(18, 'SAMARA MEDEIROS DOS SANTOS', 'juazeiro do norte', 'PEDRINHAS', 'RUA NILDA LOPES', 257, '(88) 9.8828-9083', '.', '070.199.303-01', 'EMANOEL ALENCAR MEDEIROS', '', '', '25/06/2014', '', '', '7884604-8'),
(19, 'EDNA CRISTINA MEDEIROS', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 286, '(88) 9.8872-8961', '.', '029.182.023-42', 'PAMELA CHRISTINA MEDEIROS', 'MASAYURI YABUTA NETO', '', '22/12/2007', '01/01/2015', '', '5734664-0'),
(20, 'MARIA DA CONCEIÃ‡ÃƒO MEDEIROS', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 179, '.', '.', '923.163.793-20', 'AYANNE KALLYNNE MEDEIROS DOS SANTOS', 'MARIA APARECIDA MEDEIROS DOS SANTOS', '', '31/03/2006', '11/02/2009', '', '6124495-3'),
(21, 'MARIA JANIELLE FLOR DE OLIVEIRA', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA NOÃŠMIA ALVES DE SOUSA', 76, '(88) 9.8869-0803', '.', '032.198.883-30', 'PEDRO LUCAS FLOR', '', '', '29/03/2010', '', '', '4559809-6'),
(22, 'MARIA ADRIANA RODRIGUES LEITE', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'TRAVESSA ANTONIA DAMASCENO', 5, '(88) 9.8882-3276', '2002029056257', '039.996.753-22', 'PEDRO GUILHERME R. ADRIANO', 'CÃCERO LUCAS RODRIGUES ADRIANO', 'SAMYLA TAWUANE RODRIGUES ADRIANO', '01/09/2015', '01/12/2011', '03/05/2009', '2231359-1'),
(23, 'MARIA SELMA DA SILVA', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1584, '(88) 9.8875-4887', '2008240398-2', '689.170.663-72', 'VANESSA SILVA SANTOS', '', '', '08/09/2006', '', '', '771567-4'),
(24, 'CLAÃšDIA REJANE PEREIRA DE MELO', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1604, '(88) 9.9422-0488', '20000029063753', '053.521.473-12', 'MARIA AVYLA PEREIRA DOS SANTOS', 'ALEX PEREIRA DOS SANTOS SIQUEIRA', 'ALESSANDRA PEREIRA SIQUEIRA', '24/03/2015', '08/05/2004', '20/03/2000', '5515935-4'),
(25, 'TAMIRIS DA SILVA ALVES', 'Juazeiro do Norte', 'PEDRINHAS', 'TRAVESSA MINISTRO COLOMBO DE SOUSA', 8, '(88) 9.9839-0830', '.', '052.660.183-30', 'ALVINO DA CONCEIÃ‡ÃƒO JUNIOR', 'GLENDA EVELLY SOARES DA SILVA', '', '07/07/2008', '21/08/2013', '', '8543364-0'),
(26, 'EVILÃ‚NIA ALVES', 'Juazeiro do Norte', 'PEDRINHAS', 'TRAVESSA MINISTRO COLOMBO DE SOUSA', 3, '(88) 9.9206-8509', '.', '043.501.043-30', 'ALISSON HENRIQUE ALVES DOS SANTOS ', 'MAX RODRIGO ALVES DA SILVA', 'JULIANA ALVES DA SILVA', '01/03/2007', '29/01/2014', '08/06/2010', '8053749-9'),
(27, 'ROSEMILDO JOSÃ‰ DOS SANTOS', 'juazeiro do norte', 'PEDRINHAS', 'RUA MARIA DAS DORES', 1481, '.', '19714804', '.', 'RIVALDO DA SILVA SANTOS', '', '', '04/02/2007', '', '', ''),
(28, 'EDVANIA VIEIRA BRITO', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1528, '(88) 9.8841-6754', '2007954354-0', '072.751.633-73', 'MARIA IARA VIEIRA DA SILVA', '', '', '25/09/2014', '', '', '3464081-9'),
(29, 'MARIA DE JESUS RODRIGUES', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1640, '.', '.', '173.044.743-00', 'ANA RAQUEL RODRIGUES DIONISIO', '', '', '04/10/2008', '', '', '1348574-1'),
(30, 'MARILENE MARTINS PIMENTEL', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1703, '.', '.', '724.307.453-72', 'JUAN MATHEUS PIMENTEL', '', '', '12/05/2009', '', '', '8093005-0'),
(31, 'MARILENE MARTINS PIMENTEL', 'JUAZEIRO DO NORTE', 'PEDRINHAS', 'RUA MINISTRO COLOMBO DE SOUZA', 1703, '.', '.', '724.307.453-72', 'JUAN MATHEUS PIMENTEL', '', '', '12/05/2009', '', '', '8093005-0');

-- --------------------------------------------------------

--
-- Estrutura para tabela `chat`
--

CREATE TABLE IF NOT EXISTS `chat` (
`id` int(11) NOT NULL,
  `idChat` int(11) NOT NULL,
  `idUser1` int(11) NOT NULL,
  `idUser2` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `hora` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `postagens`
--

CREATE TABLE IF NOT EXISTS `postagens` (
`id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `post` text NOT NULL,
  `data` varchar(50) DEFAULT NULL,
  `login` varchar(50) NOT NULL,
  `idUser` int(11) NOT NULL,
  `src` varchar(50) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=128 ;

--
-- Fazendo dump de dados para tabela `postagens`
--

INSERT INTO `postagens` (`id`, `name`, `post`, `data`, `login`, `idUser`, `src`) VALUES
(52, 'hellen', 'Teste de permissÃ£o ', '2018-02-12', 'hellen', 20, NULL),
(53, 'Betho', 'ðŸ˜ŽðŸ˜', '2018-02-12', 'Betho', 37, NULL),
(54, 'hellen', 'Oitro tezte', '2018-02-12', 'hellen', 20, NULL),
(56, 'Rany', 'Oi', '2018-02-12', 'Rany', 39, NULL),
(57, 'Rany', 'Meu nome Ã© Josef Climber', '2018-02-12', 'Rany', 39, NULL),
(58, 'hellen', 'Kkkkkkkkkkk MIORES DO MUNDO', '2018-02-12', 'hellen', 20, NULL),
(59, 'Rany', 'Kkkk', '2018-02-12', 'Rany', 39, NULL),
(60, 'Jr', 'Teste', '2018-02-12', 'Jr', 38, NULL),
(62, 'Betho', 'kjxcvcvd\n', '2018-02-13', 'Betho', 37, NULL),
(64, 'Jr', 'Nsnsnss s s', '2018-02-13', 'Jr', 38, NULL),
(65, 'Jr', 'Ururyffu', '2018-02-13', 'Jr', 38, NULL),
(66, 'Jr', 'Oosl ld', '2018-02-13', 'Jr', 38, NULL),
(68, 'Jr', 'Eu sou o goku', '2018-02-13', 'Jr', 38, NULL),
(69, 'Jr', 'Ters', '2018-02-13', 'Jr', 38, NULL),
(70, 'Jr', 'Hhhh', '2018-02-13', 'Jr', 38, NULL),
(71, 'Jr', 'Ok', '2018-02-13', 'Jr', 38, NULL),
(73, 'hellen', 'fdgdfg', '2018-02-13', 'hellen', 20, NULL),
(74, 'hellen', 'fdgdfgdf', '2018-02-13', 'hellen', 20, NULL),
(75, 'hellen', 'dklcklvdf', '2018-02-13', 'hellen', 20, NULL),
(77, '', 'Nsnsnns', '2018-02-13', 'Jr', 38, NULL),
(78, '', 'Nsnsnns\nMsnmsmsks', '2018-02-13', 'Jr', 38, NULL),
(79, '', 'Nsnsnns\nMsnmsmsks\n', '2018-02-13', 'Jr', 38, NULL),
(80, '', 'Nsnsnns\nMsnmsmsks\nKkkk', '2018-02-13', 'Jr', 38, NULL),
(81, '', 'Lkhgg', '2018-02-13', 'Jr', 38, NULL),
(82, 'hellen', '4545445', '2018-02-13', 'hellen', 20, NULL),
(83, 'hellen', 'dklsflksd', '2018-02-13', 'hellen', 20, NULL),
(84, 'Jr', 'Ok', '2018-02-13', 'Jr', 38, NULL),
(85, 'hellen', 'sdfds\n', '2018-02-13 23:16:22', 'hellen', 20, NULL),
(86, 'hellen', 'sds', '23:16:58', 'hellen', 20, NULL),
(87, 'Jr', 'Teste', '23:24:38', 'Jr', 38, NULL),
(88, 'hellen', 'Gggg', '01:41:55', 'hellen', 20, NULL),
(89, 'hellen', 'Nwnsnsns', '01:52:00', 'hellen', 20, NULL),
(90, 'hellen', 'Yyy', '01:55:42', 'hellen', 20, NULL),
(91, 'hellen', 'Juj', '01:55:50', 'hellen', 20, NULL),
(92, 'hellen', 'Oi', '01:55:57', 'hellen', 20, NULL),
(93, 'hellen', 'Ok', '01:56:01', 'hellen', 20, NULL),
(94, 'hellen', 'Jjjj', '02:14:21', 'hellen', 20, NULL),
(95, 'hellen', 'sdfdsds', '04:14:37', 'hellen', 20, NULL),
(96, 'Jr', 'M', '04:14:54', 'Jr', 38, NULL),
(97, 'hellen', 'sssd', '04:15:12', 'hellen', 20, NULL),
(98, 'hellen', 'jbdfjgdfgd', '04:15:16', 'hellen', 20, NULL),
(99, 'Jr', '55ttttt', '04:15:20', 'Jr', 38, NULL),
(100, 'Jr', 'Ttttt', '04:15:46', 'Jr', 38, NULL),
(101, 'hellen', 'dgdf', '04:16:36', 'hellen', 20, NULL),
(102, 'hellen', 'Ops', '05:48:11', 'hellen', 20, NULL),
(103, 'Jr', 'Teste ', '05:59:01', 'Jr', 38, NULL),
(105, 'Jr', 'Teste', '15:39:22', 'Jr', 38, NULL),
(106, 'Jr', '', '15:50:25', 'Jr', 38, NULL),
(107, 'hellen', 'fdfd\n', '16:04:23', 'hellen', 20, NULL),
(108, 'hellen', '123', '16:04:36', 'hellen', 20, NULL),
(109, 'hellen', '', '16:12:12', 'hellen', 20, NULL),
(110, 'hellen', '', '16:14:05', 'hellen', 20, NULL),
(114, 'Jr', 'Teste', '16:47:08', 'Jr', 38, NULL),
(117, 'Jr', 'Teste', '17:14:47', 'Jr', 38, NULL),
(119, 'Jr', 'UEA', '17:28:26', 'Jr', 38, NULL),
(120, 'Jr', 'Teste', '17:50:51', 'Jr', 38, NULL),
(123, 'Jr', 'Oi', '14-02-18-15-56-03', 'Jr', 38, 'Jr.38.jpg'),
(124, 'Jr', '', '14-02-18-15-56-16', 'Jr', 38, 'Jr.38.jpg'),
(125, 'hellen', '', '14-02-18-15-57-06', 'hellen', 20, 'hellen.20.jpg'),
(126, 'hellen', '', '14-02-18-15-57-18', 'hellen', 20, 'hellen.20.jpg'),
(127, 'Rany', 'sdsd', '18:57:49', 'Rany', 39, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `statusUser`
--

CREATE TABLE IF NOT EXISTS `statusUser` (
`id` int(11) NOT NULL,
  `hora` varchar(20) NOT NULL,
  `idUser` varchar(11) NOT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=330 ;

--
-- Fazendo dump de dados para tabela `statusUser`
--

INSERT INTO `statusUser` (`id`, `hora`, `idUser`, `status`) VALUES
(312, '04:52:00', '20', 'offline'),
(313, '04:52:00', '20', 'offline'),
(314, '04:52:00', '20', 'offline'),
(315, '04:52:00', '20', 'offline'),
(316, '04:52:00', '20', 'offline'),
(317, '04:52:00', '20', 'offline'),
(318, '04:52:00', '20', 'offline'),
(319, '04:52:00', '20', 'offline'),
(320, '04:52:00', '20', 'offline'),
(321, '04:52:00', '20', 'offline'),
(322, '04:52:00', '20', 'offline'),
(323, '04:51:29', '35', 'offline'),
(324, '04:52:00', '20', 'offline'),
(325, '04:52:00', '20', 'offline'),
(326, '04:52:00', '20', 'offline'),
(327, '04:52:00', '20', 'offline'),
(328, '04:52:00', '20', 'offline'),
(329, '04:52:00', '20', 'offline');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `dataNascimento` varchar(11) NOT NULL,
  `sobre` text NOT NULL,
  `imgUser` varchar(80) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Fazendo dump de dados para tabela `users`
--

INSERT INTO `users` (`id`, `login`, `pass`, `name`, `phone`, `dataNascimento`, `sobre`, `imgUser`, `status`) VALUES
(20, 'hellen', 'hellen', 'Hellen lais', '85991394539', '19-07-2010', '', '', 'online'),
(35, 'hemile', 'hemile', 'Princesa Hemile', '85991394539', '19-09-2011', '', '', 'offline'),
(38, 'Jr', '1', 'Betho', '85991394539', '19-05-1997', '', '', 'offline'),
(39, 'Rany', 'ranyeli123', 'Ranyeli', '85992015126', '15-02-1998', '', '', 'offline');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `bestPosts`
--
ALTER TABLE `bestPosts`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `cadastroUser`
--
ALTER TABLE `cadastroUser`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `chat`
--
ALTER TABLE `chat`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `postagens`
--
ALTER TABLE `postagens`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `statusUser`
--
ALTER TABLE `statusUser`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `bestPosts`
--
ALTER TABLE `bestPosts`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT de tabela `cadastroUser`
--
ALTER TABLE `cadastroUser`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de tabela `chat`
--
ALTER TABLE `chat`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `postagens`
--
ALTER TABLE `postagens`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=128;
--
-- AUTO_INCREMENT de tabela `statusUser`
--
ALTER TABLE `statusUser`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=330;
--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=41;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
