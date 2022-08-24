/*---------------------------------------------------------*/
import { CategoryModel } from "../Model/CategoryModel.js";
import { ProductModel } from "../Model/ProductModel.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
class AOController{
    /*---------------------------------------------------------*/
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
    createProduct = (Data)=>{
        return new Promise((resolve , reject)=>{
            try{
                const data = ProductModel(Data);
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
    getProduct = ()=>{
        return new Promise(async(resolve , reject)=>{
            const data = await ProductModel.find();
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
    deleteProduct = (id)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await ProductModel.findByIdAndDelete(id);
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
    /*---------------------------------------------------------*/
}
/*---------------------------------------------------------*/
export { AOController };
/*---------------------------------------------------------*/