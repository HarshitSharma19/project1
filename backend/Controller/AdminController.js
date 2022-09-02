/*---------------------------------------------------------*/
import { AdminLoginModel } from "../Model/AdminLoginModel.js";
import { Decrypter, Encrypter } from "../library/helper.js";
import Jwt from "jsonwebtoken";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
class AdminController{
    /*---------------------------------------------------------*/
    register = (Data)=>{
        return new Promise((resolve , reject)=>{
            try{
                const saveData = Encrypter(Data.Password);
                const newData = AdminLoginModel({...Data , Password : saveData});
                newData.save();
                resolve({
                    msg : "User Registerd Successfully",
                    Email : newData.Email,
                    Password : Data.Password,
                    status : 1
                })
            }catch(error){
                reject({
                    msg: "Cannot Register",
                    status: 0 
                })
            }
            
        })
    }
    /*---------------------------------------------------------*/
    /*---------------------------------------------------------*/
    login = (Data)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const dbData = await AdminLoginModel.findOne({Email : Data.Email})
                if(dbData != null){
                    const password = Decrypter(dbData.Password)
                    if(password == Data.Password && dbData.Email == Data.Email){
                        const token = Jwt.sign({ exp: Math.floor(Date.now()/1000) + (60 * 60) , User : Data},process.env.TOKEN_KEY)
                        resolve({
                            msg : "Login Success",
                            email : dbData.Email,
                            token : token,
                            status : 1
                        })
                    }else{
                        reject({
                            msg: "Credentials doesn't Match",
                            status : 0
                        })
                    }
                }else{
                    reject({
                        msg : "Credentials doesn't Match",
                        status : 0
                    })
                }
            }catch(error){
                reject({
                    msg: "Please Enter Details",
                    status : 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
}
/*---------------------------------------------------------*/
export {AdminController};
/*---------------------------------------------------------*/