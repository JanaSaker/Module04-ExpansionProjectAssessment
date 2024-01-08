// app.js
import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
const sequelize = require('./database');

const app = express();
dotenv.config()

var corOptions = {
  origin: 'http://localhost:80'
}


//middleware
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


//middlewear function//

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//testing api
app.get("/",(req, res) =>{
  res.json({message:'hello from api'})
})


app.listen (process.env.PORT ,()=>{
    console.log("server listening on port",process.env.PORT);
})


//routes
app.use('/api/users',userRoute);
app.use('api/products',productRoute)


// Use routes
app.use('/auth', authRoutes);

