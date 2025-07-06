import authService from "../services/auth.service.js";

async function LoginController(req, res){

    const {email, password} = req.body

    try{
        const loginUser = await authService.userLoginService(email, password)
        res.status(201).json(loginUser)
    } catch (e) {
        res.status(400).json({Error: e.message})
    }
}

export default LoginController

