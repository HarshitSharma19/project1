/*---------------------------------------------------------*/
import Express from "express";
import { AOController } from "../Controller/AOController.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const AdminOperation = Express.Router();
/*Create Opr*/
AdminOperation.post("/category/add",async(req , res)=>{
    await new AOController().createCategory(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})

AdminOperation.post("/products/add",async(req , res)=>{
    await new AOController().createProduct(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
/*Create Opr*/

/*READ Opr*/
AdminOperation.get("/category/view",async(req , res)=>{
    await new AOController().getCategory().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})

AdminOperation.get("/products/view",async(req , res)=>{
    await new AOController().getProduct().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminOperation.delete("/category/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new AOController().deleteCategory(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})

AdminOperation.delete("/products/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new AOController().deleteProduct(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Delete Opr*/

/*---------------------------------------------------------*/
export { AdminOperation };
/*---------------------------------------------------------*/