import mongoose, { Schema, model, Document } from "mongoose";

interface IAbout extends Document {
  email: string;
  phoneNo: number;
  linkedin: string;
}

const aboutSchema = new Schema<IAbout>({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phoneNo: { type: Number, required: true, match: /^[6-9]\d{9}$/ },
  linkedin: {
    type: String,
    required: true,
    match: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/,
  },
});

const About = mongoose.models.About || model<IABout>("About", aboutSchema);
export default About;
