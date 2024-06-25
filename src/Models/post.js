import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import User from './user.js';

const { Schema } = mongoose;

const PostSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuid,
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            default: uuid,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }

    });

export default mongoose.model('Post', PostSchema);