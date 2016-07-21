-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 21 Tem 2016, 21:00:27
-- Sunucu sürümü: 10.1.9-MariaDB
-- PHP Sürümü: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `kodabug`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `confirmation`
--

CREATE TABLE `confirmation` (
  `qid` int(11) NOT NULL COMMENT 'question_id',
  `conf` enum('X') COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'question_confirm'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `follow`
--

CREATE TABLE `follow` (
  `usid` int(11) NOT NULL COMMENT 'user_id',
  `fusid` int(11) NOT NULL COMMENT 'fallow_user_id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `game`
--

CREATE TABLE `game` (
  `gid` int(11) NOT NULL COMMENT 'game_id',
  `gusid` int(11) NOT NULL COMMENT 'game_user_id',
  `grivalid` int(11) NOT NULL COMMENT 'game_rival_id',
  `uspoint` int(11) NOT NULL COMMENT 'user_point',
  `rivalpoint` int(11) NOT NULL COMMENT 'rival_point',
  `gmaxpoint` int(11) NOT NULL COMMENT 'game_max_point'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `presentation`
--

CREATE TABLE `presentation` (
  `usid` int(11) NOT NULL COMMENT 'user_id',
  `qid` int(11) NOT NULL COMMENT 'question_id',
  `prdate` varchar(8) COLLATE utf8_unicode_ci NOT NULL COMMENT 'presentation_date'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `question`
--

CREATE TABLE `question` (
  `qid` int(11) NOT NULL COMMENT 'question_id',
  `qusid` int(11) NOT NULL COMMENT 'question_user_id',
  `qname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'question_name',
  `qtype` int(11) NOT NULL COMMENT 'question_type',
  `qoption` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'question_option',
  `qtrue` varchar(2) COLLATE utf8_unicode_ci NOT NULL COMMENT 'question_true',
  `qfrequency` int(11) NOT NULL COMMENT 'question_frequency'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `type`
--

CREATE TABLE `type` (
  `qtype` int(11) NOT NULL COMMENT 'question_type',
  `tpname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'type_name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user`
--

CREATE TABLE `user` (
  `usid` int(11) NOT NULL COMMENT 'user_id',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user_name',
  `surname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user_surname',
  `uspoint` int(11) NOT NULL COMMENT 'user_point',
  `birth` varchar(8) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user_birth'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `winner`
--

CREATE TABLE `winner` (
  `gid` int(11) NOT NULL COMMENT 'game_id',
  `usid` int(11) NOT NULL COMMENT 'user_id',
  `windate` varchar(12) COLLATE utf8_unicode_ci NOT NULL COMMENT 'winner_date'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `confirmation`
--
ALTER TABLE `confirmation`
  ADD PRIMARY KEY (`qid`);

--
-- Tablo için indeksler `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`gid`);

--
-- Tablo için indeksler `presentation`
--
ALTER TABLE `presentation`
  ADD PRIMARY KEY (`usid`,`qid`);

--
-- Tablo için indeksler `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`qid`);

--
-- Tablo için indeksler `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`qtype`);

--
-- Tablo için indeksler `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`usid`);

--
-- Tablo için indeksler `winner`
--
ALTER TABLE `winner`
  ADD PRIMARY KEY (`gid`,`usid`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `confirmation`
--
ALTER TABLE `confirmation`
  MODIFY `qid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'question_id';
--
-- Tablo için AUTO_INCREMENT değeri `game`
--
ALTER TABLE `game`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'game_id';
--
-- Tablo için AUTO_INCREMENT değeri `question`
--
ALTER TABLE `question`
  MODIFY `qid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'question_id';
--
-- Tablo için AUTO_INCREMENT değeri `type`
--
ALTER TABLE `type`
  MODIFY `qtype` int(11) NOT NULL AUTO_INCREMENT COMMENT 'question_type';
--
-- Tablo için AUTO_INCREMENT değeri `user`
--
ALTER TABLE `user`
  MODIFY `usid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'user_id';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
