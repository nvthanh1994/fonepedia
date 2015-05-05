-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 05, 2015 at 05:38 AM
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
-- Table structure for table `Brand`
--

CREATE TABLE IF NOT EXISTS `Brand` (
  `brand_id` varchar(45) NOT NULL,
  `brand_name` varchar(45) DEFAULT NULL,
  `numberOfPhone` int(11) DEFAULT '0',
  `logoUrl` varchar(200) DEFAULT NULL,
  `slogan` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Brand`
--

INSERT INTO `Brand` (`brand_id`, `brand_name`, `numberOfPhone`, `logoUrl`, `slogan`) VALUES
('apple', 'Apple', 1, 'null', 'null'),
('htc', 'HTC', 0, 'null', 'null'),
('lg', 'LG', 0, 'null', 'null'),
('nokia', 'NOKIA', 0, 'null', 'null'),
('Samsung', 'SamSung', 0, 'null', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `Image`
--

CREATE TABLE IF NOT EXISTS `Image` (
  `image_id` int(11) NOT NULL,
  `imageUrl` varchar(100) NOT NULL,
  `phone_id` varchar(45) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Image`
--

INSERT INTO `Image` (`image_id`, `imageUrl`, `phone_id`) VALUES
(1, 'http://localhost:8000/img/phones/1430797276985.jpeg', 'iPhone5s');

-- --------------------------------------------------------

--
-- Table structure for table `Phone`
--

CREATE TABLE IF NOT EXISTS `Phone` (
  `phone_id` varchar(45) NOT NULL,
  `phone_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Phone`
--

INSERT INTO `Phone` (`phone_id`, `phone_name`) VALUES
('iPhone5s', 'iPhone5s');

-- --------------------------------------------------------

--
-- Table structure for table `Review`
--

CREATE TABLE IF NOT EXISTS `Review` (
  `review_id` int(10) NOT NULL,
  `phone_id` varchar(45) DEFAULT NULL,
  `review_title` varchar(100) DEFAULT NULL,
  `review_content` longtext
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Review`
--

INSERT INTO `Review` (`review_id`, `phone_id`, `review_title`, `review_content`) VALUES
(3, 'iPhone5s', 'iPhone5s', 'It is perfect phone. Beautiful, luxury, comfor');

-- --------------------------------------------------------

--
-- Table structure for table `Spes`
--

CREATE TABLE IF NOT EXISTS `Spes` (
  `spes_id` int(11) NOT NULL,
  `brand_id` varchar(45) DEFAULT NULL,
  `phone_id` varchar(45) DEFAULT NULL,
  `general_network` varchar(100) DEFAULT NULL,
  `general_announced` varchar(100) DEFAULT NULL,
  `general_status` varchar(100) DEFAULT NULL,
  `body_dim` varchar(100) DEFAULT NULL,
  `body_weight` varchar(100) DEFAULT NULL,
  `display_type` varchar(100) DEFAULT NULL,
  `display_size` varchar(100) DEFAULT NULL,
  `display_multitouch` varchar(100) DEFAULT NULL,
  `sound_type` varchar(100) DEFAULT NULL,
  `sound_speaker` varchar(100) DEFAULT NULL,
  `sound_jack` varchar(100) DEFAULT NULL,
  `memory_cardslot` varchar(100) DEFAULT NULL,
  `memory_internal` varchar(100) DEFAULT NULL,
  `data_wlan` varchar(100) DEFAULT NULL,
  `data_bluetooth` varchar(100) DEFAULT NULL,
  `data_usb` varchar(100) DEFAULT NULL,
  `data_other` varchar(100) DEFAULT NULL,
  `camera_primary` varchar(100) DEFAULT NULL,
  `camera_feature` varchar(100) DEFAULT NULL,
  `camera_video` varchar(100) DEFAULT NULL,
  `camera_secondary` varchar(100) DEFAULT NULL,
  `feature_os` varchar(100) DEFAULT NULL,
  `feature_chipset` varchar(100) DEFAULT NULL,
  `feature_gpu` varchar(100) DEFAULT NULL,
  `feature_sensors` varchar(100) DEFAULT NULL,
  `feature_radio` varchar(100) DEFAULT NULL,
  `feature_gps` varchar(100) DEFAULT NULL,
  `battery` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Spes`
--

INSERT INTO `Spes` (`spes_id`, `brand_id`, `phone_id`, `general_network`, `general_announced`, `general_status`, `body_dim`, `body_weight`, `display_type`, `display_size`, `display_multitouch`, `sound_type`, `sound_speaker`, `sound_jack`, `memory_cardslot`, `memory_internal`, `data_wlan`, `data_bluetooth`, `data_usb`, `data_other`, `camera_primary`, `camera_feature`, `camera_video`, `camera_secondary`, `feature_os`, `feature_chipset`, `feature_gpu`, `feature_sensors`, `feature_radio`, `feature_gps`, `battery`, `price`) VALUES
(21, 'apple', 'iPhone5s', '4G', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '32GB', NULL, NULL, NULL, NULL, '5mp', NULL, NULL, NULL, 'iOs 8.3', NULL, NULL, NULL, NULL, NULL, '2cell', '499$');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Brand`
--
ALTER TABLE `Brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `Image`
--
ALTER TABLE `Image`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `phone_id` (`phone_id`);

--
-- Indexes for table `Phone`
--
ALTER TABLE `Phone`
  ADD PRIMARY KEY (`phone_id`);

--
-- Indexes for table `Review`
--
ALTER TABLE `Review`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `phone_id` (`phone_id`);

--
-- Indexes for table `Spes`
--
ALTER TABLE `Spes`
  ADD PRIMARY KEY (`spes_id`),
  ADD KEY `brand_id_idx` (`brand_id`),
  ADD KEY `phone_id_idx` (`phone_id`),
  ADD KEY `phone_id` (`phone_id`),
  ADD KEY `phone_id_2` (`phone_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Image`
--
ALTER TABLE `Image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Review`
--
ALTER TABLE `Review`
  MODIFY `review_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `Spes`
--
ALTER TABLE `Spes`
  MODIFY `spes_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Image`
--
ALTER TABLE `Image`
  ADD CONSTRAINT `Image_ibfk_1` FOREIGN KEY (`phone_id`) REFERENCES `Phone` (`phone_id`);

--
-- Constraints for table `Review`
--
ALTER TABLE `Review`
  ADD CONSTRAINT `Review_ibfk_1` FOREIGN KEY (`phone_id`) REFERENCES `Phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Spes`
--
ALTER TABLE `Spes`
  ADD CONSTRAINT `Spes_ibfk_1` FOREIGN KEY (`phone_id`) REFERENCES `Phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Spes_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `Brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
