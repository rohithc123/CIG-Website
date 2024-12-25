import mongoose, { Schema, model, Document } from "mongoose";

interface IBlog extends Document {
  name: string;
  domain: string;
  description: string;
}

const blogSchema = new Schema<IBlog>({
  name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.models.Blog || model<IBlog>("Blog", blogSchema);
export default Blog;
