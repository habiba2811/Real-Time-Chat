import { useState } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import useChat from '../../zustand/useChat';
import useGetChats from '../../hooks/useGetChats';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedChat } = useChat();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }
    const chat = chats.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    );
    if (chat) {
      setSelectedChat(chat);
      setSearch('');
    } else toast.error('No such user found!');
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-blue-950 text-white">
        <RiUserSearchLine className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

/*import { RiUserSearchLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full' />
        <button type="submit" className="btn btn-circle bg-yellow-700 text-white"><RiUserSearchLine />

        </button>
    </form>
  )
}

export default SearchInput*/
