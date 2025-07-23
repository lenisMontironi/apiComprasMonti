const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Provider = sequelize.define(
  "Provider",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      field: "descripcion",
      type: DataTypes.STRING,
      allowNull: false,
    },
    phones: {
      field: "telefonos",
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      field: "direccion",
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Proveedores",
    timestamps: false,
  }
);

module.exports = Provider;
