const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  /* Sección de atributos que reciben cadena de texto */
  user_name: { type: String, require: true },
  lastname: { type: String, require: true },
  /* Sección de atributos que reciben valores numéricos */
  age: { type: Number, require: true, min: 15 },
  /* Sección de atributos que reciben colecciones */
  address: {
    type: Object,
    require: true,
    city: { type: String, require: true },
    code_zipe: { type: String, require: true },
  },
  pets: { type: Array, require: true },
  created: {  type: String, require: true  },
});

module.exports = mongoose.model("PersonDocument", personSchema);
