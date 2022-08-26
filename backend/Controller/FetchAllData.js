/*---------------------------------------------------------*/
import { CategoryModel } from "../Model/CategoryModel.js";
import { ProductModel } from "../Model/ProductModel.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
class FetchAllData{
    getAllData = ()=>{
        return new Promise(async(resolve , reject)=>{
            const dataC = await CategoryModel.find();
            const dataP = await ProductModel.find();
            if(dataC.length == 0 && dataP.length == 0){
                reject({
                    msg : "No data found",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data found",
                    dataCategory : dataC,
                    dataProduct : dataP,
                    status : 1
                })
            }
        })
    }
}
/*---------------------------------------------------------*/
export { FetchAllData };
/*---------------------------------------------------------*/