import { Schema } from 'mongoose';

export default new Schema({
    username: String,
    password: String,
    creationDate: {type: Date, default: Date.now},
});