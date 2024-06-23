import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        popularVideos: [],
        detailsVideo: [null],
        categoryList: [null],
        error: null,
        loading: false,
        filterVideos: [],
        selectedCategory: [],
    },

    reducers: {
        setPopularVideos: (state, action)=> {
            state.popularVideos = action.payload || [];
        },
        appendPopularVideos: (state, action)=> {
            const newVideos = action.payload || [];
            const existingVideoIds = new Set (state.popularVideos.map((video)=> video.id));
            const uniqueVideos = newVideos.filter((video)=> !existingVideoIds.has(video.id));
            state.popularVideos = [...state.popularVideos, ...uniqueVideos];
        },
        addVideoDetails: (state, action)=> {
            state.detailsVideo = action.payload;
        },
        addCategoryList: (state, action)=> {
            state.categoryList = action.payload;
        },
        setError: (state, action)=> {
            state.error = action.payload;
        },
        setLoading: (state, action)=> {
            state.loading = action.payload;
        },
        setFilterVideos: (state, action)=> {
            // state.filterVideos = action.payload;
            const categoryId = action.payload;
            // console.log('ID: ',categoryId);
            state.selectedCategory = categoryId;
            state.filterVideos = state.popularVideos.filter((videos)=> videos.snippet.categoryId === categoryId);
        }
    }


});

export const { setPopularVideos, addVideoDetails, addCategoryList, appendPopularVideos, setError, setLoading, setFilterVideos} = videoSlice.actions;
export default videoSlice.reducer;