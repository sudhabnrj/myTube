import React, {useEffect, useState} from 'react'
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from '../utils/chatSlice';
import { generate, generateRandomText } from '../utils/helper';
import {OTHER_USER_THUMB} from '../utils/constants';

const LiveChat = () => {
    const dispatch = useDispatch();
    const displayMessage = useSelector((state)=>state.chat.messages)
    const [liveMessage, setLiveMessage] = useState('');

    useEffect(()=> {

        const i = setInterval(() => {
            dispatch(addMessage({
                name: generate(),
                message: generateRandomText(100),
                src: OTHER_USER_THUMB,
            }));
            //console.log('Api Poling');
        }, 1000);

        return () => clearInterval(i);

    }, []);

    const handleSendMessage = (e)=> {
        e.preventDefault();
        dispatch(addMessage({
            name: 'Sudha Chandan Banerjee',
            message: liveMessage,
            src: 'https://yt3.ggpht.com/yti/ANjgQV87ZBcZKVMCAoBD3IkKbwZy0e0WMH4Oz7TOFDzMP45NX2s=s88-c-k-c0x00ffffff-no-rj-mo'
        }));
        setLiveMessage('');
    }

    return (
        <>
            <div className='flex flex-col-reverse my-2 overflow-y-auto livechat-scrollbar h-[568px]'>
                {displayMessage && displayMessage.map((chat, index)=> (
                    <Message key={index}
                        src={chat.src}
                        name={chat.name}
                        message={chat.message}
                    />
                ))}
            </div>
            <form onSubmit={handleSendMessage} 
                className='p-4 flex justify-between items-stretch bg-gray-200 rounded-b-lg mt-auto'>
                <input placeholder='Enter you message...' value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)} type='text' className='border border-gray-500 px-4 py-2 text-left w-[90%]' />
                <button className='w-[10%] border border-gray-500 rounded-r-md'>Send</button>
            </form>
        </>
    )
}

export default LiveChat
