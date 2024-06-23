import React from 'react';
import { formatDuration } from '../utils/helper';

const VideoCard = ({ title, thumbnails, channelTitle, channelThumbnail, publishedAt, viewCount, duration }) => {

  return (
    <div className="flex flex-col px-2 mb-8">
      <div className='rounded-xl w-full relative'>
        <img src={thumbnails} alt={title} className='rounded-xl w-full' />
        <span className='rounded-md py-[2px] px-[4px] backdrop-blur-sm bg-black bg-opacity-60 text-white absolute bottom-2 right-3 
        text-[0.8rem]'>
          {formatDuration(duration)}
        </span>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-black font-semibold mb-2 leading-5 mt-3 line-clamp-2'>{title}</h4>
        <div className='text-gray-500 text-sm flex items-center'>
          <span className='w-7 h-7 rounded-full bg-gray-300 mr-2 border border-gray-200'>
            <img className='rounded-full w-7 h-7' src={channelThumbnail} alt={channelTitle} />
          </span>
          <div>
            <p>{channelTitle}</p>
            <p className='text-gray-500 text-sm relative'>
              <span className='mr-3 pr-3 relative after:absolute after:top-1/2 after:-right-0 after:w-[1px] after:h-4 after:bg-gray-400 after:-translate-y-1/2'>{viewCount} views</span>
              <span>{publishedAt}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
