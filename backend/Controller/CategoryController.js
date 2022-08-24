/*---------------------------------------------------------*/
import { CategoryModel } from "../Model/CategoryModel.js";
/*---------------------------------------------------------*/
class CategoryController{
    /*---------------------------------------------------------*/
    createCategory = (Data)=>{
        return new Promise((resolve , reject)=>{
            try{
                const data = CategoryModel(Data);
                data.save();
                resolve({
                    msg : "Data Created Successfully",
                    status : 1
                })
            }catch(error){
                reject({
                    msg : "Data cannot be Created. Please try Again",
                    status : 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    getCategory = ()=>{
        return new Promise(async(resolve , reject)=>{
            const data = await CategoryModel.find();
            if(data.length == 0){
                reject({
                    msg: "No Data Found / Empty Data",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data Found",
                    data : data,
                    status : 1
                })
            }
            
        })
    }
    /*---------------------------------------------------------*/
    deleteCategory = (id)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await CategoryModel.findByIdAndDelete(id);
                if(data == null){
                    reject({
                        msg : "No Data Found",
                        status : 0
                    })
                }else{
                    resolve({
                        msg : "Data Deleted successfully",
                        status : 1
                    })
                }
            }catch(error){
                reject({
                    msg : "No Data Found , Internal Server Error",
                    status : 0
                })
            }
        })
    } 
    /*---------------------------------------------------------*/
    updateCategoryGet = (id)=>{
        return new Promise(async(resolve , reject)=>{
            const data = await CategoryModel.findById(id);
            if(data.length == 0){
                reject({
                    msg: "No Data Found / Empty Data",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data Found",
                    data : data,
                    status : 1
                })
            }
        })
    }
    updateCategory = (id , Data)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await CategoryModel.findByIdAndUpdate(id , Data)
                data.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            }catch(error){
                reject({
                    msg: "Data cannot be Updated",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
}
/*---------------------------------------------------------*/
export { CategoryController };
/*---------------------------------------------------------*/