USE DB thevalley;


CREATE TABLE `user_table` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`last_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`email` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`fbID` Int( 11 ) NULL,
	`user_img` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	`createdAt` Timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    foreign_key INTEGER(10) NULL,
	PRIMARY KEY ( `id` ) );

