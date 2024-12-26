import express from "express";
import { getEvent, createEvent, deleteEvent } from "./../controller/event";

const eventRouter: express.Router = express.Router();

eventRouter.get("/event", getEvent);
eventRouter.post("/event", createEvent);
eventRouter.delete("/event", deleteEvent);

export default eventRouter;
