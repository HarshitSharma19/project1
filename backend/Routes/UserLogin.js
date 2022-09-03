/*---------------------------------------------------------*/
import Express from "express";
import { UserController } from "../Controller/UserController.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const UserLogin = Express.Router();
UserLogin.post("/register",async(req , res)=>{
    await new UserController().register(req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
UserLogin.post("/login", async(req , res)=>{
    await new UserController().login(req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*---------------------------------------------------------*/
export {UserLogin};
/*---------------------------------------------------------*/