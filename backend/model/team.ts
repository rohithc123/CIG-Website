import mongoose, { Schema, model, Document } from "mongoose";

interface ITeam extends Document {
  name: string;
  designation: string;
  email: string;
  phoneNo: number;
  linkedin: string;
}

const teamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[A-Za-z\s]+$/.test(v);
      },
      message: "Name should contain only letters and spaces",
    },
  },
  designation: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[A-Za-z\s]+$/.test(v);
      },
      message: "Designation should contain only letters and spaces",
    },
  },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phoneNo: {
    type: Number,
    required: true,
    validate: {
      validator: function (v: number) {
        return /\d{10}/.test(v.toString());
      },
      message: "Phone number should have exactly 10 digits",
    },
  },
  linkedin: {
    type: String,
    required: true,
    match: /^https:\/\/(www\.)?linkedin\.com\/in\/.*$/,
  },
});

const Team = mongoose.models.Team || model<ITeam>("Team", teamSchema);
export default Team;