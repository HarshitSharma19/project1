/*---------------------------------------------------------*/
import Jwt from "jsonwebtoken";
import fileUpload from "express-fileupload";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Middleware = {
    Auth: (req , res , next)=>{
        const Header = req.headers.authorization
        Jwt.verify( Header , process.env.TOKEN_KEY, (error , data)=>{
            if(error){
                res.send("INVALID TOKEN").status(401)
            }else{
                req.User = data
                next();
            }
        })
    },
    FileStore: fileUpload({
        limits: { fileSize: 8 * 1024 * 1024 },
        createParentPath: true
    })
}
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
export {Middleware};
/*---------------------------------------------------------*/