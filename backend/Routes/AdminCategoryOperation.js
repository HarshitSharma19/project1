/*---------------------------------------------------------*/
import Express from "express";
import { CategoryController } from "../Controller/CategoryController.js";
/*---------------------------------------------------------*/

const AdminCategoryOperation = Express.Router();

/*Create Opr*/
AdminCategoryOperation.post("/add",async(req , res)=>{
    await new CategoryController().createCategory(req.body).then((success)=>{
        res.send(success).status(200);
    }).catch((error)=>{
        res.send(error).status(400);
    })
})
/*Create Opr*/

/*READ Opr*/
AdminCategoryOperation.get("/view",async(req , res)=>{
    await new CategoryController().getCategory().then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*READ Opr*/

/*Delete Opr*/
AdminCategoryOperation.delete("/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().deleteCategory(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Delete Opr*/

/*Update Opr*/
AdminCategoryOperation.get("/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().updateCategoryGet(id).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
AdminCategoryOperation.put("/update/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().updateCategory(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Opr*/

/*Update Status*/
AdminCategoryOperation.put("/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().toggleCategoryStatus(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Status*/

/*Update HomePage*/
AdminCategoryOperation.put("/view/:id",async(req , res)=>{
    const id = req.params.id;
    await new CategoryController().toggleCategoryHome(id , req.body).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update HomePage*/
/*---------------------------------------------------------*/
export { AdminCategoryOperation };
/*---------------------------------------------------------*/