/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    contact : {
        type: Number,
        length: 13,
        require: true,
        unique: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password : {
        type : String,
        require : true
    }
})
const UserLoginModel = mongoose.model("User",Schema);
/*---------------------------------------------------------*/
export {UserLoginModel};
/*---------------------------------------------------------*/