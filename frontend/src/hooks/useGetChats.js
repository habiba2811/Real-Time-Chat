import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data);
      } catch (error) {
        toast.error(error.messsage);
      } finally {
        setLoading(false);
      }
    };
    getChats();
  }, []);
  return { loading, chats };
};
export default useGetChats;
