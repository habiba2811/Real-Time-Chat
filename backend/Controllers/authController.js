import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const signup =async(req,res)=>{
    try{
        const {fullName, username,password,confirmPassword,gender}= req.body;
      if (password !== confirmPassword){
        return res.status(400).json({error:"Passwords must match!"})
      }
      const user = await User.findOne({username});
      if(user){
        return res.status(400).json({error:"User name already exists!"})}
    
    //Hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilepic: gender === "male"? boyProfilePic : girlProfilePic
    })
    if (newUser){await newUser.save();
    res.status(201).json({
        _id : newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilepic:newUser.profilepic
    })
}else{
    res.status(400).json({error:"Invalid user data"});
}
}catch(error){
    console.log("Error in signup controoler", error.message)
    res.status(500).json({error:error.message})
    }
};
export const loginUser =(req,res)=>{
    res.send("login");
    console.log("loginUser");
    
}

export const logoutUser =(req,res)=>{
    res.send("logout");
    console.log("logoutUser");
}
