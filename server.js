'use strict'
const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');


app.listen(variables.Api.port,( ) => {
    console.log('Api Inicializada na porta '+variables.Api.port+'');
})