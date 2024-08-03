import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setChannelDetails } from '../utils/channelSlice';
import { YOUTUBE_CHANNEL_API } from '../utils/constants';

const useChannelDetails = (channelId) => {
  const allVideos = useSelector((store)=> store.videos.popularVideos?.items);
    const dispatch = useDispatch();   

    useEffect(()=> {
      const fetchChannelDetails = async () => {
        try{
          const channelDetailsPromises  = channelId.map(async (channel)=> {
            //const channelId = allVideos.snippet.channelId;
            const data = await fetch(`${YOUTUBE_CHANNEL_API}${channel}`);
            if(!data.ok){
              throw new Error('Faield to fetch data');
            }
            const json = await data.json();
            return { channel, details: json.items[0] };
          });
          const channelDetails = await Promise.all(channelDetailsPromises);
          const channelDetailsMap = channelDetails.reduce((acc, detail) => {
            acc[detail.channel] = detail.details;
            return acc;
          }, {});

          dispatch(setChannelDetails(channelDetailsMap));
          console.log('channel Details', dispatch(setChannelDetails(channelDetailsMap)));
  
        }
        catch(error){
          console.error(error);
        }
      }

      if (channelId && channelId.length > 0) {
        fetchChannelDetails();
      }
  
    }, [channelId, dispatch]);
}

export default useChannelDetails
