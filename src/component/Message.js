import React from 'react'

const Message = ({src, name, message}) => {
  return (
    <div className='w-full py-2 hover:bg-gray-200 px-2'> 
        <div className='flex justify-start items-start'>    
            <div className='flex justify-start items-center w-[8%]'>
                <span className='rounded-full'>
                    <img className='rounded-full w-8 h-8' src={src} alt={name} />
                </span>
            </div>
            <div className='w-[92%]'>
                <span className='font-bold text-sm'>
                    {name}
                </span>
                <p className='m-0 p-0 font-normal text-xs break-words'>{message}</p>
            </div>
        </div>
    </div>
  )
}

export default Message
