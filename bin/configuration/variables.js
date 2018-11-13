const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood9105@ds141514.mlab.com:41514/nofood'
    },
    Security:{
        secretyKey:'f781cbeff91b5eb7959ff6bdb14891c2|e01172488650404f01cbd3387c74aa68'
    }

}

module.exports = variables;