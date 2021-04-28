let mongoose = require("mongoose");
// metodo que permite crear esquemas desde node/express
let Schema = mongoose.Schema;

// Se crea el esquema
let usuarioSchema = Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  pass: String,
  rol: String,
  fechaRegistro: { type: Date, default: Date.now },
});
// Se exporta el modulo
module.exports = mongoose.model("usuario", usuarioSchema);