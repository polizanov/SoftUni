USE `minions`;

INSERT INTO `towns` (`id`, `name`)
VAlUES 
('1', 'Sofia'),
('2', 'Plovdiv'),
('3', 'Varna');

INSERT INTO `minions` (`id`, `name`, `age`, `town_id`)
VALUES  ('1', 'Kevin', '22', '1'),
('2', 'Bob', '15', '3'),
('3', 'Steward', NULL, '2');

TRUNCATE TABLE `minions`;

DROP TABLE `minions`;
DROP TABLE `towns`;

DROP TABLE `people`;
CREATE TABLE `people`(
	`id` INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `picture` NVARCHAR(200),
    `height` DOUBLE(3, 2),
    `weight` DOUBLE(5, 2),
    `gender` CHAR(1) NOT NULL,
    `birthdate` DATETIME NOT NULL,
    `biography` BLOB
);

INSERT INTO `people` 
(`id`, `name`, `picture`, `height`, `weight`, `gender`, `birthdate`, `biography`)
VALUES
('1', 'ivanivanov', NULL, '1.80', '70.00', 'm', '2021-03-03 18:48:09', NULL),
('2', 'peshopesho', NULL, '1.96', '84.00', 'm', '2020-01-07 02:05:13', NULL),
('3', 'mariika', NULL, '1.68', '52.00', 'f', '2000-10-22 17:28:13', NULL),
('4', 'spas', NULL, '2.10', '110.00', 'm', '1999-05-18 11:11:10', NULL),
('5', 'toyant', NULL, '1.69', '77.00', 'm', '2003-12-12 22:32:15', NULL);

DROP TABLE `users`;
CREATE TABLE `users` (
	`id` INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `username` VARCHAR(30) UNIQUE NOT NULL,
    `password` CHAR(26) NOT NULL,
    `profile_picture` NVARCHAR(90),
    `last_login_time` DATETIME,
    `is_deleted` BOOLEAN
);


INSERT INTO `users`
(`id`, `username`, `password`, `profile_picture`, `last_login_time`, `is_deleted`)
VALUES
('1', 'sasho', '1234', NULL, '2022-08-18 16:23:33', '0'),
('2', 'ivan', '554554', NULL, '2021-12-31 23:58:14', '0'),
('3', 'stoyanstoyanov', 'asadasd', NULL, '2021-11-14 12:12:11', '0'),
('4', 'angelov', 'asdasdasd4', 	NULL, '2019-12-19 10:48:12', '0'),
('5', 'spaska', 'passs12', NULL, '2008-08-11 07:17:25', '1');

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users
PRIMARY KEY users(`id`, `username`);

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users
PRIMARY KEY users(`id`),
MODIFY COLUMN `username` VARCHAR(30) UNIQUE;


ALTER TABLE `users`
CHANGE COLUMN `last_login_time` `last_login_time` 
DATETIME DEFAULT NOW();

CREATE SCHEMA `movies`;
USE `movies`;

CREATE TABLE `directors`(
	`id` INT PRIMARY KEY,
    `director_name` VARCHAR(30) NOT NULL,
    `notes` VARCHAR(100)
);

CREATE TABLE `genres` (
	`id` INT PRIMARY KEY,
    `genre_name` VARCHAR(30) NOT NULL,
    `notes` VARCHAR(100)
);

CREATE TABLE `categories` (
	`id` INT PRIMARY KEY,
    `category_name` VARCHAR(30) NOT NULL,
    `notes` VARCHAR(100)
);

CREATE TABLE `movies` (
	`id` INT PRIMARY KEY,
    `title` VARCHAR(30) NOT NULL,
    `director_id` INT,
    `copyright_year` YEAR,
    `length` VARCHAR(20),
    `genre_id` INT,
    `category_id` INT,
    `rating` DOUBLE(2,1),
	`notes` VARCHAR(100)
);

INSERT INTO `directors` 
(`id`, `director_name`, `notes`) 
VALUES
('1', 'Ivan Dimitrov', NULL),
('2', 'Ivan Ivanov', NULL),
('3', 'Ivan Stoyanov', NULL),
('4', 'Mark Tven', NULL),
('5', 'Spas Spasov', NULL);

