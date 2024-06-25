import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import Post from './post.js'

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuid,
        },
        name: {
            type: String,
            default: "Anonymous"
        },
        email: {
            type: String,
            required: true,
            validation: "/\S+@\S+\.\S+/g", 
        },
        password:{
            type: String,
            required: true 
        },
        posts: [
            {
                type: String,
                default: uuid,
                ref: 'Post',
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }

    });

export default mongoose.model('User', UserSchema);