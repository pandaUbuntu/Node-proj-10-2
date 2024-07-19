import { validationResult } from "express-validator";
import AuthService from "../Service/AuthService.js";


class AuthController{
    async registration(req, res){
        try{
            return res.status(201).json(await AuthService.registration(req.body, validationResult(req)));
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }

    async login(req, res){
        try{
            return res.status(200).json(await AuthService.login(req.body, validationResult(req)));
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
}

export default new AuthController();