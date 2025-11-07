import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import testRouter from './routes/testRoutes.js'
import userRouter from './routes/userRoute.js'
import todoRoute from './routes/todoRoute.js'

import connectDB from './config/db.js'

//env config
dotenv.config()

//DB Connection
connectDB()
//rest object
const app = express()

//middleware
app.use(express.json())
app.use(cors())
//routes
app.use('/api/v1/test',testRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/todo',todoRoute)
//port
const PORT = process.env.PORT || 3000

//listen
app.listen(PORT,()=>{
    console.log(`Server Started Running ${process.env.DEV_MODE} on port ${PORT} `)
})