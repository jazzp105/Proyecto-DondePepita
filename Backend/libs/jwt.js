let jwt= require("jwt-simple");



let moment=require("moment");



let secret="bit105jazzp";

exports.createToken=function(usuario){
    let payload={
        _id:usuario._id,
        nombre:usuario.nombres,
        apellido: usuario.apellidos,
        edad:usuario.edad,
        corre:usuario.corre,
        iat:moment().unix(),
    }
    return jwt.encode(payload, secret);
}