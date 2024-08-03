import { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setPopularVideos, appendPopularVideos, setLoading, setError } from '../utils/videoSlice';

const usePopularVideos = () => {
  const dispatch = useDispatch();
  const [nextPageToken, setNextPageToken] = useState('');

  const fetchVideos = async (pageToken = '') => {
    dispatch(setLoading(true));
    try {
      const url = `${YOUTUBE_API}&pageToken=${pageToken}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      // console.log(json.items);
      if (pageToken) {
        dispatch(appendPopularVideos(json.items || []));
      } else {
        dispatch(setPopularVideos(json.items || []));
      }
      setNextPageToken(json.nextPageToken || '');
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [dispatch, fetchVideos]);

  return { nextPageToken, fetchVideos };
};

export default usePopularVideos;
