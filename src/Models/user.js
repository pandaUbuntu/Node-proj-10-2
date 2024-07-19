import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import Post from './post.js'
import Role from './role.js';

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        _id: {
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
            unique: true,
            validation: "/\S+@\S+\.\S+/g", 
        },
        role: {
            type: String,
            ref: 'Role',
        },
        password:{
            type: String,
            required: true 
        },
        token: {
            type: String,
            default: null
        },
        posts: [
            {
                type: String,
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