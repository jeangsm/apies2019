// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("TESTES DAS REQUISIÇÕES HTTP", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("Deve trazer a lista de contatos", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("GET /adicionar-contato", () => {
        // Test to get all students record
        it("Deve trazer a view adicionar-contato", (done) => {
             chai.request(app)
                 .get('/adicionar-contato')
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.body.should.be.a('object');
                     done();
                  });
        });

        it("Deve cadastrar o contato", (done) => {
             chai.request(app)
                 .post('/adicionar-contato')
                 .send({
                 	'nome': 'Siclano',
                 	'email': 'siclano@fulanos.com',
                 	'telefone': '9999999999'
                 })
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.body.should.be.a('object');
                     done();
                  });
        });
    });

    describe("GET /contato?id=", () => {
        // Test to get all students record
        it("Deve trazer o contato com ID 1", (done) => {
             chai.request(app)
                 .get('/contato?id=1')
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.body.should.be.a('object');
                     done();
                  });
         });

        it("Não deve trazer o contato com ID 28, 404", (done) => {
             chai.request(app)
                 .get('/contato?id=28')
                 .end((err, res) => {
                     res.should.have.status(404);
                     //res.body.should.be.a('object');
                     done();
                  });
         });
    });


});