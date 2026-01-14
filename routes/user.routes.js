import { Router } from "express";

const userRouter = Router();



userRouter.get("/", (req, res) => {
  res.send("Hello");
});

// ====== Post Route ======
userRouter.post("/create", async (req, res) => {
  try {
    let { name, age, email, userName } = req.body
    const newUser = await User.create({
      name,
      age,
      email,
      userName
    });
    res.status(201).json({ message: "Usre Created" })
  } catch (error) {
    return res.status(400).json({ message: error })
  }
});

// ====== Get Route ======

userRouter.get("/read", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users)
  } catch (error) {
    return res.status(200).json({ message: "user not found" })

  }
});

// // ====== Condition Route ======

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

// userRouter.put( "/update/:id", async( req,res) =>{

//  try {
//   let {name,age} = req.body;
//   let id = req.params.id;
//   let user =  await User.findByIdAndUpdate(id,{name,age},{new:true})
//   return res.status(200).json(user)
//  } catch (error) {
//      return  res.status(200).json({message:"user not found"})

//  }
// });


//  ============== CRUD (U) => Update ============


// userRouter.put( "/update", async( req,res) =>{

//  try {
//   let {name,age,email} = req.body;
//   let user =  await User.updateOne({email},{name,age},{new:true})
//   return res.status(200).json({message:"User Updated"})
//  } catch (error) {
//      return  res.status(200).json({message:"user not found"});

//  }
// });

//  ============== CRUD (D) => Delete  ============

// userRouter.delete("/delete/:id", async (req,res) =>{
// try {
//   let id = req.params.id;
//   let user = await User.findByIdAndDelete(id);
//   return res.status(200).json(user);
// } catch (error) {
//    return  res.status(200).json({message:"user not found"})
// }
// });

//   ===============  deleteOne ========

//  ============== CRUD (D) => Delete  ============

userRouter.delete("/delete", async (req, res) => {
  try {
    let { userName } = req.body;
    let user = await User.deleteOne({ userName });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(200).json({ message: "user not found" })
  }
})


export default userRouter;
