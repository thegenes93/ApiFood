// evita que variaveis sem criadas sem ser declaradas anteriomente 
'use strict'
require('../models/usuario-model');
// importar o raquivo repositorio base com todas as função dos metodos
const base = require('../bin/base/repository-base');
// criptografia md5 cria um hash
const md5 = require('md5');


class usuarioRepository {
    // constutor da classe 
    constructor() {
        // instacia o modelo de usuarios
        this._base = new base('Usuario');
        // cria uma projeção padrão de retorno de infomações
        this._projection = 'nome email _id';
    }
    async IsEmailExite(Email) {
  return await this._base._model.findOne({email: Email}, this._projection);
    }

    // metodo para autenticação
    async autenticate(Email, Senha) {
        // converte a senha em hash
        let _hashSenha = md5(Senha);
        // função para buscar 1 usuario
        return await this._base._model.findOne({
            email: Email,
            senha: _hashSenha
        }, this._projection);
    }
    // metodo para salvar no banco
    async create(data) {
        // usuarioCriado está recebendo o retorno da criação
        let usuarioCriado = await this._base.create(data);
        // tratando o retorno sem passar a senha criada usando uma projeção
        return this._base._model.findById(usuarioCriado._id, this._projection);
    }
    // metodo para atualizar
    async update(id, data) {
        //instacia do base update com restrição de atualização apenas nome email e foto pode ser atualizados
        let usuarioAtualizado = await this._base.update(id, {
            nome: data.nome,
            email: data.email,
            foto: data.foto
        });
        // retorno tratado usando a projection
        return  this._base._model.findById(usuarioAtualizado._id, this._projection);
    }
    // metodo para pegar todas as informação da collection
    async getAll() {
        return await this._base._model.find({}, this._projection);
    }
    // metodo para pegar informaçãoes especificas passando id
    async getById(id) {
        return await this._base._model.findById(id, 'nome email _id foto');
    }
    // metodo para deletar
    async delete(id) {
        return await this._base.delete(id);
    }

}
// exporta todos os metos do repositorio usuario
module.exports = usuarioRepository;