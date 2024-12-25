import Event from "./../model/event";
import dotenv from "dotenv";
import { Request, Response } from "express";

export const getEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const info = await Event.find();
    res.send(info);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving the events");
  }
};

export const createEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, date, description } = req.body;

    // Check for existing event with the same name
    const existingEvent = await Event.findOne({ name: name });

    if (existingEvent) {
      res.status(400).send("An event with the same name exists");
      return;
    }

    const event = new Event({ name, date, description });
    await event.save();
    res.send("Event created successfully");
  } catch (error) {
    res
      .status(500)
      .send(`An error occurred while creating the event: ${error}`);
  }
};

export const deleteEvent = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.body;
    const event = await Event.findOneAndDelete({ _id: id });
    if (!event) {
      res.status(404).send("Event not found with the given ID");
      return;
    }
    res.send("Event deleted successfully");
  } catch (error) {
    res
      .status(500)
      .send(`An error occurred while deleting the event: ${error}`);
  }
};
