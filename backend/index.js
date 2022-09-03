/*---------------------------------------------------------*/
import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { AdminLogin } from "./Routes/AdminLogin.js";
import { UserLogin } from "./Routes/UserLogin.js";
import { AdminCategoryOperation } from "./Routes/AdminCategoryOperation.js";
import { AdminProductOperation } from "./Routes/AdminProductOperation.js";
import { Middleware } from "./Middleware/Middleware.js";
import { AdminBrandOperation } from "./Routes/AdminBrandOperation.js"
/*-----*/
import { dirName } from "./dirName.js";
import path from "path";
/*-----*/
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
dotenv.config({
    path: "./config.env"
})
/*---------------------------------------------------------*/
let ConnStatus;
await mongoose.connect(process.env.DB).then(() => {
    ConnStatus = true;
    console.log("Connection Successful")
}).catch(() => {
    ConnStatus = false;
    console.log("Connection Error")
})
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
if (ConnStatus) {
    const App = Express();
    /*ADMIN LOGIN PENDING*/
    App.use(bodyParser.json({
        limit: "8mb"
    }))
    // console.log(path.join(__dirname , "Public"))
    App.use(Express.static(path.join( dirName , "Public")))
    App.use(cors({ origin: "*" }))
    App.use("/admin-panel", AdminLogin)
    /*ADMIN LOGIN DONE*/

    /*ADMIN CURD OPR*/
    App.use("/admin-panel/category",[Middleware.Auth, Middleware.FileStore],AdminCategoryOperation)
    App.use("/admin-panel/products",[Middleware.Auth, Middleware.FileStore],AdminProductOperation)
    App.use("/admin-panel/brand",[Middleware.Auth, Middleware.FileStore],AdminBrandOperation)
    /*ADMIN CURD OPR*/

    /*USER LOGIN PENDING*/
    App.use("/user", UserLogin)
    /*USER LOGIN DONE*/

    App.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}
/*---------------------------------------------------------*/