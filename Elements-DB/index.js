import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './routes/user.route.js'
import uploadRouter from './routes/upload.route.js'
import categoryRouter from './routes/category.route.js'
dotenv.config()
const app = express()

app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginOpenerPolicy: false
}))

app.use(express.urlencoded({ extended: true }));

const PORT = 5000  || process.env.PORT

app.get('/',(req,res)=>{
    res.json({
        message : 'server is running successfully'
    })
})

app.use('/api/user',userRouter)
app.use("/api/file",uploadRouter)
app.use("api/category",categoryRouter)
connectDB().then(()=>{
    app.listen(PORT, () =>{
        console.log(`Services running on PORT ${PORT} Successfully`)
    })  
})
      


