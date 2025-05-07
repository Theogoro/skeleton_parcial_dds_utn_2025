import { Op } from "@sequelize/core";
import { Persona } from "../models/persona.js";

const crearPersona = async (firstName, lastName) => {
  try {
    const newPersona = await Persona.create({ firstName, lastName });
    return newPersona;
  } catch (error) {
    console.error("Error al crear la persona:", error);
    throw new Error("Error al crear la persona");
  }
}

const obtenerPersonas = async (firstName) => {
  try {
    const personas = await Persona.findAll({
      where: {
        ...(firstName && { firstName: { [Op.like]: `%${firstName}%` } })
      }
    });
    return personas;
  } catch (error) {
    console.error("Error al obtener las personas:", error);
    throw new Error("Error al obtener las personas");
  }
}

const obtenerPersonaPorId = async (id) => {
  try {
    const persona = await Persona.findByPk(id);
    if (!persona) {
      throw new Error("Persona no encontrada");
    }
    return persona;
  } catch (error) {
    console.error("Error al obtener la persona:", error);
    throw new Error("Error al obtener la persona");
  }
}
const actualizarPersona = async (id, firstName, lastName) => {
  try {
    const persona = await obtenerPersonaPorId(id);
    if (!persona) {
      throw new Error("Persona no encontrada");
    }
    persona.firstName = firstName || persona.firstName;
    persona.lastName = lastName || persona.lastName;
    await persona.save();
    return persona;
  } catch (error) {
    console.error("Error al actualizar la persona:", error);
    throw new Error("Error al actualizar la persona");
  }
}

export {
  crearPersona,
  obtenerPersonas,
  obtenerPersonaPorId,
  actualizarPersona
}