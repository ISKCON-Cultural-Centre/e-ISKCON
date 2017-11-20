-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema icc
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `icc` ;

-- -----------------------------------------------------
-- Schema icc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `icc` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema chromispos
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mg
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mg` ;

-- -----------------------------------------------------
-- Schema mg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mg` DEFAULT CHARACTER SET utf8 ;
USE `icc` ;

-- -----------------------------------------------------
-- Table `icc`.`deeksha-guru`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`deeksha-guru` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(100) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`electronic-address-type-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`electronic-address-type-master` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(50) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`electronic-address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`electronic-address` (
  `id` VARCHAR(36) NOT NULL,
  `electronic-address-type-master-id` VARCHAR(36) NULL,
  `electronic-address` VARCHAR(50) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_electronic-address_electronic-address-type-master1_idx` (`electronic-address-type-master-id` ASC),
  CONSTRAINT `fk_electronic-address_electronic-address-type-master1`
    FOREIGN KEY (`electronic-address-type-master-id`)
    REFERENCES `icc`.`electronic-address-type-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`physical-address-type-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`physical-address-type-master` (
  `id` VARCHAR(36) NOT NULL,
  `address-type` VARCHAR(50) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`physical-address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`physical-address` (
  `id` VARCHAR(36) NOT NULL,
  `address-type-master-id` VARCHAR(36) NULL,
  `address-line-1` VARCHAR(100) NULL,
  `address-line-2` VARCHAR(100) NULL,
  `address-area` VARCHAR(100) NULL,
  `address-city` VARCHAR(100) NULL,
  `address-country` VARCHAR(100) NULL,
  `address-pin` VARCHAR(10) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_physical-address_address-type-master1_idx` (`address-type-master-id` ASC),
  CONSTRAINT `fk_physical-address_address-type-master1`
    FOREIGN KEY (`address-type-master-id`)
    REFERENCES `icc`.`physical-address-type-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`spiritual-level-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`spiritual-level-master` (
  `id` VARCHAR(36) NOT NULL,
  `level` VARCHAR(30) NULL,
  `description` VARCHAR(50) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`devotee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee` (
  `id` VARCHAR(36) NOT NULL,
  `legal-name` VARCHAR(100) NULL,
  `spiritual-name` VARCHAR(100) NULL DEFAULT NULL,
  `gender` CHAR(1) NULL DEFAULT NULL,
  `physical-address-id` VARCHAR(36) NULL,
  `electronic-address-id` VARCHAR(36) NULL,
  `shiksha-level` VARCHAR(100) NULL DEFAULT NULL,
  `spiritual-level-master-id` VARCHAR(36) NULL,
  `realm` VARCHAR(512) NULL DEFAULT NULL,
  `username` VARCHAR(512) NULL DEFAULT NULL,
  `password` VARCHAR(512) NULL,
  `email` VARCHAR(512) NULL,
  `emailVerified` TINYINT(1) NULL DEFAULT NULL,
  `verificationToken` VARCHAR(512) NULL DEFAULT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_devotee_id_idx` (`id` ASC),
  INDEX `fk_devotee_spiritual-level-master1_idx` (`spiritual-level-master-id` ASC),
  INDEX `fk_devotee_physical-address1_idx` (`physical-address-id` ASC),
  INDEX `fk_devotee_electronic-address1_idx` (`electronic-address-id` ASC),
  CONSTRAINT `fk_devotee_electronic-address1`
    FOREIGN KEY (`electronic-address-id`)
    REFERENCES `icc`.`electronic-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee_physical-address1`
    FOREIGN KEY (`physical-address-id`)
    REFERENCES `icc`.`physical-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee_spiritual-level-master1`
    FOREIGN KEY (`spiritual-level-master-id`)
    REFERENCES `icc`.`spiritual-level-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`relationship-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`relationship-master` (
  `id` VARCHAR(36) NOT NULL,
  `relation-name` VARCHAR(100) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`devotee-karmi-family`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-karmi-family` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `family-name` VARCHAR(100) CHARACTER SET 'utf8' NULL,
  `relationship-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_devotee-karmi-family_relationship-master1_idx` (`relationship-id` ASC),
  INDEX `fk_devotee-karmi-family_devotee2_idx` (`devotee-id` ASC),
  CONSTRAINT `fk_devotee-karmi-family_devotee2`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee-karmi-family_relationship-master1`
    FOREIGN KEY (`relationship-id`)
    REFERENCES `icc`.`relationship-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`accesstoken`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`accesstoken` (
  `id` VARCHAR(255) CHARACTER SET 'utf8' NOT NULL,
  `ttl` INT(11) NULL DEFAULT NULL,
  `scopes` MEDIUMTEXT CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `userId` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`devotee-spiritual-family`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-spiritual-family` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `guiding-devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_devotee-spiritual-family_devotee1_idx` (`devotee-id` ASC),
  INDEX `fk_devotee-spiritual-family_devotee2_idx` (`guiding-devotee-id` ASC),
  CONSTRAINT `fk_devotee-spiritual-family_devotee1`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee-spiritual-family_devotee2`
    FOREIGN KEY (`guiding-devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`acl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`acl` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `property` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `accessType` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `permission` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `principalType` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `principalId` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`circle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`circle` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(100) NULL,
  `leader-devotee-id` VARCHAR(36) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_circle` (`id` ASC),
  INDEX `fk_circle_devotee1_idx` (`leader-devotee-id` ASC),
  CONSTRAINT `fk_circle_devotee1`
    FOREIGN KEY (`leader-devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`outreach-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`outreach-master` (
  `id` VARCHAR(36) COLLATE 'utf8_unicode_ci' NOT NULL,
  `description` VARCHAR(100) COLLATE 'utf8_unicode_ci' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`event-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`event-master` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `event-name` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`devotee-event-calendar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-event-calendar` (
  `devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `event-date` DATE NOT NULL,
  `event-master-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`devotee-id`),
  INDEX `fk_devotee-event-calendar_devotee2_idx` (`devotee-id` ASC),
  INDEX `fk_devotee-event-calendar_event-master1_idx` (`event-master-id` ASC),
  CONSTRAINT `fk_devotee-event-calendar_devotee2`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_devotee-event-calendar_event-master1`
    FOREIGN KEY (`event-master-id`)
    REFERENCES `icc`.`event-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`donation-type-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`donation-type-master` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `donation-type-name` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`new-contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`new-contact` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `name` VARCHAR(255) CHARACTER SET 'utf8' NULL,
  `physical-address-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `electronic-address-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `reference` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `comments` VARCHAR(45) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_table1_physical-address1_idx` (`physical-address-id` ASC),
  INDEX `fk_table1_electronic-address1_idx` (`electronic-address-id` ASC),
  CONSTRAINT `fk_table1_electronic-address1`
    FOREIGN KEY (`electronic-address-id`)
    REFERENCES `icc`.`electronic-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_physical-address1`
    FOREIGN KEY (`physical-address-id`)
    REFERENCES `icc`.`physical-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`payment-mode-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`payment-mode-master` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `payment-mode-name` VARCHAR(20) CHARACTER SET 'utf8' NULL,
  `active-ind` TINYINT(4) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`payment` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `date` DATE NOT NULL,
  `payment-ref-number` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `donation-type-master-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `payment-mode-master-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_payment_devotee2_idx` (`devotee-id` ASC),
  INDEX `fk_payment_donation-type-master1_idx` (`donation-type-master-id` ASC),
  INDEX `fk_payment_payment-mode-master1_idx` (`payment-mode-master-id` ASC),
  CONSTRAINT `fk_payment_devotee2`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_donation-type-master1`
    FOREIGN KEY (`donation-type-master-id`)
    REFERENCES `icc`.`donation-type-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_payment-mode-master1`
    FOREIGN KEY (`payment-mode-master-id`)
    REFERENCES `icc`.`payment-mode-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`pledge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`pledge` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `start-date` DATE NOT NULL,
  `end-date` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `pledge-amount` DECIMAL(15,2) NOT NULL,
  `instalment-count` SMALLINT NULL,
  `pause-ind` TINYINT NOT NULL,
  `devotee-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `donation-type-master-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pledge_devotee2_idx` (`devotee-id` ASC),
  INDEX `fk_pledge_donation-type-master1_idx` (`donation-type-master-id` ASC),
  CONSTRAINT `fk_pledge_devotee2`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pledge_donation-type-master1`
    FOREIGN KEY (`donation-type-master-id`)
    REFERENCES `icc`.`donation-type-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`pledge-payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`pledge-payment` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `instalment-number` SMALLINT(6) NOT NULL,
  `payment-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `pledge-date` DATE NULL,
  `pledge-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pledge-payment_payment1_idx` (`payment-id` ASC),
  INDEX `fk_pledge-payment_pledge1_idx` (`pledge-id` ASC),
  CONSTRAINT `fk_pledge-payment_payment1`
    FOREIGN KEY (`payment-id`)
    REFERENCES `icc`.`payment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pledge-payment_pledge1`
    FOREIGN KEY (`pledge-id`)
    REFERENCES `icc`.`pledge` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`rolemapping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`rolemapping` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `principalType` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `principalId` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `roleId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `principalId` (`principalId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`temple`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`temple` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NULL,
  `contact-number` VARCHAR(20) CHARACTER SET 'utf8' NULL,
  `contact-name` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `physical-address-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_temple_physical-address1_idx` (`physical-address-id` ASC),
  CONSTRAINT `fk_temple_physical-address1`
    FOREIGN KEY (`physical-address-id`)
    REFERENCES `icc`.`physical-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`temple-branch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`temple-branch` (
  `id` VARCHAR(36) CHARACTER SET 'utf8' NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NULL,
  `temple-id` VARCHAR(16) CHARACTER SET 'utf8' NULL,
  `physical-address-id` VARCHAR(36) CHARACTER SET 'utf8' NULL,
  `contact-number` VARCHAR(20) CHARACTER SET 'utf8' NULL,
  `contact-name` VARCHAR(50) CHARACTER SET 'utf8' NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_temple-branch_temple1_idx` (`temple-id` ASC),
  INDEX `fk_temple-branch_physical-address1_idx` (`physical-address-id` ASC),
  CONSTRAINT `fk_temple-branch_physical-address1`
    FOREIGN KEY (`physical-address-id`)
    REFERENCES `icc`.`physical-address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_temple-branch_temple1`
    FOREIGN KEY (`temple-id`)
    REFERENCES `icc`.`temple` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`task-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`task-master` (
  `id` VARCHAR(36) NOT NULL,
  `task-name` VARCHAR(50) NOT NULL,
  `application-route` VARCHAR(255) NOT NULL,
  `task-description` VARCHAR(100) NULL,
  `approval-rules-apply-ind` TINYINT NOT NULL DEFAULT 0,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`service` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(512) NOT NULL,
  `description` VARCHAR(512) NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `modified` DATETIME NULL DEFAULT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`service-task-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`service-task-master` (
  `task-master-id` VARCHAR(36) NOT NULL,
  `service-id` VARCHAR(36) NOT NULL,
  INDEX `fk_role-task-master_task-master1_idx` (`task-master-id` ASC),
  PRIMARY KEY (`task-master-id`, `service-id`),
  INDEX `fk_service-task-master_service1_idx` (`service-id` ASC),
  CONSTRAINT `fk_role-task-master_task-master1`
    FOREIGN KEY (`task-master-id`)
    REFERENCES `icc`.`task-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_service-task-master_service1`
    FOREIGN KEY (`service-id`)
    REFERENCES `icc`.`service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`department` (
  `id` VARCHAR(36) NOT NULL,
  `temple-id` VARCHAR(36) NOT NULL,
  `department-name` VARCHAR(50) NOT NULL,
  `department-leader-devotee-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  INDEX `fk_department_temple1_idx` (`temple-id` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_department_devotee1_idx` (`department-leader-devotee-id` ASC),
  CONSTRAINT `fk_department_temple1`
    FOREIGN KEY (`temple-id`)
    REFERENCES `icc`.`temple` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_department_devotee1`
    FOREIGN KEY (`department-leader-devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`department-service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`department-service` (
  `department-id` VARCHAR(36) NOT NULL,
  `service-id` VARCHAR(36) NOT NULL,
  INDEX `fk_department-role_department1_idx` (`department-id` ASC),
  PRIMARY KEY (`department-id`, `service-id`),
  INDEX `fk_department-role_service1_idx` (`service-id` ASC),
  CONSTRAINT `fk_department-role_department1`
    FOREIGN KEY (`department-id`)
    REFERENCES `icc`.`department` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_department-role_service1`
    FOREIGN KEY (`service-id`)
    REFERENCES `icc`.`service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`approval-rule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`approval-rule` (
  `id` VARCHAR(36) NOT NULL,
  `approval-artefact-id` VARCHAR(36) NOT NULL,
  `sequence-no` SMALLINT NOT NULL,
  `role-id` INT(11) NOT NULL,
  `last-approval-sequence-ind` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`approval-que`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`approval-que` (
  `id` VARCHAR(36) NOT NULL,
  `approver-id` VARCHAR(36) NOT NULL,
  `artefact-instance-id` VARCHAR(36) NOT NULL,
  `requesting-devotee-id` VARCHAR(36) NOT NULL,
  `approval-sequence-no` SMALLINT NOT NULL,
  `last-approver-ind` TINYINT NOT NULL DEFAULT 0,
  `approval-ind` TINYINT NULL DEFAULT 0,
  `activated-ind` TINYINT NOT NULL DEFAULT 0,
  `approver-remarks` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_approval-que_devotee1_idx` (`approver-id` ASC),
  INDEX `fk_approval-que_devotee3_idx` (`requesting-devotee-id` ASC),
  CONSTRAINT `fk_approval-que_devotee1`
    FOREIGN KEY (`approver-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_approval-que_devotee3`
    FOREIGN KEY (`requesting-devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`approval-artefact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`approval-artefact` (
  `id` VARCHAR(36) NOT NULL,
  `artefact-name` VARCHAR(50) NULL,
  `description` VARCHAR(100) NOT NULL,
  `approval-after-action-message` VARCHAR(50) NOT NULL,
  `rejection-after-action-message` VARCHAR(50) NOT NULL,
  `approval-artefact-entity-name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `icc`.`circle-devotee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`circle-devotee` (
  `devotee-id` VARCHAR(36) NOT NULL,
  `circle-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  INDEX `fk_table1_devotee1_idx` (`devotee-id` ASC),
  INDEX `fk_circle-devotee_circle1_idx` (`circle-id` ASC),
  PRIMARY KEY (`devotee-id`, `circle-id`),
  CONSTRAINT `fk_table1_devotee1`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_circle-devotee_circle1`
    FOREIGN KEY (`circle-id`)
    REFERENCES `icc`.`circle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`service-mapping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`service-mapping` (
  `id` VARCHAR(36) NOT NULL,
  `principal-type` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `principal-id` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `role-id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_service-mapping_service1_idx` (`role-id` ASC),
  CONSTRAINT `fk_service-mapping_service1`
    FOREIGN KEY (`role-id`)
    REFERENCES `icc`.`service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mg` ;

-- -----------------------------------------------------
-- Table `mg`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book` (
  `id` VARCHAR(36) NOT NULL,
  `REFERENCE` VARCHAR(255) NOT NULL,
  `bar-code` VARCHAR(255) NOT NULL,
  `bar-code-type` VARCHAR(50) NULL DEFAULT NULL,
  `title` VARCHAR(255) NOT NULL,
  `maximum-retail-price` DOUBLE NOT NULL DEFAULT '0',
  `image` MEDIUMBLOB NULL DEFAULT NULL,
  `hsn-code` VARCHAR(50) NULL DEFAULT NULL,
  `discounted` VARCHAR(5) NULL DEFAULT 'no',
  `discount-allowed-ind` BIT(1) NOT NULL DEFAULT b'1',
  `manage-stock` BIT(1) NULL DEFAULT b'1',
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `PRODUCTS_INX_0` (`REFERENCE` ASC),
  UNIQUE INDEX `PRODUCTS_INX_1` (`bar-code` ASC),
  INDEX `PRODUCTS_NAME_INX` (`title` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-request-status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-request-status` (
  `id` VARCHAR(16) NOT NULL,
  `request-status` VARCHAR(20) NOT NULL,
  `request-description` VARCHAR(50) NOT NULL,
  `crud-allowed` VARCHAR(4) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-return-detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-return-detail` (
  `book-marathon-return-id` VARCHAR(36) NOT NULL,
  `book-id` VARCHAR(36) NOT NULL,
  `return-qty` INT NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`book-marathon-return-id`, `book-id`),
  INDEX `fk_book-marathon-return-detail_book1_idx` (`book-id` ASC),
  CONSTRAINT `fk_book-marathon-return-detail_book1`
    FOREIGN KEY (`book-id`)
    REFERENCES `mg`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-order-detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-order-detail` (
  `book-marathon-order-id` VARCHAR(16) NOT NULL,
  `book-id` VARCHAR(36) NOT NULL,
  `request-qty` INT NOT NULL,
  `approved-qty` INT NULL,
  `packed-qty` INT NULL,
  `mrp` DECIMAL(10,2) NOT NULL,
  `sell-price` DECIMAL(10,2) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`book-id`),
  INDEX `fk_book-marathon-order-detail_book1_idx` (`book-id` ASC),
  CONSTRAINT `fk_book-marathon-order-detail_book1`
    FOREIGN KEY (`book-id`)
    REFERENCES `mg`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mg`.`book-language-map`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-language-map` (
  `book-id` VARCHAR(36) NOT NULL,
  `english-book-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`book-id`, `english-book-id`),
  INDEX `fk_book-language-map_product2_idx` (`english-book-id` ASC),
  CONSTRAINT `fk_book-language-map_product1`
    FOREIGN KEY (`book-id`)
    REFERENCES `mg`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book-language-map_product2`
    FOREIGN KEY (`english-book-id`)
    REFERENCES `mg`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-return`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-return` (
  `id` VARCHAR(36) NOT NULL,
  `date` DATE NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  INDEX `fk_table1_devotee1_idx` (`devotee-id` ASC),
  CONSTRAINT `fk_table1_devotee1`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-settlement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-settlement` (
  `id` VARCHAR(36) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  `settlement-date` DATE NOT NULL,
  `credit-amount` DECIMAL(15,2) NOT NULL,
  `return-amount` DECIMAL(15,2) NOT NULL DEFAULT 0,
  `balance-amount` DECIMAL(15,2) NOT NULL,
  `settlement-ind` CHAR(1) NOT NULL DEFAULT 'N',
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  INDEX `fk_table2_devotee1_idx` (`devotee-id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_table2_devotee1`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-order` (
  `id` VARCHAR(16) NOT NULL,
  `request-date-time` DATETIME NOT NULL,
  `request-no` INT NOT NULL,
  `order-no` INT NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  `book-request-status-id` VARCHAR(16) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  INDEX `fk_table1_book-request-status1_idx` (`book-request-status-id` ASC),
  INDEX `fk_table1_devotee2_idx` (`devotee-id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_table1_book-request-status1`
    FOREIGN KEY (`book-request-status-id`)
    REFERENCES `mg`.`book-request-status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_devotee2`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mg`.`book-marathon-reported-sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mg`.`book-marathon-reported-sale` (
  `id` VARCHAR(36) NOT NULL,
  `date` DATE NOT NULL,
  `sale-quantity` INT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  `book-id` VARCHAR(36) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  INDEX `fk_book-marathon-reported-sale_book1_idx` (`book-id` ASC),
  INDEX `fk_book-marathon-reported-sale_devotee1_idx` (`devotee-id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_tbook-marathon-reported-sale_book1`
    FOREIGN KEY (`book-id`)
    REFERENCES `mg`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book-marathon-reported-sale_devotee1`
    FOREIGN KEY (`devotee-id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
