
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchSuggestionResult: [],
        showSearchSuggestion: false,
        selectedSearchQuery: '',
        searchResult: [],
    },
    reducers: {
        setSearchSuggestionResult: (state, action)=> {
            state.searchSuggestionResult = action.payload;
        },
        setShowSearchSuggestion: (state, action)=> {
            state.showSearchSuggestion = action.payload;
        },
        setSelectedSearchQuery:(state, action)=> {
            state.selectedSearchQuery = action.payload;
        },
        setSearchResult: (state, action)=>{
            state.searchResult = action.payload
        }
    }
});

export const {setSearchSuggestionResult, setShowSearchSuggestion, setSelectedSearchQuery, setSearchResult} = searchSlice.actions;
export default searchSlice.reducer;