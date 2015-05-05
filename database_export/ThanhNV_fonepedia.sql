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

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `brand_id` varchar(45) NOT NULL,
  `brand_name` varchar(45) DEFAULT NULL,
  `numberOfPhone` int(11) DEFAULT '0',
  `logoUrl` varchar(200) DEFAULT NULL,
  `slogan` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('apple','Apple',13,'apple.jpg','Think Different'),('asus','Asus',4,'asus.jpg','In Search of Incredible.'),('blackberry','BlackBerry',14,'blackberry.jpg','One brand. One promise.'),('htc','HTC',4,'htc.jpg','Quite brilliant'),('huawei','Huawei',2,'huawei.jpg','Make It Possible'),('lenovo','Lenovo',5,'lenovo.jpg','For those who do.'),('lg','LG',6,'lg.jpg',' Life\'s Good'),('microsoft','Microsoft',7,'microsoft.jpg','Be what\'s next.'),('motorola','Motorola',9,'motorola.jpg','Hello Moto'),('nokia','Nokia',3,'nokia.jpg','Connecting People'),('oppo','Oppo',4,'oppo.jpg','Never Stop Finding'),('samsung','Samsung',3,'samsung.jpg','Imagine'),('sharp','Sharp',2,'sharp.jpg','Sharp your skills'),('sony','Sony',7,'sony.jpg','Make believe.');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(100) NOT NULL,
  `phone_id` varchar(45) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (3,'http://localhost:8000/img/phones/apple-iphone-5s/1.jpg','apple-iphone-5s'),(4,'http://localhost:8000/img/phones/apple-iphone-5s/0.jpg','apple-iphone-5s');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phone` (
  `phone_id` varchar(45) NOT NULL,
  `phone_name` varchar(45) NOT NULL,
  `brand_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`phone_id`),
  KEY `brand_id_idx` (`brand_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES ('Apple iphone','Apple iPhone 4','apple'),('apple-iphone-4s','Apple iPhone 4S','apple'),('apple-iphone-5s','Apple iPhone 5S','apple'),('apple-iphone-6','Apple iPhone 6','apple'),('asus-padfone','Asus Padfone S','asus'),('asus-zenphone','Asus Zenphone','asus'),('blackberry-9000','BlackBerry Bold 9000','blackberry'),('blackberry-9900','BlackBerry Bold 9900','blackberry'),('blackberry-z10','BlackBerry Z10','blackberry');
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `review_id` int(10) NOT NULL AUTO_INCREMENT,
  `phone_id` varchar(45) NOT NULL,
  `review_title` varchar(100) DEFAULT NULL,
  `review_content` longtext,
  PRIMARY KEY (`review_id`),
  KEY `phone_id_idx` (`phone_id`),
  CONSTRAINT `phone_review` FOREIGN KEY (`phone_id`) REFERENCES `phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'apple-iphone-6','Review iPhone 6','<h1>iPhone 6 Review</h1><h3>1. Spes</h3><h2><br/></h2>'),(4,'blackberry-9900','Blackberry 9900 Review','Best Blackberry Ever'),(5,'asus-zenphone','Review','<h1>Asus Zenphone 5</h1><ol><li>ABC</li><li>XYZ</li><li>MNP</li></ol>');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spes`
--

DROP TABLE IF EXISTS `spes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spes` (
  `spes_id` int(11) NOT NULL AUTO_INCREMENT,
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
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`spes_id`),
  KEY `brand_id_idx` (`brand_id`),
  KEY `phone_id_idx` (`phone_id`),
  CONSTRAINT `phone_id` FOREIGN KEY (`phone_id`) REFERENCES `phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spes`
--

LOCK TABLES `spes` WRITE;
/*!40000 ALTER TABLE `spes` DISABLE KEYS */;
INSERT INTO `spes` VALUES (1,'apple','apple-iphone-6','GSM / HSPA / LTE','2015, March','Available. Released 2015, April','143.4 x 70.5 x 6.8 mm (5.65 x 2.78 x 0.27 in)','138 g (4.87 oz)','Super AMOLED capacitive touchscreen, 16M colors','5.1 inches (~70.7% screen-to-body ratio)','1440 x 2560 pixels (~577 ppi pixel density)','Vibration; MP3, WAV ringtones','Yes','Yes','microSD, up to 32GB','4 GB, 512 MB RAM','Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot','Yes, v4.0 with A2DP','Yes, microUSB v2.0','No','5 MP, 2592 x 1944 pixels, autofocus, LED flash','image recording, geo-tagging, face and smile detection ','Yes, 720p','5 MP','Android OS, v4.0 ','Qualcomm MSM8255 Snapdragon','Adreno 205','Accelerometer, proximity','Stereo FM radio with RDS','Yes, with A-GPS support','Li-Ion 1500 mAh','€ 260'),(3,'apple','apple-iphone-5s','bla bla bla bla bla bla','bla bla bla bla bla bla','bla bla bla bla bla bla','143.4 x 70.5 x 6.8 mm (5.65 x 2.78 x 0.27 in)','138 g (4.87 oz)','Super AMOLED capacitive touchscreen, 16M colors','5.1 inches (~70.7% screen-to-body ratio)','1440 x 2560 pixels (~577 ppi pixel density)','Vibration; MP3, WAV ringtones','Yes','Yes','microSD, up to 32GB','4 GB, 512 MB RAM','Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot','Yes, v4.0 with A2DP','Yes, microUSB v2.0','No','5 MP, 2592 x 1944 pixels, autofocus, LED flash','image recording, geo-tagging, face and smile detection ','Yes, 720p','5 MP','Android OS, v4.0 ','Qualcomm MSM8255 Snapdragon','Adreno 205','Accelerometer, proximity','bla bla bla bla bla bla','bla bla bla bla bla bla','bla bla bla bla bla bla','bla bla bla bla bla bla'),(4,'blackberry','blackberry-9900','GSM / HSPA / LTE','2015, March','Available. Released 2015, April','143.4 x 70.5 x 6.8 mm (5.65 x 2.78 x 0.27 in)','138 g (4.87 oz)','Super AMOLED capacitive touchscreen, 16M colors','5.1 inches (~70.7% screen-to-body ratio)','1440 x 2560 pixels (~577 ppi pixel density)','Vibration; MP3, WAV ringtones','Yes','Yes','microSD, up to 32GB','4 GB, 512 MB RAM','Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot','Yes, v4.0 with A2DP','Yes, microUSB v2.0','No','5 MP, 2592 x 1944 pixels, autofocus, LED flash','image recording, geo-tagging, face and smile detection ','Yes, 720p','5 MP','Android OS, v4.0 ','Qualcomm MSM8255 Snapdragon','Adreno 205','Accelerometer, proximity','Stereo FM radio with RDS','Yes, with A-GPS support','Li-Ion 1500 mAh','€ 260'),(9,'asus','asus-zenphone','GSM / HSPA / LTE','2015, March','Available. Released 2015, April','143.4 x 70.5 x 6.8 mm (5.65 x 2.78 x 0.27 in)','138 g (4.87 oz)','Super AMOLED capacitive touchscreen, 16M colors','5.1 inches (~70.7% screen-to-body ratio)','1440 x 2560 pixels (~577 ppi pixel density)','Vibration; MP3, WAV ringtones','Yes','Yes','microSD, up to 32GB','4 GB, 512 MB RAM','Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot','Yes, v4.0 with A2DP','Yes, microUSB v2.0','No','5 MP, 2592 x 1944 pixels, autofocus, LED flash','image recording, geo-tagging, face and smile detection ','Yes, 720p','5 MP','Android OS, v4.0 ','Qualcomm MSM8255 Snapdragon','Adreno 205','Accelerometer, proximity','Stereo FM radio with RDS','Yes, with A-GPS support','Li-Ion 1500 mAh','€ 260'),(16,'blackberry','blackberry-9000','abcxyz',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'abcxyz','abcxyz','abcxyz','abcxyz','abcxyz','abcxyz'),(17,'apple','apple-iphone-4s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$150'),(18,'asus','asus-padfone',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'apple','Apple iphone',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'blackberry','blackberry-z10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `spes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('cuongvc','$2a$08$.5jXLm9UweOLJLFy0KNa2OnlITTlJkPsIjCfcx5JLuVCfVyaQk.aK',4),('nvthanh1994','$2a$08$rmkcWsBf/9YQaoTeoqYbROkCc6ldejRAP9b1l8cdA/KA2xS4Tg//2',5);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-05 15:16:23
