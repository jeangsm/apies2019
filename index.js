const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app/public'));

consign()
	.include('app/routes')
	.into(app);

app.listen(process.env.PORT, () => {
	console.log("Server funfando na porta " + process.env.PORT);
});