-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema icc
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `icc` ;

-- -----------------------------------------------------
-- Schema icc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `icc` DEFAULT CHARACTER SET latin1 ;
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
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`spiritual-level-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`spiritual-level-master` (
  `id` VARCHAR(36) NOT NULL,
  `level` VARCHAR(30) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`devotee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee` (
  `id` VARCHAR(36) NOT NULL,
  `legal-name` VARCHAR(100) NOT NULL,
  `spiritual-name` VARCHAR(100) NULL DEFAULT NULL,
  `gender` CHAR(1) NOT NULL,
  `contact-number` VARCHAR(20) NULL DEFAULT NULL,
  `alt-contact-number` VARCHAR(20) NULL DEFAULT NULL,
  `email-id` VARCHAR(100) NULL DEFAULT NULL,
  `shiksha-level` VARCHAR(100) NULL DEFAULT NULL,
  `address-line-1` VARCHAR(255) NULL DEFAULT NULL,
  `address-line-2` VARCHAR(100) NULL DEFAULT NULL,
  `address-area` VARCHAR(50) NULL DEFAULT NULL,
  `address-city` VARCHAR(50) NULL DEFAULT NULL,
  `address-pin` VARCHAR(10) NULL DEFAULT NULL,
  `source` VARCHAR(100) NOT NULL,
  `spiritual-level-master-id` VARCHAR(36) NOT NULL,
  `realm` VARCHAR(512) NULL DEFAULT NULL,
  `username` VARCHAR(512) NULL DEFAULT NULL,
  `password` VARCHAR(512) NOT NULL,
  `email` VARCHAR(512) NOT NULL,
  `emailVerified` TINYINT(1) NULL DEFAULT NULL,
  `verificationToken` VARCHAR(512) NULL DEFAULT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_devotee_id_idx` (`id` ASC),
  INDEX `fk_devotee_spiritual-level-master1_idx` (`spiritual-level-master-id` ASC),
  CONSTRAINT `fk_devotee_spiritual-level-master1`
    FOREIGN KEY (`spiritual-level-master-id`)
    REFERENCES `icc`.`spiritual-level-master` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`relationship-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`relationship-master` (
  `id` VARCHAR(36) NOT NULL,
  `relation-name` VARCHAR(100) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`devotee-karmi-family`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-karmi-family` (
  `id` VARCHAR(36) NOT NULL,
  `family-name` VARCHAR(100) NOT NULL,
  `relationship-id` VARCHAR(36) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`devotee-spiritual-family`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-spiritual-family` (
  `id` VARCHAR(36) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  `guiding-devotee-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`new-contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`new-contact` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `addressLine1` VARCHAR(255) NULL DEFAULT NULL,
  `addressArea` VARCHAR(255) NULL DEFAULT NULL,
  `addressCity` VARCHAR(255) NULL DEFAULT NULL,
  `addressPin` VARCHAR(20) NULL DEFAULT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `reference` VARCHAR(100) NULL DEFAULT NULL,
  `comments` VARCHAR(45) NULL DEFAULT NULL,
  `altPhone` VARCHAR(45) NULL DEFAULT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 987
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`outreach-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`outreach-master` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `icc`.`temple`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`temple` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `address-line-1` VARCHAR(100) NOT NULL,
  `address-line-2` VARCHAR(100) NOT NULL,
  `address-area` VARCHAR(100) NOT NULL,
  `address-city` VARCHAR(100) NOT NULL,
  `address-country` VARCHAR(100) NOT NULL,
  `address-pin` VARCHAR(10) NOT NULL,
  `contact-number` VARCHAR(20) NOT NULL,
  `contact-name` VARCHAR(50) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`temple-branch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`temple-branch` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `temple-id` VARCHAR(16) NOT NULL,
  `address-line-1` VARCHAR(100) NOT NULL,
  `address-line-2` VARCHAR(100) NOT NULL,
  `address-area` VARCHAR(100) NOT NULL,
  `address-city` VARCHAR(100) NOT NULL,
  `address-country` VARCHAR(100) NOT NULL,
  `address-pin` VARCHAR(10) NOT NULL,
  `contact-number` VARCHAR(20) NOT NULL,
  `contact-name` VARCHAR(50) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_temple-branch_temple1_idx` (`temple-id` ASC),
  CONSTRAINT `fk_temple-branch_temple1`
    FOREIGN KEY (`temple-id`)
    REFERENCES `icc`.`temple` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`accesstoken`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`accesstoken` (
  `id` VARCHAR(255) NOT NULL,
  `ttl` INT(11) NULL DEFAULT NULL,
  `scopes` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `userId` VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`acl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`acl` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(512) NULL DEFAULT NULL,
  `property` VARCHAR(512) NULL DEFAULT NULL,
  `accessType` VARCHAR(512) NULL DEFAULT NULL,
  `permission` VARCHAR(512) NULL DEFAULT NULL,
  `principalType` VARCHAR(512) NULL DEFAULT NULL,
  `principalId` VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`circle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`circle` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(100) NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`circle-devotee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`circle-devotee` (
  `circle_id` VARCHAR(36) NOT NULL,
  `devotee_id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`circle_id`, `devotee_id`),
  INDEX `fk_circle-devotee_devotee1_idx` (`devotee_id` ASC),
  CONSTRAINT `fk_circle-devotee_circle1`
    FOREIGN KEY (`circle_id`)
    REFERENCES `icc`.`circle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_circle-devotee_devotee1`
    FOREIGN KEY (`devotee_id`)
    REFERENCES `icc`.`devotee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(512) NOT NULL,
  `description` VARCHAR(512) NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `modified` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`rolemapping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`rolemapping` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `principalType` VARCHAR(512) NULL DEFAULT NULL,
  `principalId` VARCHAR(255) NULL DEFAULT NULL,
  `roleId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `principalId` (`principalId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `icc`.`donation-type-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`donation-type-master` (
  `id` VARCHAR(36) NOT NULL,
  `donation-type-name` VARCHAR(50) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`payment-mode-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`payment-mode-master` (
  `id` VARCHAR(36) NOT NULL,
  `payment-mode-name` VARCHAR(20) NOT NULL,
  `active-ind` TINYINT(4) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`payment` (
  `id` VARCHAR(36) NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  `date` DATE NOT NULL,
  `payment-ref-number` VARCHAR(50) NULL,
  `donation-type-master-id` VARCHAR(36) NOT NULL,
  `payment-mode-master-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`pledge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`pledge` (
  `id` VARCHAR(36) NOT NULL,
  `start-date` DATE NOT NULL,
  `end-date` VARCHAR(50) NULL,
  `pledge-amount` DECIMAL(15,2) NOT NULL,
  `instalment-count` SMALLINT NULL,
  `pause-ind` TINYINT NOT NULL,
  `devotee-id` VARCHAR(36) NOT NULL,
  `donation-type-master-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`pledge-payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`pledge-payment` (
  `id` VARCHAR(36) NOT NULL,
  `instalment-number` SMALLINT(6) NOT NULL,
  `payment-id` VARCHAR(36) NOT NULL,
  `pledge-date` DATE NULL,
  `pledge-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`event-master`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`event-master` (
  `id` VARCHAR(36) NOT NULL,
  `event-name` VARCHAR(50) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `icc`.`devotee-event-calendar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `icc`.`devotee-event-calendar` (
  `devotee-id` VARCHAR(36) NOT NULL,
  `event-date` DATE NOT NULL,
  `event-master-id` VARCHAR(36) NOT NULL,
  `created-on` DATETIME NULL DEFAULT NULL,
  `updated-on` DATETIME NULL DEFAULT NULL,
  `created-by` VARCHAR(36) NULL DEFAULT NULL,
  `updated-by` VARCHAR(36) NULL DEFAULT NULL,
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
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
