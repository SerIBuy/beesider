import { createSlice} from "@reduxjs/toolkit";

interface IArticle {
    abstract: string
}

const initialState: IArticle[] = [];


const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews(_, action) {
            return action.payload
        }
    }
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;