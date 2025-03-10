import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ITransformedNew } from "../types/news";
import { INew } from "../types/news";

const selectMonthlyNews = (state: RootState) => {
  return  state.newsApi.queries.fetchMonthlyNews?.data || {};
}

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, (state: RootState) => {
    return state.news.visibleDates;
  }],
  (monthlyNews: {[key: string]: INew[]}, visibleDates) => {
    return visibleDates.reduce((acc: ITransformedNew, date: string) => {
      if (monthlyNews[date]) {
        acc[date] = monthlyNews[date];
      }
      return acc;
    }, {});
  }
    );