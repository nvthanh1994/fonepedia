
DROP TABLE IF EXISTS `Brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Brand` (
  `brand_id` varchar(45) NOT NULL,
  `brand_name` varchar(45) DEFAULT NULL,
  `numberOfPhone` int(11) DEFAULT NULL,
  `logoUrl` varchar(200) DEFAULT NULL,
  `slogan` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;