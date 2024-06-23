import React from 'react'

const Comments = ({src, userName, date, message}) => {
  return (
    <div className='flex items-start justify-start mb-6'>
      <div className='w-10 h-10 bg-gray-300 rounded-full'>
        <img className='w-10 h-10 rounded-full' src={src} alt='avatar' />
      </div>
      <div className='ml-3 w-[90%]'>
        <h4 className='text-black text-md font-medium'><span>{userName}</span>
          <span className='text-gray-600 ml-4 font-normal'>{date}</span>
        </h4>
        <p className='text-sm'>{message}</p>
      </div>
    </div>
  )
}

export default Comments;
