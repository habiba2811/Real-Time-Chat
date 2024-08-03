import {BsSend} from 'react-icons/bs'
const MessageInput = () => {
  return (
    <form action="px-4 my-3">
        <div className='w-full relative'>
            <input type="text"
            className='border text -sm rounded-lgblock w-full p-2.5 bg-blue-100 border-gray-700 text-white' 
            placeholder='Sent a message'/>
            <button type='submint' className='absolute inset-y-0 end-0 flex items-center pe-3'> <BsSend/></button>
            
        </div>
    </form>
  )
}

export default MessageInput

//Starter code
/*import {BsSend} from 'react-icons/bs'
const MessageInput = () => {
  return (
    <form action="px-4 my-3">
        <div className='w-full'>
            <input type="text"
            className='border text -sm rounded-lgblock w-full p-2.5 bg-gray-700 border-gray-600 text-white' 
            placeholder='Sent a message'/>
            <button type='submint' className='absolute inset-y-0 end-0 flex items-center pe-3'></button>
            <BsSend/>
        </div>
    </form>
  )
}

export default MessageInput*/