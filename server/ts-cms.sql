-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: ts-cms
-- ------------------------------------------------------
-- Server version	5.7.17

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
-- Table structure for table `apartment`
--

DROP TABLE IF EXISTS `apartment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment` (
  `apartmentId` varchar(255) CHARACTER SET utf8 NOT NULL,
  `apartmentName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`apartmentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment`
--

LOCK TABLES `apartment` WRITE;
/*!40000 ALTER TABLE `apartment` DISABLE KEYS */;
INSERT INTO `apartment` VALUES ('ACCOUNT','账户'),('B2B','B2B'),('B2C','B2C'),('MB','手机'),('SNS','SNS'),('VERIFY','认证中心');
/*!40000 ALTER TABLE `apartment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meet`
--

DROP TABLE IF EXISTS `meet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meet` (
  `meetid` int(11) NOT NULL AUTO_INCREMENT COMMENT '会议记录id',
  `uid` varchar(6) CHARACTER SET utf8 DEFAULT NULL,
  `meetdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `meettopic` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `meetbrief` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `meetqa` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`meetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meet`
--

LOCK TABLES `meet` WRITE;
/*!40000 ALTER TABLE `meet` DISABLE KEYS */;
/*!40000 ALTER TABLE `meet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `score`
--

DROP TABLE IF EXISTS `score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `score` (
  `uid` varchar(6) CHARACTER SET utf8 NOT NULL,
  `score` smallint(6) DEFAULT '20',
  PRIMARY KEY (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `score`
--

LOCK TABLES `score` WRITE;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
INSERT INTO `score` VALUES ('1',20),('67',20);
/*!40000 ALTER TABLE `score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `score_rule`
--

DROP TABLE IF EXISTS `score_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `score_rule` (
  `ruleid` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `rulename` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ruletype` char(1) CHARACTER SET utf8 DEFAULT NULL COMMENT '0代表减分，1代表加分',
  `rulevalue` tinyint(2) unsigned DEFAULT NULL,
  PRIMARY KEY (`ruleid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `score_rule`
--

LOCK TABLES `score_rule` WRITE;
/*!40000 ALTER TABLE `score_rule` DISABLE KEYS */;
INSERT INTO `score_rule` VALUES (001,'迟到','0',5),(002,'完成作业','1',2);
/*!40000 ALTER TABLE `score_rule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scorelog`
--

DROP TABLE IF EXISTS `scorelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scorelog` (
  `logid` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `uid` varchar(6) DEFAULT NULL,
  `ruleid` int(3) DEFAULT NULL,
  `meetid` int(11) DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`logid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scorelog`
--

LOCK TABLES `scorelog` WRITE;
/*!40000 ALTER TABLE `scorelog` DISABLE KEYS */;
/*!40000 ALTER TABLE `scorelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` varchar(6) CHARACTER SET utf8 NOT NULL COMMENT '工号',
  `userName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT '123456',
  `sex` char(1) CHARACTER SET utf8 DEFAULT NULL,
  `mb` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `apartmentId` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `outFlag` char(1) CHARACTER SET utf8 DEFAULT '0',
  PRIMARY KEY (`uid`),
  KEY `PK_APARTMENT_ID` (`apartmentId`),
  CONSTRAINT `PK_APARTMENT_ID` FOREIGN KEY (`apartmentId`) REFERENCES `apartment` (`apartmentId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1','polo','123456','1','15757115064','B2B','2017-07-18 09:14:23','0'),('67','机器猫','123456','0','16767116762','SNS','2017-07-19 05:55:23','0');
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

-- Dump completed on 2017-07-24  1:01:59
