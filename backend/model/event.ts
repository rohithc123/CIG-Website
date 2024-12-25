import mongoose, { Schema, model, Document } from "mongoose";

interface IEvent extends Document {
  name: string;
  date: Date;
  description: string;
}

const eventSchema = new Schema<IEvent>({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Event = mongoose.models.Event || model<IEvent>("Event", eventSchema);
export default Event;
