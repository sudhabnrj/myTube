import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch } from 'react-redux';
import {removeSubscription} from '../utils/subscribeSlice';

const ChannelCard = ({id, src, channelName, subscriber}) => {
    const dispatch = useDispatch();

    const handleRemoveSubsription = () => {
        dispatch(removeSubscription(id));
    }

  return (
    <div className="flex flex-col justify-center items-center md:w-40 lg:w-52 text-center px-3 py-5 m-5 relative bg-gray-100 hover:bg-gray-200">
        <div>
            <img src={src} alt="channel-logo" className="h-32 w-32 md:h-40 md:w-40 rounded-full" />
        </div>
        <div className="mt-2">
            <h2 className="font-semibold text-base md:text-lg">{channelName}</h2>
            <p className="text-gray-500 text-sm">
                {subscriber} subscribers
            </p>
        </div>
        <div className="absolute top-1 right-1">
            <p className="text-xs md:text-base">
                <CloseOutlinedIcon onClick={()=> handleRemoveSubsription()} className='cursor-pointer' />
            </p>
        </div>
    </div>
  )
}

export default ChannelCard
