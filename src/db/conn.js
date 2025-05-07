import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: ':memory:',
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
});

export const getConn = () => {
  try {
    console.log("Trying to connect to the DB...");
    sequelize.authenticate();
    console.log("Connection to the DB has been established successfully ✔️");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the DB:", error);
    console.error("Error trying to connect to the DB ✖️");
    return false;
  }
};

export default getConn;