ALTER TABLE `products` 
ADD CONSTRAINT `fk_categories`
  FOREIGN KEY (`category_id`)
  REFERENCES `categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;