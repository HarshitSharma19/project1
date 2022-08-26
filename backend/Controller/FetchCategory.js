/*---------------------------------------------------------*/
import { CategoryModel } from "../Model/CategoryModel.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
class FetchCategory{
    getCategory = ()=>{
        return new Promise(async(resolve , reject)=>{
            const data = await CategoryModel.find();
            if(data.length == 0){
                reject({
                    msg : "No data found",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data found",
                    dataCategory : data,
                    status : 1
                })
            }
        })
    }
}
/*---------------------------------------------------------*/
export { FetchCategory };
/*---------------------------------------------------------*/