import User from "../models/user.model";

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
//  Read By userName
export const readByUserName =  async (req,res) =>{
  try {
    const users = await User.findOne({userName:req.params.userName});
    return res.status(200).json(users)
  } catch (error) {
    
  }
}


// =========   =============

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

// ========= Update By user

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

// ======= delete by UserName =====

export const deleteByUserName = async (req,res) =>{
try {
  let id = req.params.id;
  let user = await User.findByIdAndDelete(id);
  return res.status(200).json(user);
} catch (error) {
   return  res.status(200).json({message:"user not found"})
}
}

//  Delete
export const deletefun = async (req, res) => {
  try {
    let { userName } = req.body;
    let user = await User.deleteOne({ userName });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(200).json({ message: "user not found" })
  }
}