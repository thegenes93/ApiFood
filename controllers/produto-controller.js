'use strict'
const repository = require('../repositories/produto-repository');

function prdutoController() {

}

prdutoController.prototype.post = async (req, res) => {
    let resultado = await new repository().create();
    res.status(201).send(resultado);
};

prdutoController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};

prdutoController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

prdutoController.prototype.getById = async (req, res) => {
    let categoriaEncontrada = await new repository().getById(req.params.id);
    res.status(200).send(categoriaEncontrada);
};

prdutoController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = prdutoController;