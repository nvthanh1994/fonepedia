-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 29, 2015 at 12:34 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fonepedia`
--

-- --------------------------------------------------------

--
-- Table structure for table `Spes`
--

CREATE TABLE IF NOT EXISTS `Spes` (
  `phone_id` int(10) NOT NULL,
  `spes_id` int(11) NOT NULL,
  `brand_id` varchar(45) DEFAULT NULL,
  `general_network` varchar(45) DEFAULT NULL,
  `general_announced` varchar(45) DEFAULT NULL,
  `general_status` varchar(45) DEFAULT NULL,
  `body_dim` varchar(45) DEFAULT NULL,
  `body_weight` varchar(45) DEFAULT NULL,
  `display_type` varchar(45) DEFAULT NULL,
  `display_size` varchar(45) DEFAULT NULL,
  `display_multitouch` varchar(45) DEFAULT NULL,
  `sound_type` varchar(45) DEFAULT NULL,
  `sound_speaker` varchar(45) DEFAULT NULL,
  `sound_jack` varchar(45) DEFAULT NULL,
  `memory_cardslot` varchar(45) DEFAULT NULL,
  `memory_internal` varchar(45) DEFAULT NULL,
  `data_wlan` varchar(45) DEFAULT NULL,
  `data_bluetooth` varchar(45) DEFAULT NULL,
  `data_usb` varchar(45) DEFAULT NULL,
  `data_other` varchar(45) DEFAULT NULL,
  `camera_primary` varchar(45) DEFAULT NULL,
  `camera_feature` varchar(45) DEFAULT NULL,
  `camera_video` varchar(45) DEFAULT NULL,
  `camera_secondary` varchar(45) DEFAULT NULL,
  `feature_os` varchar(45) DEFAULT NULL,
  `feature_chipset` varchar(45) DEFAULT NULL,
  `feature_gpu` varchar(45) DEFAULT NULL,
  `feature_sensors` varchar(45) DEFAULT NULL,
  `feature_radio` varchar(45) DEFAULT NULL,
  `feature_gps` varchar(45) DEFAULT NULL,
  `battery` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Spes`
--
ALTER TABLE `Spes`
  ADD PRIMARY KEY (`spes_id`),
  ADD KEY `brand_id_idx` (`brand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Spes`
--
ALTER TABLE `Spes`
  MODIFY `spes_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
