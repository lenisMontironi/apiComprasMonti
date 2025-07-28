import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ProviderAttributes {
  id: number;
  description: string;
  phones?: string | null;
  address?: string | null;
}

interface ProviderCreationAttributes extends Optional<ProviderAttributes, 'id'> {}

class Provider extends Model<ProviderAttributes, ProviderCreationAttributes> implements ProviderAttributes {
  public id!: number;
  public description!: string;
  public phones?: string | null;
  public address?: string | null;
}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      field: 'descripcion',
      type: DataTypes.STRING,
      allowNull: false,
    },
    phones: {
      field: 'telefonos',
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      field: 'direccion',
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'proveedores',
    timestamps: false,
  }
);

export default Provider;
