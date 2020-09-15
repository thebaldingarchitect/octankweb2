
const dotenv = require('dotenv');
dotenv.config();


var config = {
	database: {
		host:	  process.env.HOST, 	// database host
		user: 	  process.env.DBUSER, 		// your database username
		password: process.env.PASSWORD, 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  process.env.DB 		// your database name
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
