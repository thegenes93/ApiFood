const variables ={
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'coloque aqui sua conexão com o seu banco'
    }
}
module.exports = variables;
