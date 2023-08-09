const express = require('express');

const app = express();
const PORT = 3000;
const fs = require('fs');
path='./routes/v1/';

console.log(fs.existsSync(path));
// parse json request body
app.use(express.json());

const ubxroutes = require('./routes/v1/ubx.route');
app.use('/v1/ubx', ubxroutes);
const venload = require('./routes/v1/venload.route');
app.use('/v1/venload', venload);
const venbill = require('./routes/v1/venbill.route');
app.use('/v1/venbill', venbill);

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
