import { Router } from "express";
import {
  getTickets,
  getTicket,
  createTickets,
  updateTickets,
  deteleTickets,
} from "../controllers/tickets.controller.js";

const router = Router();

router.get("/tickets", getTickets);

router.get("/tickets/:id", getTicket);

router.post("/tickets", createTickets);

router.put("/tickets", updateTickets);

router.delete("/tickets", deteleTickets);

export default router;
