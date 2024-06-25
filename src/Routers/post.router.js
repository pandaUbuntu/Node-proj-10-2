import Router from 'express';

import  {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
  }  from '../Controllers/post.controller.js'

const postRouter = new Router();

postRouter.post('/post', createPost); //Create
postRouter.get('/posts', getPosts); //Read
postRouter.get('/post/:postId', getPost); //Read
postRouter.put('/post/:id', updatePost); //Update
postRouter.delete('/post/:id', deletePost); //Delete

 
export default postRouter;