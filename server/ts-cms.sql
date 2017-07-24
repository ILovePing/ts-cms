/*
Navicat MySQL Data Transfer

Source Server         : vue-repo
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : ts-cms

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-07-24 15:02:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for apartment
-- ----------------------------
DROP TABLE IF EXISTS `apartment`;
CREATE TABLE `apartment` (
  `apartmentId` varchar(255) CHARACTER SET utf8 NOT NULL,
  `apartmentName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`apartmentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of apartment
-- ----------------------------
INSERT INTO `apartment` VALUES ('ACCOUNT', '账户');
INSERT INTO `apartment` VALUES ('B2B', 'B2B');
INSERT INTO `apartment` VALUES ('B2C', 'B2C');
INSERT INTO `apartment` VALUES ('MB', '手机');
INSERT INTO `apartment` VALUES ('SNS', 'SNS');
INSERT INTO `apartment` VALUES ('VERIFY', '认证中心');

-- ----------------------------
-- Table structure for meet
-- ----------------------------
DROP TABLE IF EXISTS `meet`;
CREATE TABLE `meet` (
  `meetid` int(11) NOT NULL AUTO_INCREMENT COMMENT '会议记录id',
  `uid` varchar(6) CHARACTER SET utf8 DEFAULT NULL,
  `meetdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `meettopic` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `meetbrief` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `meetqa` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`meetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of meet
-- ----------------------------

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `uid` varchar(6) CHARACTER SET utf8 NOT NULL,
  `score` smallint(6) DEFAULT '20',
  PRIMARY KEY (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('1', '20');
INSERT INTO `score` VALUES ('3034', '20');
INSERT INTO `score` VALUES ('67', '20');

-- ----------------------------
-- Table structure for scorelog
-- ----------------------------
DROP TABLE IF EXISTS `scorelog`;
CREATE TABLE `scorelog` (
  `logid` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `uid` varchar(6) DEFAULT NULL,
  `ruleid` int(3) DEFAULT NULL,
  `meetid` int(11) DEFAULT NULL,
  PRIMARY KEY (`logid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of scorelog
-- ----------------------------

-- ----------------------------
-- Table structure for score_rule
-- ----------------------------
DROP TABLE IF EXISTS `score_rule`;
CREATE TABLE `score_rule` (
  `ruleid` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `rulename` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ruletype` char(1) CHARACTER SET utf8 DEFAULT NULL COMMENT '0代表减分，1代表加分',
  `rulevalue` tinyint(2) unsigned DEFAULT NULL,
  PRIMARY KEY (`ruleid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of score_rule
-- ----------------------------
INSERT INTO `score_rule` VALUES ('001', '迟到', '0', '5');
INSERT INTO `score_rule` VALUES ('002', '完成小作业', '1', '2');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
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

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'polo', '123456', '1', '12322222', 'SNS', '2017-07-18 17:14:23', '0');
INSERT INTO `user` VALUES ('3034', 'chopper', '123456', '1', '1575726798', 'B2B', '2017-07-24 14:58:37', '0');
INSERT INTO `user` VALUES ('67', '机器猫', '123456', '0', '16767116762', 'SNS', '2017-07-19 13:55:23', '0');
