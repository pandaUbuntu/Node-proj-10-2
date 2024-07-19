import Router from 'express';
import SecurityService from '../Service/SecurityService.js';
import postController from '../Controllers/post.controller.js';
import { check } from 'express-validator'

const postRouter = new Router();

postRouter.post('/post/:authorId', [
  SecurityService.authCheck,
  SecurityService.roleCheck("USER"),
  check('title', 'Незаповнений заголовок!').notEmpty(),
  check('text', 'Незаповнений текст').notEmpty()
], postController.createPost); //Create

postRouter.get('/posts/:userId', postController.getPostsByUserId); //Read
postRouter.get('/posts', postController.getPosts); //Read
postRouter.get('/post/:postId',  postController.getPost); //Read

postRouter.put('/post/:id', [  
  SecurityService.authCheck,
  SecurityService.roleCheck("USER"),
], postController.updatePost); //Update

postRouter.delete('/post/:id',  postController.deletePost); //Delete
 
export default postRouter;
