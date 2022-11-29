import { Router } from "express";
import {
	getHoras,
	getHora,
	deleteHora,
	createHora,
} from "../controllers/horas.controller.js";

const router = Router();

router.get("/horas", getHoras);

router.get("/horas/:id", getHora);

router.post("/horas", createHora);

router.delete("/horas/:id", deleteHora);

export default router;
