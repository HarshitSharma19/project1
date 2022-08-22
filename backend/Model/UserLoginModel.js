/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Contact : {
        type: Number,
        length: 13,
        require: true
    },
    Email : {
        type: String,
        require: true
    },
    Password : {
        type : String,
        require : true
    }
})
const UserLoginModel = mongoose.model("User",Schema);
/*---------------------------------------------------------*/
export {UserLoginModel};
/*---------------------------------------------------------*/