/*---------------------------------------------------------*/
import Express from "express";
import { AdminController } from "../Controller/AdminController.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const AdminLogin = Express.Router();
AdminLogin.post("/register",async(req , res)=>{
    await new AdminController().register(req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminLogin.post("/login", async(req , res)=>{
    await new AdminController().login(req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*---------------------------------------------------------*/
export {AdminLogin};
/*---------------------------------------------------------*/