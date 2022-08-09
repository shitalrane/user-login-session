CREATE DATABASE `user_db`

USER `user_db`

CREATE TABLE `users` (
  `name` varchar(36) NOT NULL,
  `email_id` varchar(36) NOT NULL,
  `mobile_no` varchar(10) NOT NULL,
  `feedback` varchar(200) NOT NULL DEFAULT '',
  `login_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`,`email_id`,`mobile_no`)
);
