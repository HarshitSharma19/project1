/*---------------------------------------------------------*/
import { ProductModel } from "../Model/ProductModel.js";
/*---------------------------------------------------------*/
class ProductController{
    /*---------------------------------------------------------*/
    createProduct = (Data)=>{
        return new Promise((resolve , reject)=>{
            try{
                if(Data.name == undefined || Data.image == undefined){
                    reject({
                        msg: "Data cannot be Created. Please try Again",
                        status: 0
                    })
                }else{
                    const data = ProductModel(Data);
                    data.save();
                    resolve({
                        msg: "Data Created Successfully",
                        status: 1
                    });
                }
                }catch(error){
                    reject({
                        msg: "Data cannot be Created. Please try Again",
                        status: 0
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
    updateProductGet = (id)=>{
        return new Promise(async(resolve , reject)=>{
            const data = await ProductModel.findById(id);
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
    updateProduct = (id , Data)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await ProductModel.findByIdAndUpdate(id , Data)
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
export { ProductController };
/*---------------------------------------------------------*/