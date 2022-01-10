DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NULL,
  `last_name` VARCHAR(50) NULL,
  PRIMARY KEY (`id`));
  
  DROP TABLE IF EXISTS `categories`;
  CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));
  
  DROP TABLE IF EXISTS `products`;
 CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`));
  