import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { YOUTUBE_API_KEY } from '../utils/constants';
import { addVideoDetails } from '../utils/videoSlice';

const useDetailsVideo = (searchParams) => {
    const dispatch = useDispatch();
    const videoID = searchParams.get('v');

    useEffect(()=> {
        const fetchVideo = async () => {
          try{
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${YOUTUBE_API_KEY}`);
            if(!data.ok){
              throw new Error('Faield to fetch data');
            }
            const json = await data.json();
            dispatch(addVideoDetails(json));
            //console.log(json);
    
          }
          catch(error){
            console.error(error);
          }
        }
    
        if(videoID){
            fetchVideo();
        }
    
    }, [dispatch, videoID]);
}

export default useDetailsVideo
