const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

module.exports = async(req,res,next) =>{
let token = req.body.token || req.query.query || req.headers['x-access-token'];
if(token){
    try {
        let decode = await jwt.verify(token,variables.Security.secretyKey);
        console.log(decode);
        req.usuarioLogado = decode;
        next();
    } catch (error) {
        res.status(401).send({menssage:'token informado é invalido'});
    }
}else{
    res.status(401).send({menssage: 'falha na autenticação do token'});
    return;
}
}