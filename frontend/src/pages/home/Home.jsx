import SideBar from "../../components/sidebar/SideBar"
import MessageContiner from "../../components/messages/MessageContainer"

const home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar/>
      <MessageContiner/>
    </div>
  )
}

export default home