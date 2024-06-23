
import { createSlice } from '@reduxjs/toolkit';
const CommentSlice = createSlice({
    name: 'comment',
    initialState: {
        listOfComments: [null],
    },
    reducers: {
        addComments: (state, action)=> {
            state.listOfComments = action.payload;
        },
    }
});

export const { addComments } = CommentSlice.actions;
export default CommentSlice.reducer;