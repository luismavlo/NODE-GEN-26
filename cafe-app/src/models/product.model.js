const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Product = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isNew: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Product;

/**

 id,
 name,
 image,
 ingredients: tipo string con valor maximo, no puede ser nulo
 quantity: tipo de dato entero y no puede ser nulo,
 price,
 isNew,
 description: tipo de dato TEXTO = TEXT, no puede ser nulo,
 status: tipo de dato booleano, no puede ser nulo, valor por defecto true

 */
