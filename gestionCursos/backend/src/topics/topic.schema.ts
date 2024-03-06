import * as mongoose from 'mongoose';

export const TopicSchema = new mongoose.Schema({
  name: String,
  description: String,
});


export interface Topic extends Document {
  name: string;
  description: string;
}