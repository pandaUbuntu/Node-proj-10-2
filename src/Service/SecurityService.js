import 'dotenv/config'
import jwt from 'jsonwebtoken'
import User from './../Models/user.js'

class SecurityService{
    async authCheck(req, res, next){
        try{
            if(!req.headers.authorization){
                throw new Error("Токен відсутній!");
            }
        
           const token = req.headers.authorization.split(' ')[1];

            const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await User.findOne({_id: tokenData._id});

            if(!user){
                throw new Error("Такого користувача не існує!");
            }

            if(user.token !== token){
                throw new Error("Токен не валідний!");
            }

            next();
        }
        catch(e){
            return res.status(400).json({message: e.message});
        }
    }

    roleCheck(currentRole){
        return function(req, res, next)
        {
            try{
                if(!req.headers.authorization){
                    throw new Error("Токен відсутній!");
                }
            
               const token = req.headers.authorization.split(' ')[1];

                const {role: userRole} = jwt.verify(token, process.env.JWT_SECRET_KEY);

                if (currentRole != userRole){
                    throw new Error("Доступ до цього роуту заборонений!");
                }
            
                next();
            }
            catch(e){
                return res.status(400).json({message: e.message});
            }
        }
    }
}

export default new SecurityService();