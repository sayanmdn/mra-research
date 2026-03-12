import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    author: { type: String, default: '' },
  },
  { timestamps: true, collection: 'blogs' }
);

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
