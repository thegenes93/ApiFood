// evita que variaveis sem criadas sem ser declaradas anteriomente 
'use strict'
// importa o modulo usuario repository
const repository = require('../repositories/usuario-repository');

// importa o modulo validation
const validation = require('../bin/helpers/validation');

//importa modulo de controle base
const ctrlBase = require('../bin/base/controller-base');

// instancia o repositorio
const _repo = new repository();

//modulo de criptografia 
const md5 = require('md5');

// cria um class usando functio mas pode ser feita com CLass
function usuarioController() {

}
// cria um metodo para post 
usuarioController.prototype.post = async (req, res) => {
    // instancia a validation
    const _validationContract = new validation();
      // metodos para validação das informações
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'o email informado é invalido');
    _validationContract.isRequired(req.body.senha, 'A senha informada é invalida');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatoria');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha e a confirmação não são iguais');
    // metodo para verificar se email exite na base de dados
    let usuarioIsEmailExiste = await _repo.isEmail(req.body.email);
    if (usuarioIsEmailExiste) {
        _validationContract.isTrue((usuarioIsEmailExiste != undefined), 'já exite o email ${req.body.email} cadastrado');
    }
    // criptografa a senha do usuario
    req.body.senha = md5(req.body.senha);
    ctrlBase.post(_repo, _validationContract, req ,res)
};
// cria um metodo para atualização
usuarioController.prototype.put = async (req, res) => {
    // instancia o update do repositorio para realizar a atualização
    let resultado = await _repo.update(req.params.id, req.body);
    // retorna o status com o resultado
    res.status(202).send(resultado);
};
// cria um metodo para pegar todas as informaçoes no banco
usuarioController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};
// cria um metodo para pegar informaçoes especificas no banco
usuarioController.prototype.getById = async (req, res) => {
    let categoriaEncontrada = await _repo.getById(req.params.id);
    res.status(200).send(categoriaEncontrada);
};

usuarioController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};
// exporta o modulo controle de usuarios
module.exports = usuarioController;