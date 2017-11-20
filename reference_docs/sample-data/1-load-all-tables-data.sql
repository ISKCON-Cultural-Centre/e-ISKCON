use icc;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;

delete from `circle-devotee`;
delete from circle;
delete from `department-service`;
delete from department;
delete from devotee;
delete from `service-task-master`;
delete from service;
delete from `spiritual-level-master`;
delete from `task-master`;
delete from temple;
delete from `service-mapping`;


source ~/software/eISKCON/reference_docs/sample-data/circle-devotee.sql;
source ~/software/eISKCON/reference_docs/sample-data/circle.sql;
source ~/software/eISKCON/reference_docs/sample-data/department-service.sql;
source ~/software/eISKCON/reference_docs/sample-data/department.sql;
source ~/software/eISKCON/reference_docs/sample-data/devotee.sql;
source ~/software/eISKCON/reference_docs/sample-data/service-task-master.sql;
source ~/software/eISKCON/reference_docs/sample-data/service.sql;
source ~/software/eISKCON/reference_docs/sample-data/spiritual-level-master.sql;
source ~/software/eISKCON/reference_docs/sample-data/task-master.sql;
source ~/software/eISKCON/reference_docs/sample-data/temple.sql;
source ~/software/eISKCON/reference_docs/sample-data/service-mapping.sql

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
