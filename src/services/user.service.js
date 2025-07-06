import userRepository from "../repositories/user.repository.js";

async function createUserService(newUser){

    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if (foundUser) throw new Error('Usuário já cadastrado')

    const userNew = userRepository.createUserRepository(newUser)
    return userNew
}

export default {
    createUserService
}