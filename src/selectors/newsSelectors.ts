import { createSelector} from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { INew } from "../types/news";

const emptyObject = {} as {[key: string]: INew[]};
const selectMonthlyNews = (state: RootState): {[key: string]: INew[]} => {
  return  state.newsApi.queries.fetchMonthlyNews?.data as {[key: string]: INew[]} ?? emptyObject;
}

const selectVisibleDates = (state: RootState): string[] => state.news.visibleDates;

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, selectVisibleDates],
  (monthlyNews, visibleDates) => {
    return visibleDates.length > 0
    ? Object.fromEntries(
      visibleDates
      .filter((date) => monthlyNews[date])
      .map((date) => [date, monthlyNews[date]])
    )
    : emptyObject;
  },
    );