import { createSlice } from '@reduxjs/toolkit';
const SubscribeSlice = createSlice({
    name: 'subscribe',
    initialState: {
        subscription: [],
    },
    reducers: {
        setIsSubscribe: (state, action)=> {
            const isAlreadySubscribe = state.subscription.some((item)=> item.id === action.payload.id)
            if(!isAlreadySubscribe){
                state.subscription = [...state.subscription, action.payload]
            }
            
        },
        removeSubscription: (state, action)=> {
            state.subscription = state.subscription.filter((item)=> item.id !== action.payload);
        },

    }
});

export const {setIsSubscribe, removeSubscription} = SubscribeSlice.actions;
export default SubscribeSlice.reducer;
