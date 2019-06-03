const MainController = require('../controllers/main.js');

module.exports = (app) => {


	app.get('/', (req, res, next) => {
		MainController.getHome(req, res, next);
	});

	app.get('/contato?:id', (req, res, next) => {
		MainController.getContato(req, res, next);
	});

	app.get('/adicionar-contato', (req, res, next) => {
		MainController.adicionarContato(req, res, next);
	});

	app.post('/adicionar-contato', (req, res, next) => {
		MainController.setContato(req, res, next);
	});

}