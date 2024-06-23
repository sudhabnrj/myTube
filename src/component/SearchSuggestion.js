import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setSelectedSearchQuery, setShowSearchSuggestion } from '../utils/searchSlice';

const SearchSuggestion = () => {
    const searchSuggestionResult = useSelector((store)=> store.search.searchSuggestionResult);
    const displaySuggestion = useSelector((store)=> store.search.showSearchSuggestion);
    const selectedSearchQuery = useSelector((state)=> state.search.selectedSearchQuery);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    if(!displaySuggestion || searchSuggestionResult.length === 0 )return null;

    const handleSearchClick = (suggestion)=> {
        dispatch(setSelectedSearchQuery(suggestion));
        dispatch(setShowSearchSuggestion(false))
        navigate(`results?search_query=${selectedSearchQuery}`);
        
    };

    return (
        <>
            <ul className='absolute bg-white rounded-lg pt-3 pb-5 w-[33rem] top-[100%] left-0 border border-gray-100 shadow-lg z-10'>
                {displaySuggestion && searchSuggestionResult.map((suggestion, index)=> {
                return(
                    <li key={index} className='flex w-full py-1 px-3 hover:bg-gray-200'>
                        <Link onMouseDown={()=> handleSearchClick(suggestion)} className='flex cursor-pointer w-full'>
                            <SearchOutlinedIcon className='text-gray-600 font-thin text-md' />
                            <span className='ml-3'>{suggestion}</span>
                        </Link>
                    </li>
                );
                })}                
            </ul>
        </>
    )
}

export default SearchSuggestion
