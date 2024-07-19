import Post from '../Models/post.js'
import { validationResult } from "express-validator";

class PostController{
    async getPostsByUserId(req, res) {
        try{
            const posts = await Post.find({author: req.params.userId});

            return res.status(200).json(posts);
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
    
    async getPost (req, res){
        const id = Number(req.params.postId);
        
        res.send("Ви отримали пост з id " + id);
    }
    
    async getPosts (req, res){
        const id = Number(req.params.postId)
        
        res.send("Ви отримали пост з id " + id);
    }

    async createPost(req, res) {
        try{
            if(!validationResult(req).isEmpty()){
                throw new Error('Помилка валідації даних!');
            }

            const authorId = req.params.authorId;

            const newPost = await Post.create({title: req.body.title, text: req.body.text, author: authorId});

            return res.status(201).json(newPost);
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
    
    async updatePost(req, res)  {
        const id = Number(req.params.id);
    
        res.send("Ви змінили пост з ID " + id);
        //res.status(200).json('Product updated')
    }
    
    async deletePost(req, res)  {
        const id = Number(req.params.id);
        res.send("Ви видалили пост з ID " + id);
    }
}

export default new PostController();
