import { Sequelize, DataTypes, Model } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

const sequelize = new Sequelize({ dialect: SqliteDialect });

export class Persona extends Model {}

Persona.init({
  // Definición de atributos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false // @NotNull se traduce a allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // Opciones del modelo
  sequelize, // La instancia de conexión
  modelName: 'Persona' // El nombre del modelo
  // Puedes añadir otras opciones como tableName, timestamps, etc. aquí si es necesario
});
