import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

const { Schema } = mongoose;

const Role = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuid,
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
    });

export default mongoose.model('Role', Role);