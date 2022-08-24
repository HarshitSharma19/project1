/*---------------------------------------------------------*/
import Express from "express";
import { CategoryController } from "../Controller/CategoryController.js";
/*---------------------------------------------------------*/

const AdminCategoryOperation = Express.Router();

/*Create Opr*/
AdminCategoryOperation.post("/category/add",async(req , res)=>{
    await new CategoryController().createCategory(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
/*Create Opr*/

/*READ Opr*/
AdminCategoryOperation.get("/category/view",async(req , res)=>{
    await new CategoryController().getCategory().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminCategoryOperation.delete("/category/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().deleteCategory(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Delete Opr*/

/*Update Opr*/
AdminCategoryOperation.get("/Category/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().updateCategoryGet(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminCategoryOperation.put("/Category/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().updateCategory(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Opr*/

/*---------------------------------------------------------*/
export { AdminCategoryOperation };
/*---------------------------------------------------------*/