/*---------------------------------------------------------*/
import { BrandModel } from "../Model/BrandModel.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
/*---------------------------------------------------------*/
class BrandController{
    /*---------------------------------------------------------*/
    createBrand = (Data ,imgFile)=>{
        return new Promise((resolve , reject)=>{
            const __dirname = dirname(fileURLToPath(import.meta.url));
            const imgName = Math.floor(Math.random() * 1000000)+ new Date().getTime() + imgFile.name
            const destination = __dirname + "/Brand" + imgName;
            const data = { ...Data , logo: imgName }
            try{

                if(Data.name == undefined || imgFile.name == undefined){

                    reject({
                        msg: "Data cannot be Created. Please try Again",
                        status: 0
                    })
                }else{
                    const saveData = BrandModel(data);
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
    getBrand = ()=>{
        return new Promise(async(resolve , reject)=>{
            const data = await BrandModel.find();
            if(data.length == 0){
                reject({
                    msg: "No Data Found / Empty Data",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data Found",
                    data : data,
                    imgBaseUrl: `http://localhost:${process.env.PORT}/Brand/`,
                    status : 1
                })
            }
            
        })
    }
    /*---------------------------------------------------------*/
    deleteBrand = (id)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await BrandModel.findByIdAndDelete(id);
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
    updateBrandGet = (id)=>{
        return new Promise(async(resolve , reject)=>{
            const data = await BrandModel.findById(id);
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
    updateBrand = (id , Data)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await BrandModel.findByIdAndUpdate(id , Data)
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
    toggleBrandStatus = (id , Data)=>{
        return new Promise(async(resolve , reject)=>{
            try{
                const data = await BrandModel.findByIdAndUpdate(id , {status : Data})
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
export { BrandController };
/*---------------------------------------------------------*/