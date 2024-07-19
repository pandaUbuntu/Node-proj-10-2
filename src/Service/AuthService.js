import User from '../Models/user.js'
import Role from '../Models/role.js'
import bcrypt from 'bcryptjs'
import JwtCreator from "../Service/JwtCreator.js";


class AuthService{

    async registration(body, validationArray){
        if(!validationArray.isEmpty()){
            throw new Error('Помилка валідації');
        }

        const { name, email, password } = body;

        const user = await User.findOne({email: email});

        if (user){
            throw new Error('Такий імейл зареєстрований');
        }

        const passwordHash = bcrypt.hashSync(password, 10);
        const role = await Role.findOne({name: 'USER'});

        const newUser = await User.create({
            name: name, 
            email: email, 
            password: passwordHash, 
            role: role.name});

        let token = JwtCreator.creatToken({_id:newUser._id, role: newUser.role});

        await User.findByIdAndUpdate(newUser._id, {token: token});

        console.log("Юзер створений");
        
        return newUser;
    }

    async login(body, validationArray){
        if(!validationArray.isEmpty()){
            throw new Error('Помилка валідації');
        }

        const { email, password } = body;

        const user = await User.findOne({email: email});

        if(!user){
            throw new Error('Такого користувача не існує');
        }

        const isValid = bcrypt.compareSync(password, user.password);

        if(!isValid){
            throw new Error('Пароль невірний');
        }
        
        let token = JwtCreator.creatToken({_id:user._id, role: user.role});

        await User.findByIdAndUpdate(user._id, {token: token});

        return {
            token: token,
            user: user 
         };
    }
}

export default new AuthService();