INSERT INTO `genres` 
(`id`, `genre_name`, `notes`)
VALUES
('1', 'action', NULL),
('2', 'drama', NULL),
('3', 'fantasy', NULL),
('4', 'drama-fentasy', NULL),
('5', 'action-drama', NULL);

INSERT INTO `categories`
(`id`, `category_name`, `notes`)
VALUES
('1', 'first', NULL),
('2', 'second', NULL),
('3', 'third', NULL),
('4', 'forth', NULL),
('5', 'fifth', NULL);

INSERT INTO `movies`
(`id`, `title`, `director_id`, `copyright_year`, `length`, `genre_id`, `category_id`, `rating`, `notes`)
VALUES
('1', 'first movie', '1', '2000', NULL, '1', '1', '3.3', NULL),
('2', 'second movie', '2', '2005', NULL, '2', '2', '3.6', NULL),
('3', 'third movie', '2', '1995', NULL, '2', '5', '3.4', NULL),
('4', 'forth movie', '4', '2002', NULL, '2', '3', '7.9', NULL),
('5', 'fifth movie', '5', '2022', NULL, '1', '1', '9.9', NULL);

CREATE SCHEMA `car_rental`;
USE `car_rental`;


CREATE TABLE `categories` (
	`id` INT PRIMARY KEY,
    `category` VARCHAR(30),
    `daily_rate` DOUBLE(3,1),
    `weekly_rate` DOUBLE(3,1),
    `monthly_rate` DOUBLE(3,1),
    `weekend_rate` DOUBLE(3,1)
);

INSERT INTO `categories` 
(`id`, `category`, `daily_rate`, `weekly_rate`, `monthly_rate`, `weekend_rate`)
VALUES 
('1', 'first category', '3.0', '4.1', '8.5', 10.0),
('2', 'second category', '3.0', '4.1', '8.5', 10.0),
('3', 'third category', '3.0', '4.1', '8.5', 10.0);

CREATE TABLE `cars`(
	`id` INT PRIMARY KEY,
    `plate_number` VARCHAR(20),
    `make` VARCHAR(10),
    `model` VARCHAR(20),
    `car_year` YEAR,
    `category_id` INT,
    `doors` INT,
    `picrute` NVARCHAR(200),
    `car_condition` varchar(10),
    `available` BOOLEAN
);

INSERT INTO `cars` 
(`id`, `plate_number`, `make`, `model`, `car_year`, `category_id`, `doors`, `picrute`, `car_condition`, `available`)
VALUES
('1', '1asd1', 'nodata', 'a3', '2001', '1', '2', NULL, 'used', '0'),
('2', 'sdadas', 'nodata', 'a4', '2005', '3', '4', NULL, 'used', '0'),
('3', 'sdad', 'nodata', 'a5', '2015', '3', '4', NULL, 'new', '0');

