import express from 'express'

import 'dotenv/config'
import loginRouter from './src/routers/auth.routers.js'
import userRouter from './src/routers/user.routers.js'
import productRouter from './src/routers/product.routers.js'
import stockRouter from './src/routers/stockMovement.routers.js'


const app = express()

app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/product', productRouter)
app.use('/api/stock', stockRouter)



const port = process.env.port
app.listen(port, () => {console.log(`Servidor esta rodando na porta ${port}`)})

