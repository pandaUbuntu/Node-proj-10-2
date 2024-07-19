import 'dotenv/config';
import jwt from 'jsonwebtoken'

class JwtCreator{
    creatToken(data){
        return jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn: '12h'});
    }
}

export default new JwtCreator();