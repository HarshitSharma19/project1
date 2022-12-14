/*---------------------------------------------------------*/
import { ProductModel } from "../Model/ProductModel.js";
import { dirName } from "../dirName.js";
import path from "path";
/*---------------------------------------------------------*/
class ProductController{
    /*---------------------------------------------------------*/
    createProduct = (Data , imgFile)=>{
        return new Promise((resolve , reject)=>{
            const Dir1 = path.join(dirName , "Public/Product/")
            const imgName = Math.floor(Math.random() * 100000) + new Date().getTime() + imgFile.name;
            const destination = Dir1 + imgName;
            const data = { ...Data , image: imgName }
            try{
                imgFile.mv(destination,(error)=>{
                    reject({
                        msg: "Cannot Get File",
                        status: 0
                    })
                })
                if(Data.name == undefined || imgFile.name == undefined){
                    reject({
                        msg: "Data cannot be Created. Please try Again",
                        status: 0
                    })
                }else{
                    const saveData = ProductModel(data);
                    saveData.save();
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
                    imgBaseUrl: `http://localhost:${process.env.PORT}/Product/`,
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
    updateProduct = (id , Data , imgFile)=>{
        return new Promise(async(resolve , reject)=>{
            const Dir1 = path.join(dirName , "Public/Product/")
            const imgName = Math.floor(Math.random() * 100000) + new Date().getTime() + imgFile.name;
            const destination = Dir1 + imgName;
            const data = { ...Data , image: imgName }
            try{
                imgFile.mv(destination,(error)=>{
                    reject({
                        msg: "Cannot Get File",
                        status: 0
                    })
                })
                const saveData = await ProductModel.findByIdAndUpdate(id , data)
                saveData.save();
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
    toggleProductStatus = (id, Data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await ProductModel.findByIdAndUpdate(id, { status: Data })
                console.log(data);
                data.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            } catch (error) {
                reject({
                    msg: "Data cannot be Updated",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    toggleProductHome = (id, Data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await ProductModel.findByIdAndUpdate(id, { homepage: Data })
                data.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            } catch (error) {
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