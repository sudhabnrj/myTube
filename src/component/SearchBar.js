import React, { useRef, useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useSearchSuggestion from '../hooks/useSearchSuggestion';
import SearchSuggestion from './SearchSuggestion';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSearchSuggestion, setSelectedSearchQuery } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const SearchBar = () => {
  const displaySuggestion = useSelector((store)=> store.search.showSearchSuggestion);
  const selectedSearchQuery = useSelector((state)=> state.search.selectedSearchQuery);
  const [searchQuery, setSearchQuery] = useState('');
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useSearchSuggestion(searchQuery);

  useEffect(()=> {
    if(selectedSearchQuery){
      searchText.current.value = selectedSearchQuery      
    }
  }, [selectedSearchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Correctly assign the value property
    dispatch(setShowSearchSuggestion(true));
  };

  const handleSearch = () =>{
    if(searchText.current.value){
      dispatch(setSelectedSearchQuery(searchText.current.value));
      navigate(`results?search_query=${selectedSearchQuery}`);
    }
  };
  const handleClearSearch = () => {
    if(searchText.current){
      searchText.current.value = '';
      setSearchQuery('');
      dispatch(setSelectedSearchQuery(''));
    }
  }

  const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
        handleSearch();
        dispatch(setShowSearchSuggestion(false));
      }
  }

  return (
    <div className='flex items-stretch justify-center '>
      <div className=' relative'>
        <div className='flex items-stretch justify-center'>
          <input 
            ref={searchText} 
            type="text" 
            className="border border-gray-300 w-[520px] rounded-l-full px-4 h-11 outline-none" 
            placeholder="Search" 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={()=> dispatch(setShowSearchSuggestion(true))}
            onBlur={()=> dispatch(setShowSearchSuggestion(false))}
          />
          {searchQuery &&
              <CloseOutlinedIcon onClick={handleClearSearch} className='bg-transparent hover:bg-gray-300 text-black !w-10 !h-10 p-2 rounded-full absolute right-16 top-1/2 -translate-y-1/2 cursor-pointer' />
          }
          <button 
            onClick={handleSearch} 
            className='border border-gray-300 rounded-r-full h-11 border-l-0 px-4 bg-gray-100 hover:bg-gray-200'
          >
            <SearchOutlinedIcon />
          </button>
        </div>
        {displaySuggestion && <SearchSuggestion/>}
      </div>
    </div>
  );
};

export default SearchBar;
