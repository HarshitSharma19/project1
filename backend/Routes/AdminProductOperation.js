/*---------------------------------------------------------*/
import Express from "express";
import { ProductController } from "../Controller/ProductController.js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
const AdminProductOperation = Express.Router();
/*Create Opr*/
AdminProductOperation.post("/add",async(req , res)=>{
    const imageFile = req.files.image;
    await new ProductController().createProduct(req.body , imageFile).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
}) 
/*Create Opr*/

/*READ Opr*/
AdminProductOperation.get("/view",async(req , res)=>{
    await new ProductController().getProduct().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminProductOperation.delete("/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new ProductController().deleteProduct(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Delete Opr*/

/*Update Opr*/
AdminProductOperation.get("/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new ProductController().updateProductGet(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminProductOperation.put("/update/:id",async(req , res)=>{
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