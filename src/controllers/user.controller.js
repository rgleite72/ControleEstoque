import userService from '../services/user.service.js'

async function createUserController(req, res){

    const newUser = req.body

    try {
        const userNew = await userService.createUserService(newUser)
        res.status(201).json(userNew)
    } catch (e) {
        res.status(400).send(e.message)
    }
}


export default createUserController