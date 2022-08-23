/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    Name : {
        type: String,
        length: 30,
        require: true
    },
    Details : {
        type: String,
        length: 200,
        require: true
    },
    Weight : {
        type: Number,
        require: true
    },
    Price : {
        type: Number,
        require: true
    },
    Discount : {
        type: Number,
        require: true
    },
    Image1 : {
        type: String,
        require: true
    },
    Image2 : {
        type: String,
        require: true
    },
    Image3 : {
        type: String,
        require: true
    },
    Image4 : {
        type: String,
        require: false
    },
    Image5 : {
        type: String,
        require: false
    },
    Rating : {
        type: Number,
        min: 0,
        max: 5,
        require: false
    }
})
/*---------------------------------------------------------*/
const ProductModel = mongoose.model("Product", Schema);
/*---------------------------------------------------------*/
export { ProductModel };
/*---------------------------------------------------------*/