import { createSelector} from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { INew } from "../types/news";

const emptyObject = {};
const selectMonthlyNews = (state: any) => {
  return  state.newsApi.queries.fetchMonthlyNews?.data || emptyObject;
}

const selectVisibleDates = (state: RootState) => state.news.visibleDates;

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, selectVisibleDates],
  (monthlyNews: {[key: string]: INew[]}, visibleDates) => {
    return visibleDates.length > 0
    ? Object.fromEntries(
      visibleDates
      .filter((date) => monthlyNews[date])
      .map((date) => [date, monthlyNews[date]])
    )
    : emptyObject;
  },
    );