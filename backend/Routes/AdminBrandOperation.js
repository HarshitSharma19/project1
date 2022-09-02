/*---------------------------------------------------------*/
import Express from "express";
import { BrandController } from "../Controller/BrandController.js";
/*---------------------------------------------------------*/

const AdminBrandOperation = Express.Router();
/*Create Opr*/
AdminBrandOperation.post("/add",async(req , res)=>{
    await new BrandController().createBrand(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
/*Create Opr*/

/*READ Opr*/
AdminBrandOperation.get("/view",async(req , res)=>{
    await new BrandController().getBrand().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminBrandOperation.delete("/delete/:id",async (req , res)=>{
    const id = req.params.id;
    await new BrandController().deleteBrand(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })

})
/*Delete Opr*/

/*Update Opr*/
AdminBrandOperation.get("/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new BrandController().updateBrandGet(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminBrandOperation.put("/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new BrandController().updateBrand(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Opr*/

/*Update Status*/
AdminBrandOperation.put("/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new BrandController().toggleBrandStatus(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Status*/
/*---------------------------------------------------------*/
export { AdminBrandOperation };
/*---------------------------------------------------------*/