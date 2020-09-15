Node.js, Express & MySQL: Simple Add, Edit, Delete, View (CRUD)
========
Simple web app amended from the following blog.

A simple and basic CRUD application (Create, Read, Update, Delete) using Node.js, Express, MySQL & EJS Templating Engine.

**Blog:** [Node.js, Express & MySQL: Simple Add, Edit, Delete, View (CRUD)](http://blog.chapagain.com.np/node-js-express-mysql-simple-add-edit-delete-view-crud/)

**Creating database and table**

```
create database test;

use test;

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
```


amended to include the following:
1. Cloudfront integration
2. integration with Secrets manager for aurora MySQL
3. Externalising static images to S3 (with Cloudfront)