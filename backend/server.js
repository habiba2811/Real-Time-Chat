import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
const app = express(); 

dotenv.config();
const PORT =process.env.PORT || 5000; 


app.get("/",(req,res)=>{ 
    res.send("hello hi")
})

/*app.get("/api/auth/signup",(req,res)=>{

    console.log("signup route");

})

app.get("/api/auth/login",(req,res)=>{

    console.log("login route");

})

app.get("/api/auth/logout",(req,res)=>{

    console.log("logout route");
    #INETEAD OF THIS WE'LL USE MIDDLELAYER

})*/
app.use("/api/auth",authRoutes)
app.listen(PORT,()=> console.log(`server running on port ${PORT}`)); 