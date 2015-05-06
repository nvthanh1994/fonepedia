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
INSERT INTO `brand` VALUES ('apple','Apple',2,'apple.jpg','Think Different'),('asus','Asus',0,'asus.jpg','In Search of Incredible.'),('blackberry','BlackBerry',0,'blackberry.jpg','One brand. One promise.'),('htc','HTC',0,'htc.jpg','Quite brilliant'),('huawei','Huawei',0,'huawei.jpg','Make It Possible'),('lenovo','Lenovo',0,'lenovo.jpg','For those who do.'),('lg','LG',0,'lg.jpg',' Life\'s Good'),('microsoft','Microsoft',0,'microsoft.jpg','Be what\'s next.'),('motorola','Motorola',0,'motorola.jpg','Hello Moto'),('nokia','Nokia',0,'nokia.jpg','Connecting People'),('oppo','Oppo',0,'oppo.jpg','Never Stop Finding'),('samsung','Samsung',0,'samsung.jpg','Imagine'),('sharp','Sharp',0,'sharp.jpg','Sharp your skills'),('sony','Sony',1,'sony.jpg','Make believe.');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (4,'http://localhost:8000/img/phones/1430862903047.png','sony-xperia-z'),(5,'http://localhost:8000/img/phones/1430863472365.png','sony-xperia-z'),(6,'http://localhost:8000/img/phones/1430863142904.png','sony-xperia-z'),(7,'http://localhost:8000/img/phones/1430877799992.png','apple-iphone-5s'),(8,'http://localhost:8000/img/phones/1430877592841.png','apple-iphone-6');
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
INSERT INTO `phone` VALUES ('apple-iphone-5s','Apple iPhone 5S','apple'),('apple-iphone-6','Apple iPhone 6','apple'),('sony-xperia-z','Sony Xperia Z','sony');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'apple-iphone-6','Review Apple iPhone 6','<div style=\"color: rgb(20, 20, 20);text-align: center;background-color: rgb(255, 255, 255);\"><img src=\"https://photo.tinhte.vn/store/2014/10/2613601_Tinhte-review-iphone-6-tuyet-voi-32.jpg\" alt=\"Tinhte-review-iphone-6-tuyet-voi-32.\" class=\"bbCodeImage LbImage\"/>​</div><span style=\"color: rgb(20, 20, 20);text-align: left;float: none;background-color: rgb(255, 255, 255);\">Mình xếp iPhone 6 là chiếc điện thoai thông minh tốt nhất hiện nay. Nó được tổng hợp từ nhiều yêu tố khác nhau mà không có chiếc điện thoại nào khác trên thị trường có thể đáp ứng toàn diện được như iPhone 6. Mời anh em đọc để biết được cái hay, cái không hay của nó. Dĩ nhiên không có chuyện một cho mọi người (one size fits all) nên nếu định mua iPhone 6 thì anh em nên tìm hiểu kỹ. Review này được tổng hợp sao gần một tháng sử dụng và trên cơ sở đã dùng qua rất nhiều điện thoại thông minh cao cấp của nhiều hãng khác nhau.</span>'),(2,'sony-xperia-z','Sony Xperia Z Review','<p>bla bla</p>');
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
  KEY `phone_id_idx` (`phone_id`),
  CONSTRAINT `phone_id` FOREIGN KEY (`phone_id`) REFERENCES `phone` (`phone_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spes`
--

LOCK TABLES `spes` WRITE;
/*!40000 ALTER TABLE `spes` DISABLE KEYS */;
INSERT INTO `spes` VALUES (1,'apple-iphone-6','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bla bla bla','bla bla bla'),(2,'apple-iphone-5s','bla bla bla','bla bla bla','bla bla bla','bla bla bla','bla bla bla',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'sony-xperia-z','bla bla bla','March, 2013','August, 2013',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2015-05-06  9:00:38