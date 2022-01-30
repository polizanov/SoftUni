CREATE SCHEMA `people`;
USE `people`;

CREATE TABLE `people` (
	`person_id` INT NOT NULL,
    `first_name` VARCHAR(20),
    `salary` DOUBLE(7,2),
    `passport_id` INT UNIQUE
);

CREATE TABLE `passports` (
	`passport_id` INT NOT NULL UNIQUE,
    `passport_number` VARCHAR(20) UNIQUE
);

ALTER TABLE `people`
ADD PRIMARY KEY (`person_id`);

ALTER TABLE `people`
ADD CONSTRAINT `fk_people_passports`
FOREIGN KEY (`passport_id`) REFERENCES passports(passport_id);

INSERT INTO `passports` 
(`passport_id`, `passport_number`)
VALUES 
('101', 'N34FG21B'),
('102', 'K65LO4R7'),
('103', 'ZE657QP2');

INSERT INTO `people`
(`person_id`, `first_name`, `salary`, `passport_id`)
VALUES
('1', 'Roberto', ROUND('43300', 2), '102'),
('2', 'Tom', ROUND('56100', 2), '103'),
('3', 'Yana', ROUND('60200', 2), '101');


CREATE SCHEMA `manufacture`;
USE `manufacture`;

CREATE TABLE `manufacturers` (
	`manufacturer_id` INT PRIMARY KEY NOT NULL,
    `name` VARCHAR(20),
    `established_on` DATE
);

CREATE TABLE `models` (
	`model_id` INT PRIMARY KEY NOT NULL,
    `name` VARCHAR(20),
	`manufacturer_id` INT,
    CONSTRAINT `modesls_man_id`
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(manufacturer_id)
);

INSERT INTO `manufacturers` 
(`manufacturer_id`, `name`, `established_on`)
VALUES 
('1', 'BMW', '1916-03-01'),
('2', 'Tesla', '2003-01-01'),
('3', 'Lada', '1966-05-01');

INSERT INTO `models` 
(`model_id`, `name`, `manufacturer_id`)
VALUES
('101', 'X1', '1'),
('102', 'i6', '1'),
('103', 'Model S', '2'),
('104', 'Model X', '2'),
('105', 'Model 3', '2'),
('106', 'Nova', '3');

CREATE SCHEMA `univercity`;
USE `univercity`;

CREATE TABLE `students` (
	`student_id` INT PRIMARY KEY NOT NULL,
	`name` VARCHAR(20)
);

CREATE TABLE `exams` (
	`exam_id` INT PRIMARY KEY NOT NULL,
	`name` VARCHAR(20)
);

CREATE TABLE `students_exams` (
	`student_id` INT NOT NULL,
	`exam_id` INT NOT NULL,
    CONSTRAINT `pk_student_exams` PRIMARY KEY (student_id, exam_id),
    CONSTRAINT `stexams_students_exams`
    FOREIGN KEY (student_id) REFERENCES students(student_id),
	FOREIGN KEY (exam_id) REFERENCES exams(exam_id)
);

INSERT INTO `students` 
(`student_id`, `name`)
VALUES
('1', 'Mila'),
('2', 'Toni'),
('3', 'Ron');

INSERT INTO `exams` 
(`exam_id`, `name`)
VALUES
('101', 'Spring MVC'),
('102', 'Neo4j'),
('103', 'Oracle 11g');

INSERT INTO `students_exams` 
(`student_id`, `exam_id`)
VALUES
('1', '101'),
('1', '102'),
('2', '101'),
('3', '103'),
('2', '102'),
('2', '103');

CREATE TABLE `teachers` (
	`teacher_id` INT PRIMARY KEY,
    `name` VARCHAR(20),
    `manager_id` INT
);

INSERT INTO `teachers`
(`teacher_id`, `name`, `manager_id`)
VALUES
('101', 'John', NULL),
('102', 'Maya', '106'),
('103', 'Silvia', '106'),
('104', 'Ted', '105'),
('105', 'Mark', '101'),
('106', 'Greta', '101');

ALTER TABLE `teachers`
ADD CONSTRAINT `fk_manager`
FOREIGN KEY (manager_id) REFERENCES teachers(teacher_id);

CREATE SCHEMA `univercisty`;
USE `univercisty`;

CREATE TABLE `cities` (
`city_id` INT NOT NULL,
`name` VARCHAR(50) NULL,
PRIMARY KEY (`city_id`));
  
CREATE TABLE `item_types` (
`item_type_id` INT NOT NULL,
`name` VARCHAR(50) NULL,
PRIMARY KEY (`item_type_id`));
  
CREATE TABLE `customers` (
`customer_id` INT NOT NULL,
`name` VARCHAR(50) NULL,
`birthday` DATE NULL,
`city_id` INT NULL,
PRIMARY KEY (`customer_id`),
INDEX `customer_city_fk_idx` (`city_id` ASC) VISIBLE,
CONSTRAINT `customer_city_fk`
FOREIGN KEY (`city_id`)
REFERENCES `cities` (`city_id`));
    
CREATE TABLE `orders` (
`order_id` INT NOT NULL,
`customer_id` INT NULL,
PRIMARY KEY (`order_id`),
INDEX `orders_customers_fk_idx` (`customer_id` ASC) VISIBLE,
CONSTRAINT `orders_customers_fk`
FOREIGN KEY (`customer_id`)
REFERENCES `customers` (`customer_id`));


CREATE TABLE `items` (
`item_id` INT NOT NULL,
`name` VARCHAR(50) NULL,
`item_type_id` INT NULL,
PRIMARY KEY (`item_id`),
INDEX `items_itemtypes_fk_idx` (`item_type_id` ASC) VISIBLE,
CONSTRAINT `items_itemtypes_fk`
FOREIGN KEY (`item_type_id`)
REFERENCES `item_types` (`item_type_id`));
    
CREATE TABLE `order_items` (
`order_id` INT NULL,
`item_id` INT NULL,
INDEX `orderitems_items_fk_idx` (`item_id` ASC) VISIBLE,
INDEX `orderitems_orders_fk_idx` (`order_id` ASC) VISIBLE,
CONSTRAINT `orderitems_items_fk`
FOREIGN KEY (`item_id`)
REFERENCES `items` (`item_id`),
CONSTRAINT `orderitems_orders_fk`
FOREIGN KEY (`order_id`)
REFERENCES `orders` (`order_id`));
  







