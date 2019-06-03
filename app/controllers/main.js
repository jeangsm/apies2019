const axios = require('axios');

exports.getHome = (req, res, next) => {
	axios.get('http://engswii-lista-contatos.herokuapp.com/api/contatos')
		.then((response) => {
			var dados = response.data;
			res.render('index', {dados: dados});
		})
		.catch((error) => {
			console.log('Deu treta: ' + error);
		});
	
}

exports.getContato = (req, res, next) => {
	var url = 'http://engswii-lista-contatos.herokuapp.com/api/contato/' + req.query.id;
	axios.get(url)
		.then((response) => {
			var erro = false;
			var dados = response.data;
			console.log(response.data);
			res.render('contato', {dados: dados, erro: erro});
		})
		.catch((error) => {
			var erro = true;
			console.log('Deu treta: ' + error.response.status);
			res.render('contato', {erro: erro});
		});
}

exports.adicionarContato = (req, res, next) => {
	res.render('adicionar-contato');
}

exports.setContato = (req, res, next) => {
	var nome = req.body.nome;
	var email = req.body.email;
	var telefone = req.body.telefone;
	axios.post('http://engswii-lista-contatos.herokuapp.com/api/contato', {
		nome: nome,
		email: email,
		telefone: telefone
	})
	.then((response) => {
		console.log("Deu certo!" + response);
		res.redirect('/');
	})
	.catch((error) => {
		console.log("Deu treta no post: " + error);
		res.redirect('adicionar-contato');
	});
}