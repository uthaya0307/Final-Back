const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose')
const app=express()
const routerurl=require('./router/router')

//use cors to allow request from frontend

app.use(cors())
app.use(express.json())
app.use('/app',routerurl)



if(mongoose.connect("mongodb+srv://Flower2001:Flower2001@cluster0.kl9bj.mongodb.net/D-Mart_details?retryWrites=true&w=majority&appName=Cluster0"))
{
    console.log("Database has connected in Atlas");
}


app.listen(5000,()=>
{
    console.log('Server is running on port 5000')
})
