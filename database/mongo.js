const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.DATABASE || '').then(() => {
	console.log("Connected to %s", process.env.DATABASE);
	console.log("App is running ... \n");
	console.log("Press CTRL + C to stop the process. \n");
}).catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
});

module.exports = mongoose.connection;