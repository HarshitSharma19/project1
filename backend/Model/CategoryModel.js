/*---------------------------------------------------------*/
import mongoose from "mongoose";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const Schema = mongoose.Schema({
    Name : {
        type: String,
        require: true
    },
    Brand : {
        type: String,
        require: true
    }
})
/*---------------------------------------------------------*/
const CategoryModel = mongoose.model("Category", Schema);
/*---------------------------------------------------------*/
export { CategoryModel };
/*---------------------------------------------------------*/