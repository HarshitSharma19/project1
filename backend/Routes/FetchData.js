/*---------------------------------------------------------*/
import Express from "express";
import { FetchAllData } from "../Controller/FetchAllData.js";
// import { FetchCategory } from "../Controller/FetchCategory.js";
// import { FetchProduct } from "../Controller/FetchProduct.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const FetchData = Express.Router();


FetchData.get("*",async(req , res)=>{
    await new FetchAllData().getAllData(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
// FetchData.get("*",async(req , res)=>{
//     await new FetchCategory().getCategory(req.body).then((success)=>{
//         res.send(success).status(200);
//     }).catch((error)=>{
//         res.send(error).status(400);
//     })
// })
/*---------------------------------------------------------*/
export { FetchData };
/*---------------------------------------------------------*/