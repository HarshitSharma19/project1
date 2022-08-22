/*---------------------------------------------------------*/
import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { AdminLogin } from "./Routes/AdminLogin.js";
import { Auth } from "./Middleware/Auth.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
dotenv.config({
    path: "./config.env"
})
/*---------------------------------------------------------*/
let ConnStatus;
await mongoose.connect(process.env.DB).then(()=>{
    ConnStatus = true;
    console.log("Connection Successful")
}).catch(()=>{
    ConnStatus = false;
    console.log("Connection Error")
})
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
if(ConnStatus){
    const App = Express();
    /*ADMIN LOGIN PENDING*/
    App.use(bodyParser.json())
    App.use(cors({origin: "*"}))
    App.use("/", AdminLogin)
    /*ADMIN LOGIN DONE*/
    App.get("/Admin", Auth ,(req , res)=>{
        res.send(req.User);
    })
    App.listen(process.env.PORT , ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}
/*---------------------------------------------------------*/