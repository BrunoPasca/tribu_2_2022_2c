import { Router } from "express";
import { createHora } from "../controllers/horas.controller.js";
import {
	getLicencias,
	getLicencia,
	deleteLicencia,
	createLicencia,
} from "../controllers/licencia.controller.js";

const router = Router();

router.get("/horas", getLicencias);

router.get("/horas/:id", getLicencia);

router.post("/horas", createLicencia);

router.delete("/horas/:id", deleteLicencia);

export default router;
