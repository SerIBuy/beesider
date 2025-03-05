import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IArticle {
    abstract: string
}

const initialState: IArticle[] = [];


// export const fetchNews = createAsyncThunk<IArticle, void, {rejectValue: string}>("news/fetchNews", async (_, {rejectWithValue}) => {
//     try {
//     const response = await fetch("http://localhost:3000/news");
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data.response.docs;
//     } catch (error) {
//         return rejectWithValue("Failed to fetch news");
//     }
// })

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews(_, action) {
            return action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchNews.fulfilled, (_, action) => {
    //         return action.payload;
    //     });
    //     builder.addCase(fetchNews.pending, () => {
    //         console.log('Loading...');
    //     });
    //     builder.addCase(fetchNews.rejected, (_, action) => {
    //         console.log(action.error.message);
    //     });
    // },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;