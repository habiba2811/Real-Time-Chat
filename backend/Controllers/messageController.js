import Chat from "../models/chatModel.js"
import Message from "../models/mesageModel.js"
export const sendMessage = async(req,res)=>{
   try {
      const {message}=req.body;
      const{id:receiverId}=req.params;
      const senderId = req.user._id;
     let chat= await Chat.findOne({
         participants:{ $all :[senderId,receiverId]},
      })

      if (!chat){
         chat = await Chat.create({
            participants: [senderId,receiverId],
         })
      }
      const newMessage = new Message({
         senderId: senderId,
         receiverId:receiverId,
         message: message,
      })
      if (newMessage)
        { chat.messages.push(newMessage._id);}
      // SOCKET IO FUNCTIONALITY WILL BE HERE

      //  await chat.save();
        // await newMessage.save();
        // this will run in parallel
        await Promise.all([chat.save(), newMessage.save()]);
      res.status(201).json(newMessage)
   } catch (error) {
    console.log("Error in sendMeassage controller:", error.message)
    res.status(500).json({error:"Internl server error"});
    
   }
}