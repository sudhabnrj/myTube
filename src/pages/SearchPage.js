import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_LIST_API } from '../utils/constants';
import { setSearchResult } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
import SearchShimmer from '../component/SearchShimmer';
import useChannelDetails from '../hooks/useChannelDetails';

const SearchPage = () => {
  const searchQuery = useSelector((state)=> state.search.selectedSearchQuery);
  const searchResult = useSelector((state)=> state.search.searchResult);
  const channelDetails = useSelector((store) => store.channel.channelDetails);
  const dispatch = useDispatch();
  const [channelId, setChannelId] = useState([]);

  useEffect(()=>{
    const fetchResult = async ()=> {
      if(searchQuery){
        try{
          const data = await fetch(`${YOUTUBE_SEARCH_LIST_API}${searchQuery}`);
          const response = await data.json();
          const filterResult = response.items.filter((video)=>  video.id.videoId !== undefined);
          dispatch(setSearchResult(filterResult));
          const channels = response.items.map((item)=> {
            return item.snippet.channelId;
          })
          setChannelId(channels);
          // console.log('channels',response.items);
        }
        catch(error){
          console.error('Error fetching results:', error);
        }
      }
    };
    fetchResult();
  }, [dispatch]); 

  useChannelDetails(channelId);

  if(!searchResult || searchResult.length === 0){
    return <SearchShimmer/>
  }

  return (
    <div className="w-full h-screen pt-32 flex justify-between items-start">
      <div className='w-full max-w-[80%] mx-auto'>
        <h4 className='font-semibold text-xl mt-3 mb-3'>Search Results for "{searchQuery}"</h4>
        <div className='flex flex-col'>
          {searchResult && searchResult.map((result, index)=> {
            const channelId = result.snippet.channelId;
            const channelThumbnail = channelDetails[channelId]?.snippet?.thumbnails?.default?.url;
            return(
              <Link to={`/watch?v=${result?.id?.videoId}`} key={index} className='flex flex-row mb-7'>
                <div className='w-[40%] rounded-lg'>
                  <img src={result?.snippet?.thumbnails?.high?.url} alt='' className='w-full max-h-[280px] object-cover rounded-lg' />
                </div>
                <div className='w-[60%] pl-7'>
                  <h2 className='text-xl'>{result?.snippet?.title}</h2>
                  <p className='flex mt-3 items-center'>
                    <span className='rounded-full w-[30px] h-[30px] bg-gray-200'>
                    {channelThumbnail && <img className='rounded-full' src={channelThumbnail} alt={result?.snippet?.title} />}
                    </span>
                    <span className='uppercase text-gray-500 text-sm font-medium ml-2'>{result?.snippet?.channelTitle}</span>
                  </p>
                  <p className='text-sm mt-3'>{result?.snippet?.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
