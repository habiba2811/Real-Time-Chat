import { useSocketContext } from '../../context/SocketContext.jsx';
import useChat from '../../zustand/useChat.js';

const Chat = ({ chat, lastIdx, emoji }) => {
  const { selectedChat, setSelectedChat } = useChat();

  const isSelected = selectedChat?._id === chat._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-700 rounded  p-2 py-1 cursor-pointer
    ${isSelected ? 'bg-blue-950' : ''}

    `}
        onClick={() => setSelectedChat(chat)}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={chat.profilepic} alt="user avatar" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{chat.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Chat;
/*const Chat =()=> {
    return<>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded  p-2 py-1 cursor-pointer">
    <div className="avatar online">
        <div className="w-12 rounded-full"><img src="https://avatar.iran.liara.run/public" alt="user avatar" /></div>
    </div>
    </div>
    <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
                <span className="text-x1">
                    🌹
                </span>
            
        </div>
    </div>

    <div className="divider my-0 py-0 h-1"/>
    </>;
    
};
export default Chat*/
