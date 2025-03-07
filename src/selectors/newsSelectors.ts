import { createSelector } from "@reduxjs/toolkit";

const selectMonthlyNews = (state) => {
  const key = JSON.stringify({"month":1, "year":2019});
  console.log("Redux queries: ", state.newsApi.queries);
  console.log("Expected key: ", key);
  console.log('fetched data: ', state.newsApi.queries[`fetchMonthlyNews(${key})`]?.data);
  return  state.newsApi.queries[`fetchMonthlyNews(${key})`]?.data || {};
}

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, (state) => {
    const data = state.news.visibleDates;
    console.log('Selected visible dates', data);
    return data;
  }],
  (monthlyNews, visibleDates) => {
    return visibleDates.reduce((acc, date) => {
      if (monthlyNews[date]) {
        acc[date] = monthlyNews[date];
      }
      console.log('Selected block: ', acc);
      return acc;
    }, {});
});