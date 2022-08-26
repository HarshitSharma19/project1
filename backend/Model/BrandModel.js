/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    logo: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    },
    creater_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    slug: {
        type: String , 
        unique: false
    } 
})
/*---------------------------------------------------------*/
const BrandModel = mongoose.model("Brand", Schema);
/*---------------------------------------------------------*/
export { BrandModel };
/*---------------------------------------------------------*/