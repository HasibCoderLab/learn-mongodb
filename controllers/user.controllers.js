import User from "../models/user.model.js";

export const home =  (req, res) => {
  res.send("Hello");
}

// ========= 
export const create = async (req, res) => {
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
}

// ======== Read

export const read =  async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users)
  } catch (error) {
    return res.status(200).json({ message: "user not found" })
 
  }
}

//  ============= readBy condition ======
export const  readBycondition =   async( req,res) =>{
   try {
    const users = await User.find({age :{$lt:19}});
      return  res.status(200).json(users)
   } catch (error) {
     return  res.status(200).json({message:"user not found"})

   }
}


// ============= Read with Logic ========
export const ReadByLogic =  async( req,res) =>{
   try {
    const users = await User.find({$and : [{age:{$gt:18}},{name:{$eq :"Hasib"}} ]});
      return  res.status(200).json(users)
   } catch (error) {
     return  res.status(200). json({message:"user not found"})

   }
}

// ==================== Read By userName===============
export const readByUserName =  async (req,res) =>{
  try {
    const users = await User.findOne({userName:req.params.userName});
    return res.status(200).json(users)
  } 
  catch (error) {
  return res.status(404).json({ message: "user not found" });
}

}


// ========= UpdateBy Email  =============

export  const  update  = async( req,res) =>{

 try {
  let {name,age,email} = req.body;
  let user =  await User.updateOne({email},{name,age},{new:true})
  return res.status(200).json({message:"User Updated"})
 } catch (error) {
     return  res.status(200).json({message:"user not found"});

 }
}

// 

// ========= Update By ID ============

 export const UpdateByuser =  async( req,res) =>{

 try {
  let {name,age} = req.body;
  let id = req.params.id;
  let user =  await User.findByIdAndUpdate(id,{name,age},{new:true})
  return res.status(200).json(user)
 } catch (error) {
     return  res.status(200).json({message:"user not found"})

 }
}

// ============  Delete ==== 
export const deletefun = async (req, res) => {
  try {
    let { userName } = req.body;
    let user = await User.deleteOne({ userName });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(200).json({ message: "user not found" })
  }
}

// ======= delete By ID =====

export const deleteById = async (req,res) =>{
try {
  let id = req.params.id;
  let user = await User.findByIdAndDelete(id);
  return res.status(200).json(user);
} catch (error) {
   return  res.status(200).json({message:"user not found"})
}
}