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
        require: false
    },
    Image : {
        type: String,
        require: true
    },
    Rating : {
        type: Number,
        min: 0,
        max: 5,
        require: false
    },
    best_seller: {
        type: Boolean,
        default: false
    }
})
/*---------------------------------------------------------*/
const ProductModel = mongoose.model("Product", Schema);
/*---------------------------------------------------------*/
export { ProductModel };
/*---------------------------------------------------------*/