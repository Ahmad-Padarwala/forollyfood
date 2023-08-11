-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2023 at 12:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forolly`
--

-- --------------------------------------------------------

--
-- Table structure for table `bot_slider`
--

CREATE TABLE `bot_slider` (
  `id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cate_id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `role` varchar(100) NOT NULL,
  `company` varchar(300) NOT NULL,
  `email` varchar(200) NOT NULL,
  `number` int(20) NOT NULL,
  `address` varchar(2000) NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `inquiryType` varchar(100) NOT NULL,
  `message` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nutrition`
--

CREATE TABLE `nutrition` (
  `nutr_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `energy` varchar(20) NOT NULL,
  `total_fat` varchar(20) NOT NULL,
  `saturated_fat` varchar(20) NOT NULL,
  `trans_fat` varchar(20) NOT NULL,
  `cholesterol` varchar(20) NOT NULL,
  `sodium` varchar(20) NOT NULL,
  `total_carbohydrates` varchar(20) NOT NULL,
  `protien` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nutrition`
--

INSERT INTO `nutrition` (`nutr_id`, `prod_id`, `energy`, `total_fat`, `saturated_fat`, `trans_fat`, `cholesterol`, `sodium`, `total_carbohydrates`, `protien`) VALUES
(1, 4, '417 Kcal', '5g', '2g', '0g', 'omg', '180mg', '83g', '2g'),
(2, 5, '417 kcal', '5g', '2g', '0g', '0mg', '180mg', '83g', '2g'),
(3, 6, '412 Kcal', '4g', '1g', '0g', '0mg', '160mg', '90g', '2.5g'),
(4, 8, '417kcal', '5g', '2g', '0g', '0mg', '70mg', '90g', '2g');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `cate_id` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `short_desc` varchar(5000) NOT NULL,
  `long_desc` varchar(10000) NOT NULL,
  `image` varchar(500) NOT NULL,
  `status` int(1) NOT NULL,
  `slider` int(10) NOT NULL,
  `popular` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `brand_id`, `cate_id`, `title`, `short_desc`, `long_desc`, `image`, `status`, `slider`, `popular`) VALUES
(4, 1, 1, 'Badam Shake', '<p><strong>INGREDIENTS</strong>: SUGAR, LIQUID GLUCOSE, EDIBLE VEGETABLE FAT,<br />\r\nMILK SOLIDS, EDIBLE COMMON SALT, EMULSIFIERS (322, 471).<br />\r\nCONTAINS ADDED NATURAL AND ARTIFICIAL FLAVOURING<br />\r\nSUBSTANCES. ALMOND &amp; MILK.<br />\r\nALLERGY INFORMATION: CONTAINS MILK AND SOYA.</p>\r\n\r\n<p><strong>Net weight</strong>&nbsp;: 780g<br />\r\n<strong>Quantity</strong>&nbsp;: 120 pcs<br />\r\n<strong>MRP</strong>&nbsp;: 240</p>\r\n', '', 'image_1691419227178product1.webp', 1, 1, 1),
(5, 1, 1, 'Brownie Vanilla', '<p><strong>INGREDIENTS:</strong>&nbsp;SUGAR, LIQUID GLUCOSE, EDIBLE VEGETABLE FAT,<br />\r\nMILK SOLIDS, COCOA POWDER, EDIBLE COMMON SALT,<br />\r\nEMULSIFIERS (322, 471). CONTAINS ADDED NATURAL AND<br />\r\nARTIFICIAL FLAVOURING SUBSTANCES-VANILLA &amp; CHOCOLATE.<br />\r\nALLERGY INFORMATION: CONTAINS MILK AND SOYA.</p>\r\n\r\n<p><strong>Net Weight</strong>&nbsp;: 130g<br />\r\n<strong>MRP</strong>&nbsp;: 50</p>\r\n', '', 'image_1691493227795image_1689521823576products10.webp', 1, 1, 1),
(6, 1, 1, 'Shahi Thandai', '<p><strong>INGREDIENTS:</strong>&nbsp;SUGAR, LIQUID GLUCOSE, EDIBLE VEGETABLE<br />\r\nFAT, MILK SOLIDS, COCOA POWDER, EDIBLE COMMON SALT,<br />\r\nEMULSIFIERS (322, 471). CONTAINS PERMITTED SYNTHETIC<br />\r\nFOOD COLOURS (INS 110, INS 102) AND ADDED FLAVOUR<br />\r\n(NATURE IDENTICAL FLAVOURING SUBSTANCES-CHOCOLATE &amp;<br />\r\nTHANDAI, ALLERGY INFORMATION: CONTAINS MILK AND SOYA.</p>\r\n\r\n<p><strong>Net Weight</strong>&nbsp;: 130g<br />\r\n<strong>MRP</strong>&nbsp;: 50</p>\r\n', '', 'image_1691493810298image_1689854397163bottom-slider6.webp', 1, 1, 1),
(7, 1, 1, 'Birthday Treat', '<p><strong>INGREDIENTES</strong>: A&Ccedil;&Uacute;CAR, GLICOSE L&Iacute;QUIDA, GORDURA COMEST&Iacute;VEL DE<br />\r\nVEGETAL, S&Oacute;LIDOS DE LEITE, SAL COMEST&Iacute;VEL COMEST&Iacute;VEL, LEITE EM P&Oacute;<br />\r\nDESNATADO, EMULSIFICADORES (322, 471). CONT&Eacute;M ADICIONADO<br />\r\nAROMAS NATURAIS E ARTIFICIAIS (SUBST&Acirc;NCIAS PARA AROMAS<br />\r\nNATURAIS E IDENTICAS &ndash; LEITE, CARAMELO, RAJBHOG, GELADO &amp;<br />\r\nELAICHI. INFORMA&Ccedil;&Otilde;ES SOBRE ALERGIA: CONT&Eacute;M LEITE E SOJA.</p>\r\n\r\n<p><strong>Net weight</strong>&nbsp;: 780g<br />\r\n<strong>Quantity</strong>&nbsp;: 120 pcs<br />\r\n<strong>MRP</strong>&nbsp;: 240</p>\r\n', '', 'image_1691493932720image_1689608007967products5.webp', 1, 1, 0),
(8, 1, 1, 'Cherry Merry', '<p><strong>INGREDIENTS:</strong>&nbsp;SUGAR, LIQUID GLUCOSE, EDIBLE VEGETABLE FAT,<br />\r\nMILK SOLIDS, EDIBLE COMMON SALT, EMULSIFIERS (322, 471),<br />\r\nACIDITY REGULATOR (E 296). CONTAINS PERMITTED SYNTHETIC<br />\r\nFOOD COLOURS (INS 124, INS 171) AND ADDED FLAVOURS (NATURE-<br />\r\nIDENTICAL FLAVOURING SUBSTANCES&ndash;CHERRY &amp; MILK).<br />\r\nALLERGY INFORMATION: CONTAINS MILK AND SOYA.</p>\r\n\r\n<p><strong>Net Weight</strong>&nbsp;: 130g<br />\r\n<strong>MRP</strong>&nbsp;: 50</p>\r\n', '', 'image_1691494143164image_1689608150275products12.webp', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uname` varchar(500) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uname`, `password`) VALUES
(1, 'forolly', 'forolly');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bot_slider`
--
ALTER TABLE `bot_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cate_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nutrition`
--
ALTER TABLE `nutrition`
  ADD PRIMARY KEY (`nutr_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bot_slider`
--
ALTER TABLE `bot_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `nutrition`
--
ALTER TABLE `nutrition`
  MODIFY `nutr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
