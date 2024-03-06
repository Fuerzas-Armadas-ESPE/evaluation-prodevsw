import { Document, Schema, Types } from 'mongoose';

export const CourseSchema = new Schema({
  name: String,
  description: String,
  topics: [{ type: Types.ObjectId, ref: 'Topic' }],
});

export interface Course extends Document {
  name: string;
  description: string;
  topics: Types.ObjectId[]; // Array de IDs de temas relacionados
}
