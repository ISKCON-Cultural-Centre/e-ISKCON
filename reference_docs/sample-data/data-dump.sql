-- MySQL dump 10.13  Distrib 5.7.20, for Linux (i686)
--
-- Host: 127.0.0.1    Database: icc
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

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
-- Table structure for table `circle`
--

DROP TABLE IF EXISTS `circle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `circle` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `leader-devotee-id` varchar(36) DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_circle` (`id`),
  KEY `fk_circle_devotee1_idx` (`leader-devotee-id`),
  CONSTRAINT `fk_circle_devotee1` FOREIGN KEY (`leader-devotee-id`) REFERENCES `devotee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circle`
--

LOCK TABLES `circle` WRITE;
/*!40000 ALTER TABLE `circle` DISABLE KEYS */;
INSERT INTO `circle` VALUES ('0e17c64a-cce3-11e7-9839-20cf308ebc45','Jagannaths Mercy','42f3a57c-a714-4795-b868-bebef910d2d5',NULL,NULL,NULL,NULL),('22a45f54-cce3-11e7-9839-20cf308ebc45','Mayapur','e745e2d5-cce4-11e7-9839-20cf308ebc45',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `circle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `circle-devotee`
--

DROP TABLE IF EXISTS `circle-devotee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `circle-devotee` (
  `devotee-id` varchar(36) NOT NULL,
  `circle-id` varchar(36) NOT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  KEY `fk_table1_devotee1_idx` (`devotee-id`),
  KEY `fk_circle-devotee_circle1_idx` (`circle-id`),
  CONSTRAINT `fk_circle-devotee_circle1` FOREIGN KEY (`circle-id`) REFERENCES `circle` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_devotee1` FOREIGN KEY (`devotee-id`) REFERENCES `devotee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circle-devotee`
--

LOCK TABLES `circle-devotee` WRITE;
/*!40000 ALTER TABLE `circle-devotee` DISABLE KEYS */;
INSERT INTO `circle-devotee` VALUES ('42f3a57c-a714-4795-b868-bebef910d2d5','0e17c64a-cce3-11e7-9839-20cf308ebc45',NULL,NULL,NULL,NULL),('5a433f29-b16e-4707-b37f-18d2ff62e63a','0e17c64a-cce3-11e7-9839-20cf308ebc45',NULL,NULL,NULL,NULL),('e745e2d5-cce4-11e7-9839-20cf308ebc45','22a45f54-cce3-11e7-9839-20cf308ebc45',NULL,NULL,NULL,NULL),('eb095e3d-040e-4899-8d5c-d5a9f5ec9ac4','22a45f54-cce3-11e7-9839-20cf308ebc45',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `circle-devotee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` varchar(36) NOT NULL,
  `temple-id` varchar(36) NOT NULL,
  `department-name` varchar(50) NOT NULL,
  `department-leader-devotee-id` varchar(36) NOT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_department_temple1_idx` (`temple-id`),
  KEY `fk_department_devotee1_idx` (`department-leader-devotee-id`),
  CONSTRAINT `fk_department_devotee1` FOREIGN KEY (`department-leader-devotee-id`) REFERENCES `devotee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_department_temple1` FOREIGN KEY (`temple-id`) REFERENCES `temple` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES ('bd42391b-2124-4e9e-8a66-5f5739a57426','8bdbd155-cce4-11e7-9839-20cf308ebc45','Matchless Gifts','e745e2d5-cce4-11e7-9839-20cf308ebc45','2017-11-20 07:49:09','2017-11-20 07:49:09',NULL,NULL);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department-service`
--

DROP TABLE IF EXISTS `department-service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department-service` (
  `department-id` varchar(36) NOT NULL,
  `service-id` varchar(36) NOT NULL,
  PRIMARY KEY (`department-id`,`service-id`),
  KEY `fk_department-role_department1_idx` (`department-id`),
  KEY `fk_department-role_service1_idx` (`service-id`),
  CONSTRAINT `fk_department-role_department1` FOREIGN KEY (`department-id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_department-role_service1` FOREIGN KEY (`service-id`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department-service`
--

LOCK TABLES `department-service` WRITE;
/*!40000 ALTER TABLE `department-service` DISABLE KEYS */;
/*!40000 ALTER TABLE `department-service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devotee`
--

DROP TABLE IF EXISTS `devotee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devotee` (
  `id` varchar(36) NOT NULL,
  `legal-name` varchar(100) DEFAULT NULL,
  `spiritual-name` varchar(100) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `physical-address-id` varchar(36) DEFAULT NULL,
  `electronic-address-id` varchar(36) DEFAULT NULL,
  `shiksha-level` varchar(100) DEFAULT NULL,
  `spiritual-level-master-id` varchar(36) DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_devotee_id_idx` (`id`),
  KEY `fk_devotee_spiritual-level-master1_idx` (`spiritual-level-master-id`),
  KEY `fk_devotee_physical-address1_idx` (`physical-address-id`),
  KEY `fk_devotee_electronic-address1_idx` (`electronic-address-id`),
  CONSTRAINT `fk_devotee_electronic-address1` FOREIGN KEY (`electronic-address-id`) REFERENCES `electronic-address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee_physical-address1` FOREIGN KEY (`physical-address-id`) REFERENCES `physical-address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee_spiritual-level-master1` FOREIGN KEY (`spiritual-level-master-id`) REFERENCES `spiritual-level-master` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devotee`
--

LOCK TABLES `devotee` WRITE;
/*!40000 ALTER TABLE `devotee` DISABLE KEYS */;
INSERT INTO `devotee` VALUES ('0c59e04e-f9f0-461f-9755-608348044bd6','Krishna','krishna','M',NULL,NULL,'','913fd405-752b-4779-9ea7-80a29ce83398','','krishna','$2a$10$RzDzwukQAvEtdNCq5hW.1eNUEkAV5OB92MHyFjgKlnGwpjv24csEm','admin@iskconsouthbangalore.org',0,NULL,NULL,NULL,NULL,NULL),('42f3a57c-a714-4795-b868-bebef910d2d5','Shyam Amarnath','SundarRupa Syam Dasa','1',NULL,NULL,'string','913fd405-752b-4779-9ea7-80a29ce83398',NULL,'icc-9','$2a$10$jvbmh/ld3a3IMkOAcwmeiuV1XbnGoIoA/XMLDfodyj0HdKoSFugye','shyam.s.amarnath@gmail.com',0,NULL,'2017-11-20 09:32:09','2017-11-20 09:32:09',NULL,NULL),('5a433f29-b16e-4707-b37f-18d2ff62e63a','Rajendra K','Rasaraj Syamasundara Dasa','1',NULL,NULL,NULL,'d2d9ce87-8f1c-4848-a816-443fd92dbc8c',NULL,'icc-10','$2a$10$4lPc70zd.yunfeQSY0wj2eExAdCSwqoUFvTZloYSsJkvBnA1nuqBK','hairajendra@gmail.com',0,NULL,'2017-11-20 09:40:17','2017-11-20 09:40:17',NULL,NULL),('e745e2d5-cce4-11e7-9839-20cf308ebc45','Rengaran','Rukumini RangaKrishna Dasa','M',NULL,NULL,'','913fd405-752b-4779-9ea7-80a29ce83398',NULL,'renga.r@gmail.com','$2a$10$RzDzwukQAvEtdNCq5hW.1eNUEkAV5OB92MHyFjgKlnGwpjv24csEm','renga.r@gmail.com',0,NULL,NULL,NULL,NULL,NULL),('eb095e3d-040e-4899-8d5c-d5a9f5ec9ac4','Nimai','Nimai Narayana Dasa','1',NULL,NULL,'string','913fd405-752b-4779-9ea7-80a29ce83398',NULL,'icc-11','$2a$10$O3Wg5aVtw90xpZ1iWDsdgurCXnrG2tCg/S./i7A12aVpThynj1lNm','krishnbalaram108@gmail.com',0,NULL,'2017-11-20 09:10:29','2017-11-20 09:10:29',NULL,NULL);
/*!40000 ALTER TABLE `devotee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` varchar(36) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES ('613e1ace-7c81-432c-8c15-dedd80fba567','Matchless Gifts - Operator','Role does Sales, Packing, Delivery, Returns & Credit Notes, Delivery Notes & Payments','2017-11-20 07:18:54','2017-11-20 07:18:54','2017-11-20 07:21:08','2017-11-20 07:21:08',NULL,NULL),('78c9d9c5-59f7-4230-8be7-ee827a44ce23','Matchless Gifts - Manager','Role does Sales, Packing, Delivery, Returns & Credit Notes, Delivery Notes & Payments. Also does new products entry, Modify Product attributes, EOD Reports','2017-11-20 07:18:54','2017-11-20 07:18:54','2017-11-20 07:22:06','2017-11-20 07:22:06',NULL,NULL),('ad69bd08-f536-4fb9-8733-ed9633ed01b8','Congregation Devotee','A Devotee who is part of Bhakti Vriksha congregations attached to the temple',NULL,NULL,'2017-11-20 07:55:13','2017-11-20 07:55:13',NULL,NULL);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service-mapping`
--

DROP TABLE IF EXISTS `service-mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service-mapping` (
  `id` varchar(36) NOT NULL,
  `principal-type` varchar(512) DEFAULT NULL,
  `principal-id` varchar(255) DEFAULT NULL,
  `role-id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_service-mapping_service1_idx` (`role-id`),
  CONSTRAINT `fk_service-mapping_service1` FOREIGN KEY (`role-id`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service-mapping`
--

LOCK TABLES `service-mapping` WRITE;
/*!40000 ALTER TABLE `service-mapping` DISABLE KEYS */;
INSERT INTO `service-mapping` VALUES ('2c7355d1-65a7-40e0-b7de-5aa371b2a94b','USER','5a433f29-b16e-4707-b37f-18d2ff62e63a','ad69bd08-f536-4fb9-8733-ed9633ed01b8'),('3f3e4dc9-f969-454d-8f81-d4a76652a474','USER','e745e2d5-cce4-11e7-9839-20cf308ebc45','78c9d9c5-59f7-4230-8be7-ee827a44ce23'),('8dd7c2a5-9540-4ac5-b4f8-bbb6bd293ded','USER','eb095e3d-040e-4899-8d5c-d5a9f5ec9ac4','613e1ace-7c81-432c-8c15-dedd80fba567'),('9dfaff4f-fdef-4f1c-a70f-fc5f108d92ec','USER','eb095e3d-040e-4899-8d5c-d5a9f5ec9ac4','ad69bd08-f536-4fb9-8733-ed9633ed01b8'),('d4d6d4a0-511f-45d5-9d6d-108e32f70ebe','USER','e745e2d5-cce4-11e7-9839-20cf308ebc45','ad69bd08-f536-4fb9-8733-ed9633ed01b8');
/*!40000 ALTER TABLE `service-mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service-task-master`
--

DROP TABLE IF EXISTS `service-task-master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service-task-master` (
  `task-master-id` varchar(36) NOT NULL,
  `service-id` varchar(36) NOT NULL,
  PRIMARY KEY (`task-master-id`,`service-id`),
  KEY `fk_role-task-master_task-master1_idx` (`task-master-id`),
  KEY `fk_service-task-master_service1_idx` (`service-id`),
  CONSTRAINT `fk_role-task-master_task-master1` FOREIGN KEY (`task-master-id`) REFERENCES `task-master` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_service-task-master_service1` FOREIGN KEY (`service-id`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service-task-master`
--

LOCK TABLES `service-task-master` WRITE;
/*!40000 ALTER TABLE `service-task-master` DISABLE KEYS */;
INSERT INTO `service-task-master` VALUES ('5e8f218b-2eaa-4b38-a972-34b82e18d810','78c9d9c5-59f7-4230-8be7-ee827a44ce23'),('7e41d0ac-dc16-47e8-b15f-c8ee8bdab6a7','ad69bd08-f536-4fb9-8733-ed9633ed01b8');
/*!40000 ALTER TABLE `service-task-master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spiritual-level-master`
--

DROP TABLE IF EXISTS `spiritual-level-master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spiritual-level-master` (
  `id` varchar(36) NOT NULL,
  `level` varchar(30) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spiritual-level-master`
--

LOCK TABLES `spiritual-level-master` WRITE;
/*!40000 ALTER TABLE `spiritual-level-master` DISABLE KEYS */;
INSERT INTO `spiritual-level-master` VALUES ('394296e2-4db2-48f0-8c76-c5b17885837b','0','Guru Ashraya','2017-11-10 16:27:08','2017-11-10 16:27:08',NULL,NULL),('5f61bb4f-1a9d-4a72-8144-85d3fd3d6bd3','-1','Aspiring','2017-11-10 16:26:54','2017-11-10 16:26:54',NULL,NULL),('8ab6fd72-81c6-4da9-9be1-2c7b4a888542','-2','Curious','2017-11-10 16:26:43','2017-11-10 16:26:43',NULL,NULL),('913fd405-752b-4779-9ea7-80a29ce83398','2','Second Initiated','2017-11-10 16:27:27','2017-11-10 16:27:27',NULL,NULL),('d2d9ce87-8f1c-4848-a816-443fd92dbc8c','1','First Initiated','2017-11-10 16:27:20','2017-11-10 16:27:20',NULL,NULL);
/*!40000 ALTER TABLE `spiritual-level-master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task-master`
--

DROP TABLE IF EXISTS `task-master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task-master` (
  `id` varchar(36) NOT NULL,
  `task-name` varchar(50) NOT NULL,
  `application-route` varchar(255) NOT NULL,
  `task-description` varchar(100) DEFAULT NULL,
  `approval-rules-apply-ind` tinyint(4) NOT NULL DEFAULT '0',
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) DEFAULT NULL,
  `updated-by` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task-master`
--

LOCK TABLES `task-master` WRITE;
/*!40000 ALTER TABLE `task-master` DISABLE KEYS */;
INSERT INTO `task-master` VALUES ('3689ddbc-3912-4947-98ba-54f73b4a870a','Book Marathon: Deliver Book Request Order','/mg/bm/DeliverBookRequest','Deliver Book Request Order for Book Marathon Event',0,'2017-11-20 08:29:58','2017-11-20 08:29:58',NULL,NULL),('51cb2897-fe95-4ccc-843a-bdd087769af3','Book Marathon: Pack Book Request Order','/mg/bm/PackBookRequest','Pack Book Request Order for Book Marathon Event',0,'2017-11-20 08:29:24','2017-11-20 08:29:24',NULL,NULL),('5e8f218b-2eaa-4b38-a972-34b82e18d810','Book Marathon: Approve Books Request','/mg/bm/ApproveBookRequest','Approve online Book Request for Book Marathon Event',0,'2017-11-20 08:28:14','2017-11-20 08:28:14',NULL,NULL),('7e41d0ac-dc16-47e8-b15f-c8ee8bdab6a7','Book Marathon: Create Books Request','/mg/bm/CreateBookRequest','Create an online Book Request for Book Marathon Event',1,'2017-11-20 08:03:26','2017-11-20 08:03:26',NULL,NULL),('98f982a6-d5cb-47d8-8add-5aa8129cc28d','Book Marathon: Returns of Books','/mg/bm/ReturnBook','Returns of Unsold Books of Book Marathon Event',0,'2017-11-20 08:31:16','2017-11-20 08:31:16',NULL,NULL),('e8645b07-1b64-4e1e-b15b-85095bb2269c','Book Marathon: Settlement','/mg/bm/settlement','Accept payment and settle the individual accounts of Book Marathon Event',0,'2017-11-20 08:32:27','2017-11-20 08:32:27',NULL,NULL);
/*!40000 ALTER TABLE `task-master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temple`
--

DROP TABLE IF EXISTS `temple`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temple` (
  `id` varchar(36) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `contact-number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `contact-name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  `updated-by` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  `physical-address-id` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_temple_physical-address1_idx` (`physical-address-id`),
  CONSTRAINT `fk_temple_physical-address1` FOREIGN KEY (`physical-address-id`) REFERENCES `physical-address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temple`
--

LOCK TABLES `temple` WRITE;
/*!40000 ALTER TABLE `temple` DISABLE KEYS */;
INSERT INTO `temple` VALUES ('8bdbd155-cce4-11e7-9839-20cf308ebc45','ISKCON Cultural Centre','+91-080-26663773','SundarRupa Syam Dasa',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `temple` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temple-branch`
--

DROP TABLE IF EXISTS `temple-branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temple-branch` (
  `id` varchar(36) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `temple-id` varchar(16) CHARACTER SET utf8 DEFAULT NULL,
  `physical-address-id` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  `contact-number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `contact-name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `created-on` datetime DEFAULT NULL,
  `updated-on` datetime DEFAULT NULL,
  `created-by` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  `updated-by` varchar(36) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_temple-branch_temple1_idx` (`temple-id`),
  KEY `fk_temple-branch_physical-address1_idx` (`physical-address-id`),
  CONSTRAINT `fk_temple-branch_physical-address1` FOREIGN KEY (`physical-address-id`) REFERENCES `physical-address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_temple-branch_temple1` FOREIGN KEY (`temple-id`) REFERENCES `temple` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temple-branch`
--

LOCK TABLES `temple-branch` WRITE;
/*!40000 ALTER TABLE `temple-branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `temple-branch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-20 15:45:49
