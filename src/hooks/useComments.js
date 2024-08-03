import { useEffect } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addComments } from '../utils/commentSlice';

const useComments = (searchParams) => {
    const dispatch = useDispatch();
    const videoID = searchParams.get('v');

    useEffect(()=> {
        const fetchComments = async() => {
            try{
                const response = await fetch(`${YOUTUBE_COMMENTS_API}&maxResults=50&textFormat=plainText&part=snippet&videoId=${videoID}`);
                const json = await response.json();
                // Check if comments are disabled
                if (json.error && json.error.message === "The video identified by the videoId parameter has disabled comments.") {
                    // console.log("Comments are disabled for this video.");
                    return;
                }
                dispatch(addComments(json.items));
                //console.log(json.items);
            }
            catch(error){
                console.error(error);
            }
        };

        fetchComments();

    }, [videoID, dispatch]);
}

export default useComments;
