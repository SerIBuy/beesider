import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    visibleDates: []
};


const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        addDate(state, action) {
            if (!state.visibleDates.includes(action.payload)) {
                 state.visibleDates.push(action.payload)
            }
        }
    }
});

export const { addDate } = newsSlice.actions;
export default newsSlice.reducer;