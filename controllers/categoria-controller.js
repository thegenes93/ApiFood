'use strict'
const repository = require('../repositories/categoria-repository');

function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

categoriaController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};

categoriaController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async (req, res) => {
    let categoria = await new repository().getById(req.params.id);
    res.status(200).send(categoriaEncontrada);
};

categoriaController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;