import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import videoReducer from './videoSlice';
import searchReducer from './searchSlice';
import channelReducer from './channelSlice';
import commentReducer from './commentSlice';
import subscribeReducer from './subscribeSlice';
import chatReducer from './chatSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer,
        search: searchReducer,
        channel: channelReducer,
        comment: commentReducer,
        subscribe: subscribeReducer,
        chat: chatReducer,
    }
});

export default store;