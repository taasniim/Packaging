require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcrypt')

const mockupRoute= require('./routes/mockupRoute')
const userRoute= require('./routes/userRoute')
const authRoute=require('./routes/authRoute')
const projectRoute=require('./routes/projectRoute')

const PORT= process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL
const errorMiddleware = require('./middelware/errorMiddleware')
//si on veux limité l'accée au bd
/*var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }*/
  


app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
app.use('/api/mockups', mockupRoute);
app.use('/api/users', userRoute);
app.use(errorMiddleware);
app.use("/api/auth",authRoute);
app.use("/api/project",projectRoute);


app.get('/api', (req,res)=>{
   res.json({"users" : ["user one","user2"]})
})

app.get('/blog', (req,res)=>{
    res.send('hello  blog')
})




mongoose.set("strictQuery",false)
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch((error)=>{
    console.log(error);
})

