import * as PersonasService from "../services/personas.service.js";

const getPersonas = async (req, res) => {
  try {
    const { firstName } = req.query;
    const personas = await PersonasService.obtenerPersonas(firstName);
    res.json(personas);
  } catch (error) {
    console.error("Error al obtener las personas:", error);
    res.status(500).send("Error al obtener las personas");
  }
};

const createPersona = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName) {
      return res.status(400).send("El campo firstName es obligatorio");
    }
    const newPersona = await PersonasService.crearPersona(firstName, lastName);
    if (!newPersona) {
      return res.status(400).send("Error al crear la persona");
    }
    res.status(201).json(newPersona);
  } catch (error) {
    console.error("Error al crear la persona:", error);
    res.status(500).send("Error al crear la persona");
  }
};

const updatePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const updatedPersona = await PersonasService.actualizarPersona(id, firstName, lastName);
    if (!updatedPersona) {
      return res.status(404).send("Persona no encontrada");
    }
    res.json(updatedPersona);
  } catch (error) {
    console.error("Error al actualizar la persona:", error);
    res.status(500).send("Error al actualizar la persona");
  }
}

const getPersonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await PersonasService.obtenerPersonaPorId(id);
    if (!persona) {
      return res.status(404).send("Persona no encontrada");
    }
    res.json(persona);
  } catch (error) {
    console.error("Error al obtener la persona:", error);
    res.status(500).send("Error al obtener la persona");
  }
}


export { getPersonas, createPersona, updatePersona, getPersonaById };