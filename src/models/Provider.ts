import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface ProviderAttributes {
  id: number;
  description: string;
  phones?: string | null;
  address?: string | null;
  name?: string | null;
  cuil?: number | null;
}

interface ProviderCreationAttributes
  extends Optional<ProviderAttributes, "id"> {}

class Provider
  extends Model<ProviderAttributes, ProviderCreationAttributes>
  implements ProviderAttributes
{
  public id!: number;
  public description!: string;
  public phones?: string | null;
  public address?: string | null;
  public name?: string | null;
  public cuil?: number | null;
}

Provider.init(
  {
    id: {
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
    name: {
      field: "nombre",
      type: DataTypes.STRING,
      allowNull: true,
    },
    cuil: {
      field: "cuil",
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Provider",
    tableName: "proveedores",
    timestamps: false,
  }
);

export default Provider;
