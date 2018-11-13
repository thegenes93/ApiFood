const variables ={
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://admin:nofood9105@ds141514.mlab.com:41514/nofood'
    }
}
module.exports = variables;