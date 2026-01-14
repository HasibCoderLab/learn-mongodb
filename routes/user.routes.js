import { Router } from "express";
import { create, deletefun, home, read, readByUserName, update, UpdateByuser,  }
 from "../controllers/user.controllers.js";
const userRouter = Router();



userRouter.get("/",home);

// ====== Post Route ======
userRouter.post("/create",create );

// ====== Get Route ======

userRouter.get("/read",read);

// // ====== Condition Route ======

userRouter.get("/read/:userName" ,readByUserName)

// userRouter.get( "/read",  async( req,res) =>{
//    try {
//     const users = await User.find({age :{$lt:19}});
//       return  res.status(200).json(users)
//    } catch (error) {
//      return  res.status(200).json({message:"user not found"})

//    }
// });

// ====== logical operatots  ======

// userRouter.get( "/read",  async( req,res) =>{
//    try {
//     const users = await User.find({$and : [{age:{$gt:18}},{name:{$eq :"Hasib"}} ]});
//       return  res.status(200).json(users)
//    } catch (error) {
//      return  res.status(200). json({message:"user not found"})

//    }
// });



// ====== Get Route  find User Name ======

// userRouter.get( "/read/:userName",  async( req,res) =>{
//    try {
//     const users = await User.findOne({userName:req.params.userName});
//       return  res.status(200).json(users)
//    } catch (error) {
//      return  res.status(200).json({message:"user not found"})

//    }
// });



//  =============  Learn CRUD  U => {Update} ========= 

// userRouter.put( "/update/:id",UpdateByuser);


//  ============== CRUD (U) => Update ============


// userRouter.put( "/update",update);

//  ============== CRUD (D) => Delete  ============

// userRouter.delete("/delete/:id", );

//   ===============  deleteOne ========

//  ============== CRUD (D) => Delete  ============

userRouter.delete("/delete", deletefun)


export default userRouter;
