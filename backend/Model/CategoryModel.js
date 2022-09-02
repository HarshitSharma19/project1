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
    image: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    },
    homepage: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    slug: {
        type: String,
        unique: false
    }
})
/*---------------------------------------------------------*/
const CategoryModel = mongoose.model("Category", Schema)
/*---------------------------------------------------------*/
export { CategoryModel };
/*---------------------------------------------------------*/