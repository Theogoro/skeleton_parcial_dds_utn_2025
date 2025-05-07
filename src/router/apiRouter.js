import { Router } from "express";
import { createPersona, getPersonaById, getPersonas, updatePersona } from "../controllers/personas.js";
import asyncHandler from "../utils/async-handler.js";

const apiRouter = Router();
apiRouter.get("/personas", asyncHandler(getPersonas));
apiRouter.post("/personas", asyncHandler(createPersona));
apiRouter.get("/personas/:id", asyncHandler(getPersonaById));
apiRouter.put("/personas/:id", asyncHandler(updatePersona));

export default apiRouter;