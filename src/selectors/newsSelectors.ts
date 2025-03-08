import { createSelector } from "@reduxjs/toolkit";

const selectMonthlyNews = (state) => {
  const key = JSON.stringify({"month":1, "year":2019});
  return  state.newsApi.queries[`fetchMonthlyNews(${key})`]?.data || {};
}

export const selectVisibleNews = createSelector(
  [selectMonthlyNews, (state) => {
    return state.news.visibleDates;
  }],
  (monthlyNews, visibleDates) => monthlyNews[visibleDates]
    );

//     return visibleDates.reduce((acc, date) => {
//       if (monthlyNews[date]) {
//         acc[date] = monthlyNews[date];
//       }
//       return acc;
//     }, {});
// }