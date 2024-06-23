import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import usePopularVideos from '../hooks/usePopularVideos';
import useChannelDetails from '../hooks/useChannelDetails';
import Shimmer from './Shimmer';
import { handleViewCount } from '../utils/helper';

const VideoContainer = () => {
  const allVideos = useSelector((store) => store.videos.popularVideos || []);
  const channelDetails = useSelector((store) => store.channel.channelDetails || {});
  // const filterVideosResults = useSelector((state)=> state.videos.filterVideos || []);
  const [channelId, setChannelId] = useState([]);
  const { nextPageToken, fetchVideos } = usePopularVideos();
  const loading = useSelector((state)=> state.videos.loading);

  const observer = useRef();

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextPageToken ) {
        fetchVideos(nextPageToken);
        
      }
    });
    if (node) observer.current.observe(node);
  }, [nextPageToken, fetchVideos]);

  useEffect(() => {
    if (allVideos.length > 0) {
      const ids = allVideos.map((video) => video.snippet.channelId);
      setChannelId(ids);
    }
  }, [allVideos]);

  useChannelDetails(channelId);

  if (!allVideos.length) {
    return <Shimmer  />;
  }

  return (
    <div className='flex flex-wrap -mx-2'>
      {allVideos.map((video, index) => {
        const { snippet, statistics, id } = video;
        const { channelId, channelTitle, thumbnails, title, publishedAt } = snippet;
        const { viewCount } = statistics;
        const duration = video.contentDetails.duration;
        const channelThumbnail = channelDetails[channelId]?.snippet?.thumbnails?.default?.url;

        if (index === allVideos.length - 1) {
          return (
            <Link ref={lastElementRef} className='w-[20%]' key={id} to={'/watch?v=' + id}>
              <VideoCard
                duration={duration}
                thumbnails={thumbnails.medium.url}
                title={title}
                channelTitle={channelTitle}
                channelThumbnail={channelThumbnail}
                publishedAt={publishedAt.substr(0, 10)}
                viewCount={handleViewCount(viewCount)}
              />
            </Link>
          );
        } else {
          return (
            <Link className='w-[20%]' key={id} to={'/watch?v=' + id}>
              <VideoCard
                duration={duration}
                thumbnails={thumbnails.medium.url}
                title={title}
                channelTitle={channelTitle}
                channelThumbnail={channelThumbnail}
                publishedAt={publishedAt.substr(0, 10)}
                viewCount={handleViewCount(viewCount)}
              />
            </Link>
          );
        }
      })}
      {loading && Array.from({ length: 10 }).map((_, index) => (
        <Shimmer key={index}/>
      ))
      }
    </div>
  );
};

export default VideoContainer;
