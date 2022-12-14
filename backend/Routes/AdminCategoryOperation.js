/*---------------------------------------------------------*/
import Express from "express";
import { CategoryController } from "../Controller/CategoryController.js";
/*---------------------------------------------------------*/

const AdminCategoryOperation = Express.Router();

/*Create Opr*/
AdminCategoryOperation.post("/add",async(req , res)=>{
    const imageFile = req.files.image;
    await new CategoryController().createCategory(req.body , imageFile).then((success)=>{
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
    const imageFile = req.files.image;
    await new CategoryController().updateCategory(id , req.body , imageFile).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Opr*/

/*Update Status*/
AdminCategoryOperation.put("/view/:id",async(req , res)=>{
    const id = req.params.id;
    const Body = req.body;
    await new CategoryController().toggleCategoryStatus(id , Body.status).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update Status*/

/*Update HomePage*/
AdminCategoryOperation.patch("/view/:id",async(req , res)=>{
    const id = req.params.id;
    const Body = req.body;
    await new CategoryController().toggleCategoryHome(id , Body.homepage).then((success)=>{
        res.send(success).status(200)
    }).catch((error)=>{
        res.send(error).status(400)
    })
})
/*Update HomePage*/
/*---------------------------------------------------------*/
export { AdminCategoryOperation };
/*---------------------------------------------------------*/