/*---------------------------------------------------------*/
import { CategoryModel } from "../Model/CategoryModel.js";
import { dirName } from "../dirName.js";
import path from "path";
/*---------------------------------------------------------*/
class CategoryController {
    /*---------------------------------------------------------*/
    createCategory = (Data , imgFile) => {
        return new Promise((resolve, reject) => {
            const Dir1 = path.join(dirName , "Public/Category/")
            const imgName = Math.floor(Math.random() * 1000000)+ new Date().getTime() + imgFile.name
            const destination = Dir1 + imgName;
            const data = { ...Data , image: imgName }
            try{
                imgFile.mv(destination,(error)=>{
                    reject({
                        msg: "Cannot Get File",
                        status: 0
                    })
                })
                if(Data.name == undefined || imgFile.name == undefined){
                    reject({
                        msg: "Data cannot be Created. Please try Again",
                        status: 0
                    })
                }else{
                    const saveData = CategoryModel(data);
                    saveData.save();
                    resolve({
                        msg: "Data Created Successfully",
                        status: 1
                    });
                }
            }catch(error){
                reject({
                    msg: "Data cannot be Created. Please try Again",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    getCategory = () => {
        return new Promise(async (resolve, reject) => {
            const data = await CategoryModel.find();
            // console.log(data)
            if (data.length == 0) {
                reject({
                    msg: "No Data Found / Empty Data",
                    status: 0
                })
            } else {
                resolve({
                    msg: "Data Found",
                    data: data,
                    imgBaseUrl: `http://localhost:${process.env.PORT}/Category/`,
                    status: 1
                })
            }

        })
    }
    /*---------------------------------------------------------*/
    deleteCategory = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await CategoryModel.findByIdAndDelete(id);
                if (data == null) {
                    reject({
                        msg: "No Data Found",
                        status: 0
                    })
                } else {
                    resolve({
                        msg: "Data Deleted successfully",
                        status: 1
                    })
                }
            } catch (error) {
                reject({
                    msg: "No Data Found , Internal Server Error",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    updateCategoryGet = (id) => {
        return new Promise(async (resolve, reject) => {
            const data = await CategoryModel.findById(id);
            if (data.length == 0) {
                reject({
                    msg: "No Data Found / Empty Data",
                    status: 0
                })
            } else {
                resolve({
                    msg: "Data Found",
                    data: data,
                    status: 1
                })
            }
        })
    }
    updateCategory = (id, Data , imgFile) => {
        return new Promise(async (resolve, reject) => {
            const Dir1 = path.join(dirName , "Public/Brand/")
            const imgName = Math.floor( Math.random() *1000000) + new Date().getTime() + imgFile.name
            const destination = Dir1 + imgName;
            const data = { ...Data , logo: imgName }
            try{
                imgFile.mv(destination,(error)=>{
                    reject({
                        msg: "Cannot Get File",
                        status: 0
                    })
                })
                const saveData = await CategoryModel.findByIdAndUpdate(id, data)
                saveData.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            }catch (error) {
                reject({
                    msg: "Data cannot be Updated",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    toggleCategoryStatus = (id, Data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await CategoryModel.findByIdAndUpdate(id, { status: Data })
                data.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            } catch (error) {
                reject({
                    msg: "Data cannot be Updated",
                    status: 0
                })
            }
        })
    }
    /*---------------------------------------------------------*/
    toggleCategoryHome = (id, Data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await CategoryModel.findByIdAndUpdate(id, { homepage: Data })
                data.save();
                resolve({
                    msg: "Data Updated Successfully",
                    status: 1
                })
            } catch (error) {
                reject({
                    msg: "Data cannot be Updated",
                    status: 0
                })
            }
        })
    }
}
/*---------------------------------------------------------*/
export { CategoryController };
/*---------------------------------------------------------*/