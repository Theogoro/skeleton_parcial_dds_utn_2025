import getConn from "./conn.js";
import { Persona } from "../models/persona.js";
const sequelize = getConn();

async function init() {
  await sequelize.sync({force: true});
  await Persona.sync({force: true});
  
  try {
    await Persona.create({
      firstName: "Juan",
      lastName: "Pérez"
    });
    console.log("Persona creada");
  } catch (error) {
    console.error("Error creando la persona:", error);
  }

}

init();