import userRepository from "../repositories/user.repository.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT = process.env.JWT

class AuthService{
    async userLoginService(email, password){

        const foundUser = await userRepository.findUserByEmailRepository(email)
        if(!foundUser) throw new Error('Usuário não encontrado')

        const isPassValid = await bcrypt.compare(password, foundUser.password)
        if (!isPassValid) throw new Error('Senha inválida')

        const token = jwt.sign(
            { id: foundUser.id, email: foundUser.email },
            JWT,
            { expiresIn: '1h'}
        )

        return { 
            user: {id: foundUser.id, name: foundUser.name, email: foundUser.email}, 
            token
        }

    }
}

export default AuthService

