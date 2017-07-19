/*
Navicat MySQL Data Transfer

Source Server         : vue-repo
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : ts-cms

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-07-18 17:16:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` varchar(6) CHARACTER SET utf8 NOT NULL COMMENT '工号',
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT '123456',
  `sex` char(1) CHARACTER SET utf8 DEFAULT NULL,
  `mb` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `apartment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `score` smallint(6) DEFAULT '20',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'polo', '123456', '1', '12322222', 'SNS', '20', '2017-07-18 17:14:23');
INSERT INTO `user` VALUES ('22', '2222', '123456', '1', '2222', 'b2b', '20', '2017-07-18 17:15:23');
