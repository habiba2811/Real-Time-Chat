import Chat from "../models/chatModel.js"
import Message from "../models/mesageModel.js"
import { getReceicerSocketId,io } from "../socket/socket.js";
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
      if (newMessage){
        { chat.messages.push(newMessage._id);}
      }
     
        //  await chat.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([chat.save(), newMessage.save()]);

        //socket io
        const receicerSocketId = getReceicerSocketId(receiverId);
        if(receicerSocketId){
         io.to(receicerSocketId).emit("newMessage",newMessage) //to.emit will only send to this user, emit sends to all users
        }

      res.status(201).json(newMessage)
   } catch (error) {
    console.log("Error in sendMessage controller:", error.message)
    res.status(500).json({error:"Internl server error"});
    
   }
};


export const getMessages = async(req,res)=>{
   try {
      const {id:userToChatId}= req.params;
      const senderId = req.user._id;

      const chat = await Chat.findOne({
         participants:{ $all :[senderId,userToChatId]},
      }).populate("messages"); // Not refrence but the message itself
    
      if(!chat) return res.status(200).json([]);

      const chats = chat.messages
      res.status(200).json(chats);
   } catch (error) {
      console.log("Error in getMessages controller:", error.message);
      res.status(500).json({error:"Internl server error"});
   }
}
