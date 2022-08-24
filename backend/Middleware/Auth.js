/*---------------------------------------------------------*/
import Jwt from "jsonwebtoken";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Auth = (req , res , next)=>{
    const Header = req.headers.authorization
    Jwt.verify( Header , process.env.TOKEN_KEY, (error , data)=>{
        if(error){
            res.send("INVALID TOKEN").status(401)
        }else{
            req.User = data
            next();
        }
    })
}
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
export {Auth};
/*---------------------------------------------------------*/