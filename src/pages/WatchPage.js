import YoutubeIframe from '../component/YoutubeIframe';
import { useSearchParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {setCloseMenu} from '../utils/appSlice';
import useDetailsVideo from '../hooks/useDetailsVideo';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import useChannelDetails from '../hooks/useChannelDetails';
import Comments from '../component/Comments';
import useComments from '../hooks/useComments';
import { setIsSubscribe } from '../utils/subscribeSlice';
import { handleViewCount } from '../utils/helper';
import LiveChat from './../component/LiveChat';

const WatchPage = () => {
  const videoDetailsInfo = useSelector((store)=> store.videos.detailsVideo);
  const channelDetails = useSelector((store) => store.channel.channelDetails);
  const displayComment = useSelector((state)=> state.comment.listOfComments);
  const dispatch= useDispatch();
  const [searchParams] = useSearchParams ();
  const [channelId, setChannelId] = useState(null);
  const [isSubscribeButton, setIsSubscribeButton] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);

  useDetailsVideo(searchParams);
  useComments(searchParams);

  useEffect(()=> {
    if(videoDetailsInfo && videoDetailsInfo.items && videoDetailsInfo.items.length > 0){
      setChannelId(videoDetailsInfo.items[0].snippet.channelId);
    }
    dispatch(setCloseMenu(false));
  }, [dispatch, videoDetailsInfo]);

  useChannelDetails(channelId);


  if (!videoDetailsInfo || 
      !videoDetailsInfo.items || 
      !videoDetailsInfo.items.length === 0 || 
      !channelDetails ||
      !displayComment

    ) {
    return(
      <p>Loading...</p>
    )
  }

  const {snippet, statistics} = videoDetailsInfo.items[0];
  const {title, channelTitle, description, publishedAt} = snippet;
  const {viewCount, likeCount} = statistics;

  const channelThumbnail = channelDetails[channelId]?.snippet?.thumbnails?.default?.url;

  //Split Line
  const descriptionData = description ? description.split('\n').map((line, index)=> {
    return(
      <p key={index}>{line}</p>
    )
  }): null;

  const handleSubscribe = () => {
    if(channelDetails && channelDetails[channelId]){
      dispatch(setIsSubscribe(channelDetails[channelId]));
      // console.log(dispatch(setIsSubscribe(channelDetails[channelId])));
      setIsSubscribeButton(!isSubscribeButton);
    }else{
      console.error('Channel details not available');
    }
  };

  return (
    <div className="w-full h-screen pt-32 flex justify-between items-start">
      <div className='w-2/3'>
        <YoutubeIframe className='rounded-xl' videoID={searchParams.get('v')}/>
        <h4 className='font-semibold text-xl mt-3 mb-3'>{title}</h4>
        <div className='flex flex-row'>
          <div className='flex items-center'>
            <span className='w-10 h-10 rounded-full bg-gray-500 mr-2 border border-gray-200'>
              <img className='rounded-full w-10 h-10' src={channelThumbnail} alt={channelTitle} />
            </span>
            <span className='text-gray-700 font-semibold'>{channelTitle}</span>
          </div>
          <div className='ml-2'>
            <button onClick={handleSubscribe} type='button' className={`${isSubscribeButton ? 'bg-blue-900' : 'bg-black'} rounded-[44px] text-white px-4 py-2 font-medium`}>
              {isSubscribeButton ? 'Unsubscribe'  : 'Subscribe'}
            </button>
          </div>
        </div>
        <div className='bg-gray-100 p-5 rounded-lg mt-4'>
          <p className='text-sm font-semibold flex items-center mb-3'>
            <span className='mr-2 flex items-center'><VisibilityOutlinedIcon className='mr-1 !w-4 !h-4 text-gray-500' />{`${handleViewCount(viewCount)} views`} |</span>
            <span className='mr-2 flex items-center'>{`${publishedAt.substr(0, 10)}`}</span>
            <span className='mr-2 flex items-center'><ThumbUpOutlinedIcon className='mr-1 !w-4 !h-4 text-gray-500' />{likeCount}</span>
          </p>
          <div onClick={()=> setIsShowDescription(!isShowDescription)} className={isShowDescription ? 'text-sm cursor-pointer' : 'line-clamp-6 text-sm cursor-pointer'}>
            {descriptionData}
          </div>
        </div>
        {displayComment.length > 0 ? (
          <div className='comments flex flex-col'>
            <h2 className='font-bold text-black text-xl mt-4 mb-6'>{displayComment.length} Comments</h2>
            {displayComment.map((items, index)=> {
              return(
                <Comments key={index} 
                  userName={items?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                  src={items?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                  date={items?.snippet?.topLevelComment?.snippet?.updatedAt.substr(0, 10)}
                  message={items?.snippet?.topLevelComment?.snippet?.textDisplay}
                />
              );
            })}
          </div>) : (
            <p>No Comments Available</p>
          )}
      </div>
      <div className='w-1/3 px-5'>
        <div className='h-[670px] border border-gray-200 bg-gray-100 rounded-lg flex flex-col'>
          <h4 className='text-lg px-3 py-2 bg-gray-200'>Live Chat</h4>
          <LiveChat />
        </div>
      </div>
    </div>
  )
}

export default WatchPage;
