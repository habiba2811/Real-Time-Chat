
export const signup =async(req,res)=>{
    try{
        const {fullName, username,password,confirmPassword,gender}= req.body;

    }
    catch(error){

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
