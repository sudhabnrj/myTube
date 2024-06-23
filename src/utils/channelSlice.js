import { createSlice } from '@reduxjs/toolkit';

const channelSlice = createSlice({
    name: 'channel',
    initialState: {
        channelDetails: {},
    },
    reducers: {
        setChannelDetails: (state, action)=> {
            state.channelDetails = action.payload;
        },
    }
});

export const { setChannelDetails } = channelSlice.actions;
export default channelSlice.reducer;