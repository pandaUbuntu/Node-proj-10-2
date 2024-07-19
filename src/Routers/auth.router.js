import Router from 'express';
import authController from '../Controllers/auth.controller.js';
import { check } from 'express-validator'

const authRouter = new Router();

authRouter.post('/auth/registration', 
    [
        check('email', 'Не валідний імейл').notEmpty().isEmail().isString(),
        check('password', 'Не валідний пароль').notEmpty()
    ]
    ,authController.registration); //Reg
authRouter.post('/auth/login', [
        check('email', 'Не валідний імейл').notEmpty().isEmail(),
        check('password', 'Не валідний пароль').notEmpty()
    ],
    authController.login); //Login


 
export default authRouter;