/*---------------------------------------------------------*/
import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { AdminLogin } from "./Routes/AdminLogin.js";
import { UserLogin } from "./Routes/UserLogin.js";
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
    App.use("/admin-panel", AdminLogin)
    /*ADMIN LOGIN DONE*/
    App.get("/admin-panel/admin", Auth ,(req , res)=>{
        res.send(req.User);
    })
    /*USER LOGIN PENDING*/
    App.use("/user", UserLogin)
    /*USER LOGIN DONE*/
    App.listen(process.env.PORT , ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}
/*---------------------------------------------------------*/