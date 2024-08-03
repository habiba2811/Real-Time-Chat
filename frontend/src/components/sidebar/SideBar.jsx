import SearchInput from "./SearchInput"
import Chats from "./Chats"
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 px p-4 flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Chats/>
        <LogoutButton/> 
        
    </div>
  )
}

export default SideBar

/* import SearchInput from "./SearchInput"
import Chats from "./Chats"
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 px p-4 flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Chats/>
        <LogoutButton/> 
        
    </div>
  )
}

export default SideBar
*/
