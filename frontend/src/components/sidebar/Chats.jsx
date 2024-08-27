import Chat from './Chat';
import useGetChats from '../../hooks/useGetChats';
import { getRandomEmoji } from '../../utils/emojis';
const Chats = () => {
  const { loading, chats } = useGetChats();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {chats.map((chat, idx) => (
        <Chat
          key={chat._id}
          chat={chat}
          emoji={getRandomEmoji()}
          lastIdx={idx === chats.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinnner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Chats;

/*import Chat from './Chat'
const Chats =()=> {
    return(
    <div className="py-2 flex-col overflow-auto">
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
       
    </div>
    )
}
export default Chats*/
