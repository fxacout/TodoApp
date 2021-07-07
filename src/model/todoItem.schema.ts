import { Schema } from 'mongoose';

export default new Schema({
    content: String,
    isDone: Boolean,
});