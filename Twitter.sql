CREATE DATABASE  IF NOT EXISTS `Twitter` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Twitter`;
-- MySQL dump 10.13  Distrib 5.6.17, for osx10.6 (i386)
--
-- Host: localhost    Database: Twitter
-- ------------------------------------------------------
-- Server version	5.6.20

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
-- Table structure for table `PostKeyword`
--

DROP TABLE IF EXISTS `PostKeyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PostKeyword` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `keyword` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PostKeyword`
--

LOCK TABLES `PostKeyword` WRITE;
/*!40000 ALTER TABLE `PostKeyword` DISABLE KEYS */;
INSERT INTO `PostKeyword` VALUES (1,'Featured'),(2,'News'),(3,'Sports'),(4,'Music'),(5,'Humor'),(6,'Entertainment'),(7,'Java'),(8,'Times'),(9,'New York'),(10,'Boston'),(11,'AngularJS'),(12,'JavaScript'),(13,'C++'),(14,'Perl'),(15,'Linuxs'),(16,'MySQL'),(17,'MicroSoft'),(18,'Apple'),(19,'Youtube'),(20,'Walmart'),(21,'Target'),(22,'Outlets'),(23,'Fashion'),(24,'Go'),(25,'IPhone 6'),(26,'Android'),(27,'IOS'),(28,'AJAX'),(29,'China'),(30,'America'),(31,'Dota2'),(32,'1 million dollars'),(33,'bonus'),(34,'NBA finals'),(35,'Cheese Cake Factory'),(36,'Lobster'),(37,'Play Station'),(38,'Java Magazine'),(39,'NASA'),(40,'Forbes Tech News'),(41,'The New York TImes'),(42,'National Geographic'),(43,'Space Station'),(44,'BBC'),(45,'Toyota'),(46,'CBS News'),(47,'Forbes'),(48,'Stephen Curry'),(49,'CNBC'),(50,'Good Morning America'),(51,'ABC News'),(52,'Business Insider'),(53,'New York Daily News'),(54,'CNNMoney'),(55,'CNN Weather Center'),(56,'Real Time Economics'),(57,'The Guardian'),(58,'Wall Street Journal'),(59,'Major League Soccer'),(60,'ESPN'),(61,'ESPN CollegeFootball'),(62,'NHL'),(63,'NFL Netword'),(64,'World Soccor Shop'),(65,'WWE'),(66,'FIFA'),(67,'Golden St. Warriors'),(68,'NASCAR Trucks');
/*!40000 ALTER TABLE `PostKeyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(200) DEFAULT NULL,
  `reply_num` int(11) DEFAULT '0',
  `retweet_num` int(11) DEFAULT '0',
  `favorite_num` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (2,'zesheng zong','2015-08-20 14:36:45','test post',0,0,0);
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'zesheng zong','1','zzs@gmail.com'),(2,'Stephen Curry','1','curry@gmail.com'),(3,'Obama','1','obama@gmail.com'),(4,'New York Times','1','nyt@gmail.com'),(5,'Motor Trend','1','mt@gmail.com');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'Twitter'
--

--
-- Dumping routines for database 'Twitter'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-20 12:21:34
