-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: fonepedia
-- ------------------------------------------------------
-- Server version	5.6.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `Brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Brand` (
  `brand_id` varchar(45) NOT NULL,
  `brand_name` varchar(45) DEFAULT NULL,
  `numberOfPhone` int(11) DEFAULT 0,
  `logoUrl` varchar(200) DEFAULT NULL,
  `slogan` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `Phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Phone` (
  `phone_id` varchar(45) NOT NULL,
  `phone_name` varchar(45) NOT NULL,
  `brand_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`phone_id`),
  KEY `brand_id_idx` (`brand_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Spes`
--
ALTER TABLE `Spes`
  ADD PRIMARY KEY (`spes_id`),
  ADD KEY `brand_id_idx` (`brand_id`),
  ADD KEY `phone_id_idx` (`phone_id`),
  ADD KEY `phone_id` (`phone_id`),
  ADD KEY `phone_id_2` (`phone_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Spes`
--
ALTER TABLE `Spes`
  MODIFY `spes_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Spes`
--
ALTER TABLE `Spes`
  ADD CONSTRAINT `Spes_ibfk_1` FOREIGN KEY (`phone_id`) REFERENCES `Phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE;


DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-02 21:35:28



CREATE TABLE IF NOT EXISTS `Review` (
  `review_id` int(10) NOT NULL,
  `phone_id` varchar(45) DEFAULT NULL,
  `review_title` varchar(100) DEFAULT NULL,
  `review_content` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `Review`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `phone_id` (`phone_id`);

ALTER TABLE `Review`
  MODIFY `review_id` int(10) NOT NULL AUTO_INCREMENT;

ALTER TABLE `Review`
  ADD CONSTRAINT `Review_ibfk_1` FOREIGN KEY (`phone_id`) REFERENCES `Phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE;
