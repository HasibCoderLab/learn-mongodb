import { Router } from "express";

import { create, deleteById, deletefun, home, read, readBycondition, ReadByLogic, readByUserName, update, UpdateByuser,   }

 from "../controllers/user.controllers.js";
const userRouter = Router();



userRouter.get("/",home);

// ====== Post Route ======
userRouter.post("/create",create );

// ====== Get Route ======
userRouter.get("/read",read);

// ====== Condition Route ======
userRouter.get("/read/:userName", readBycondition);

// ====== logical operatots  ====== 
userRouter.get( "/read",ReadByLogic);

// ====== Get Route  find User Name ======
userRouter.get( "/read/:userName",readByUserName);

//  =============  Learn CRUD  U => {Update} ========= 
userRouter.put( "/update/:id",UpdateByuser);

//  ============== CRUD (U) => Update ============
userRouter.put( "/update",update);

//  ============== CRUD (D) => Delete  ============
userRouter.delete("/delete/:id",deleteById );

//  ============== CRUD (D) => Delete  ============
userRouter.delete("/delete", deletefun)


export default userRouter;