CREATE TABLE `employees` (
	`id` INT PRIMARY KEY,
    `first_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `title` VARCHAR(20),
    `notes` TEXT
);

INSERT INTO `employees`
(`id`, `first_name`, `last_name`, `title`, `notes`)
VALUES 
('1', 'Ivan', 'Ivanov', 'owner', NULL),
('2', 'Dimitar', 'Ivanov', 'worker', NULL),
('3', 'Pesho', 'Ivanov', 'merager', NULL);


CREATE TABLE `customers` (
	`id` INT PRIMARY KEY,
    `driver_licence_number` INT,
    `full_name` VARCHAR(50),
    `address` VARCHAR(20),
    `city` VARCHAR(20),
    `zip_code` VARCHAR(7),
    `notes` TEXT
);

INSERT INTO `customers` 
(`id`, `driver_licence_number`, `full_name`, `address`, `city`, `zip_code`, `notes`)
VALUES
('1', '1', 'Ivan Petrov', 'G.Petrov 18', 'Sofia', '1000', NULL),
('2', '12', 'Ivan Todorov', 'G.Petrov 18', 'Varna', '1000', NULL),
('3', '55', 'Todor Petrov', 'G.Petrov 18', 'Burgas', '1000', NULL);

CREATE TABLE `rental_orders`(
	`id` INT PRIMARY KEY,
    `employee_id` INT,
    `customer_id` INT,
    `car_id` INT,
    `car_condition` varchar(10),
    `tank_level` INT,
    `kilometrage_start` INT,
    `kilometrage_end` INT,
    `total_kilometrage` INT,
	`start_date` DATE,
    `end_date` DATE,
    `total_days` INT,
    `rate_applied` DOUBLE(3,1),
    `tax_rate` INT,
    `order_status` VARCHAR(20),
    `notes` TEXT
);

INSERT INTO `rental_orders` 
(`id`, `employee_id`, `customer_id`, `car_id`, `car_condition`, `tank_level`, `kilometrage_start`,
`kilometrage_end`, `total_kilometrage`, `start_date`, `end_date`, `total_days`, `rate_applied`, `tax_rate`, `order_status`, `notes`)
VALUES
('1', '1', '1', '1', 'new', '5', '120000', '120600', '120600', '2021-09-18', '2021-09-28', '10', '5.5', '2.0', 'completed', NULL),
('2', '2', '2', '2', 'used', '5', '120000', '120600', '120600', '2021-09-10', '2021-09-09', '10', '5.5', '2.0', 'completed', NULL),
('3', '2', '2', '2', 'new', '5', '120000', '120600', '120600', '2021-09-09', '2021-09-09', '10', '5.5', '2.0', 'completed', NULL);

CREATE SCHEMA `soft_uni`;
USE `soft_uni`;

CREATE TABLE `towns` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30)
);

INSERT INTO `towns` 
(`id`, `name`)
VALUES
('1', 'Sofia'),
('2', 'Plovdiv'),
('3', 'Varna'),
('4', 'Burgas');

CREATE TABLE `addresses` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `address_text` VARCHAR(20),
    `town_id` INT,
    FOREIGN KEY (town_id) REFERENCES towns(`id`)
);

CREATE TABLE `departments` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30)
);

INSERT INTO `departments`
(`id`, `name`)
VALUES
('1', 'Engineering'),
('2', 'Sales'),
('3', 'Marketing'),
('4', 'Software Development'),
('5', 'Quality Assurance');

DROP TABLE `employees`;
CREATE TABLE `employees` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30),
    `middle_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `job_title` VARCHAR(30),
    `department_id` INT,
    `hire_date` DATE,
    `salary` DOUBLE(6,2),
    `address_id` INT,
    FOREIGN KEY (department_id) REFERENCES departments(`id`),
    FOREIGN KEY (address_id) REFERENCES addresses(`id`)
);

INSERT INTO `employees` 
(`id`, `first_name`, `middle_name`, `last_name`, `job_title`, `department_id`, `hire_date`, `salary`)
VALUES
('1', 'Ivan', 'Ivanov', 'Ivanov', '.NET Developer', '4', '2013-02-01', '3500.00'),
('2', 'Petar', 'Petrov', 'Petrov', 'Senior Engineer', '1', '2004-03-02', '4000.00'),
('3', 'Maria', 'Petrova', 'Ivanova', 'Intern', '5', '2016-08-28', '525.25'),
('4', 'Georgi', 'Terziev', 'Ivanov', 'CEO', '2', '2007-12-09', '3000.00'),
('5', 'Peter', 'Pan', 'Pan', 'Intern', '4', '2016-08-28', '599.88');


SELECT * FROM `towns`;
SELECT * FROM `departments`;
SELECT * FROM `employees`;

SELECT * FROM `towns` ORDER BY `name` ASC;
SELECT * FROM `departments` ORDER BY `name` ASC;
SELECT * FROM `employees` ORDER BY `salary` DESC;

SELECT `name` FROM `towns` ORDER BY `name` ASC;
SELECT `name` FROM `departments` ORDER BY `name` ASC;
SELECT `first_name`, `last_name`, `job_title`, `salary` FROM `employees` ORDER BY `salary` DESC;

UPDATE  `employees`
SET `salary` = `salary` * 1.1;
SELECT `salary` FROM `employees`;


DELETE FROM `occupancies`;


