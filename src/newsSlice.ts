import { createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        visibleDates: [],
    },
    reducers: {
        addDate: (state, action) => {
            if (!state.visibleDates.includes(action.payload)) {
                state.visibleDates.push(action.payload);
            }
        }
    }
});

export const { addDate } = newsSlice.actions;
export default newsSlice.reducer;