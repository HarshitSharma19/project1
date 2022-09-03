/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    Email : {
        type: String,
        require: true,
        unique: true
    },
    Password : {
        type : String,
        require : true
    }
})
const AdminLoginModel = mongoose.model("Admin",Schema);
/*---------------------------------------------------------*/
export {AdminLoginModel};
/*---------------------------------------------------------*/