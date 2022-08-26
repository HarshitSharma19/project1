/*---------------------------------------------------------*/
import { ProductModel } from "../Model/ProductModel.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
class FetchProduct{
    getProduct = ()=>{
        return new Promise(async(resolve , reject)=>{
            const data = await ProductModel.find();
            if(data.length == 0){
                reject({
                    msg : "No data found",
                    status : 0
                })
            }else{
                resolve({
                    msg : "Data found",
                    dataProduct : data,
                    status : 1
                })
            }
        })
    }
}
/*---------------------------------------------------------*/
export { FetchProduct };
/*---------------------------------------------------------*/