import { createSelector } from "@reduxjs/toolkit";

const selectMonthlyNews = (state) => {
  return  state.newsApi.queries.fetchMonthlyNews?.data || {};
}

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, (state) => {
    return state.news.visibleDates;
  }],
  (monthlyNews, visibleDates) => {
    console.log(monthlyNews);
    console.log(visibleDates)
    return visibleDates.reduce((acc, date) => {
      if (monthlyNews[date]) {
        acc[date] = monthlyNews[date];
      }
      return acc;
    }, {});
  }
    );