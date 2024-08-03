import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchSuggestionResult } from '../utils/searchSlice';

const useSearchSuggestion = (searchQuery) => {
  const dispatch = useDispatch();

    // if (!searchQuery) return; // Don't fetch if there's no search query

    const fetchSearchResult = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/search?query=${searchQuery}`);
        const data = await response.json();
        dispatch(setSearchSuggestionResult(data[1])); // Ensure you dispatch the correct data structure
        //console.log(data[1]);
      } catch (error) {
        console.log('Error fetching Search result:', error);
      }
    };

  useEffect(() => {

    const timer = setTimeout(() => {
        fetchSearchResult();
    }, 200);

    return () => {
        clearTimeout(timer);
    };

  }, [searchQuery, dispatch]);

};

export default useSearchSuggestion;
