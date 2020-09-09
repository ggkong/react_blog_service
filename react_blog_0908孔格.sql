/*
 Navicat Premium Data Transfer

 Source Server         : mysql8.0
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : 39.101.140.131:3306
 Source Schema         : react_blog

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 08/09/2020 13:12:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '123456');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL DEFAULT 0,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `article_content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `addTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `view_count` int NOT NULL DEFAULT 0,
  `isTop` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `type_id`(`type_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 57 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, 'java基础技术', 'ava编程语言的风格十分接近C++语言。继承了C++语言面向对象技术的核心，舍弃了容易引起错误的指针，以引用取代；移除了C++中的运算符重载和多重继承特性，用接口取代；增加垃圾回收器功能。在Java SE 1.5版本中引入了泛型编程、类型安全的枚举、不定长参数和自动装/拆箱特性。Sun微系统对Java语言的解释是：“Java编程语言是个简单、面向对象、分布式、解释性、健壮、安全与系统无关、可移植、高性能、多线程和动态的语言”\r\n\r\nJava不同于一般的编译语言或解释型语言。它首先将源代码编译成字节码，再依赖各种不同平台上的虚拟机来解释执行字节码，从而具有“一次编写，到处运行”的跨平台特性。在早期JVM中，这在一定程度上降低了Java程序的运行效率。但在J2SE1.4.2发布后，Java的运行速度有了大幅提升。\r\n\r\n与传统类型不同，Sun公司在推出Java时就将其作为开放的技术。全球的Java开发公司被要求所设计的Java软件必须相互兼容。“Java语言靠群体的力量而非公司的力量”是Sun公司的口号之一，并获得了广大软件开发商的认同。这与微软公司所倡导的注重精英和封闭式的模式完全不同，此外，微软公司后来推出了与之竞争的.NET平台以及模仿Java的C#语言。后来Sun公司被甲骨文公司并购，Java也随之成为甲骨文公司的产品。\r\n\r\n现时，移动操作系统Android大部分的代码采用Java编程语言编程。', 'Java是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级Web应用开发和移动应用开发。\r\n\r\n任职于Sun微系统的詹姆斯·高斯林等人于1990年代初开发Java语言的雏形，最初被命名为Oak，目标设置在家用电器等小型系统的编程语言，应用在电视机、电话、闹钟、烤面包机等家用电器的控制和通信。由于这些智能化家电的市场需求没有预期的高，太阳计算机系统（Sun公司）放弃了该项计划。随着1990年代互联网的发展，Sun公司看见Oak在互联网上应用的前景，于是改造了Oak，于1995年5月以Java的名称正式发布。Java伴随着互联网的迅猛发展而发展，逐渐成为重要的网络编程语言。', '20200909', 100, 0);
INSERT INTO `article` VALUES (2, 2, '人生若只如初见', '人生若只如初见，何事秋风悲画扇？\r\n等闲变却故人心，却道故人心易变。\r\n骊山语罢清宵半，泪雨霖铃终不怨。\r\n何如薄幸锦衣郎，比翼连枝当日愿。', '人生若只如初见”这句话出自清代著名词人纳兰性德（纳兰容若）（1655－1685，满族）的《木兰花令·拟古决绝词》，意思是说“事物的结果并不像人们最初想象的那样美好，在发展的过程中往往会变化得超出人们最初的理解，没有了刚刚认识的时候的美好、淡然。那么一切停留在初次的感觉多么美妙，当时的无所挂碍，无所牵绊，一切又是那么自然。初见时的美好，结局的超乎想象，勾绘的人生，总有那么几许淡淡的遗憾和哀伤”。', '20201815', 1000, 0);
INSERT INTO `article` VALUES (3, 1, 'python基础', 'Python的创始人为吉多·范罗苏姆，当时他在阿姆斯特丹的CWI工作。1989年的圣诞节期间，吉多·范罗苏姆为了在打发时间，决心开发一个新的脚本解释编程，作为ABC语言的一种继承，担负同Amoeba操作系统的交互和异常处理[5]。之所以选中Python作为编程的名字，是因为他是BBC电视剧——蒙提·派森的飞行马戏团的爱好者。Python是为了替代使用Unix shell和C语言进行系统管理而从ABC语言发展起来[5]，而它的模块系统主要受到了Modula-3的影响[6]，它还结合了C语言的最少争议特征。就范罗苏姆本人看来，ABC这种语言非常优美和强大，是专门为非专业程序员设计的。但是ABC语言并没有成功，究其原因，他认为是非开放造成的。范罗苏姆决心在Python中避免这一错误，并获取了非常好的效果。[7]\r\n\r\n目前范罗苏姆仍然是Python的主要开发者，决定整个Python语言的发展方向。Python社区经常称呼他是终身仁慈独裁者（BDFL）。\r\n\r\nPython 2.0于2000年10月16日发布，增加了实现完整的垃圾回收，并且支持Unicode。同时，整个开发过程更加透明，社区对开发进度的影响逐渐扩大。\r\n\r\nPython 3.0于2008年12月3日发布，此版不完全兼容之前的Python源代码。不过，很多新特性后来也被移植到旧的Python 2.6/2.7版本。', 'Python（英国发音：/ˈpaɪθən/ 美国发音：/ˈpaɪθɑːn/）是一种广泛使用的解释型、高级编程、通用型编程语言，由吉多·范罗苏姆创造，第一版发布于1991年。Python是ABC语言的后继者，也可以视之为一种使用传统中缀表达式的LISP方言[4]。Python的设计哲学强调代码的可读性和简洁的语法（尤其是使用空格缩进划分代码块，而非使用大括号或者关键词）。相比于C++或Java，Python让开发者能够用更少的代码表达想法。不管是小型还是大型程序，该语言都试图让程序的结构清晰明了。', '20200908', 9999, 0);

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderNum` int NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 100 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '技术blog', 1);
INSERT INTO `type` VALUES (2, '生活blog', 2);

SET FOREIGN_KEY_CHECKS = 1;
