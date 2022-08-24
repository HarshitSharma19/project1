/*---------------------------------------------------------*/
import Express from "express";
import { ProductController } from "../Controller/ProductController.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const AdminProductOperation = Express.Router();
/*Create Opr*/
AdminProductOperation.post("/products/add",async(req , res)=>{
    await new ProductController().createProduct(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
/*Create Opr*/

/*READ Opr*/
AdminProductOperation.get("/products/view",async(req , res)=>{
    await new ProductController().getProduct().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminProductOperation.delete("/products/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new ProductController().deleteProduct(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Delete Opr*/

/*Update Opr*/
AdminProductOperation.get("/products/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new ProductController().updateProductGet(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminProductOperation.put("/products/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new ProductController().updateProduct(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Opr*/

/*---------------------------------------------------------*/
export { AdminProductOperation };
/*---------------------------------------------------------*/