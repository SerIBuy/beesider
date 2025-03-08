import New from "./New";
import { useRef, useCallback, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../newsSlice";
import { useSelector } from "react-redux";

const BlockNews = ({date, newsList, isFetching, data}) => {
  const observer = useRef(0);
  const dispatch = useDispatch();
  let blockDate;

  if (date) {
    blockDate = date.split('-').reverse().join('.');
  }

  const loadedDates = useSelector(state => state.news.visibleDates[0]);

  const loadedDatesRef = useRef(loadedDates);

  useEffect(() => {
    loadedDatesRef.current = loadedDates;
  }, [loadedDates]);

  const lastDateRef = useCallback((node) => {
    if (isFetching || !data) return;
    if (observer.current) {
      console.log('Delete observer');
      observer.current.disconnect();
      ;
    }

    observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            console.log('Time to refetch')
            const currentLoadedDate = loadedDatesRef.current;
            console.log(currentLoadedDate)
            const dates = Object.keys(data || {});
            const currentIndex = dates.indexOf(currentLoadedDate);
            const nextDate = dates[currentIndex + 1]; // Берем следующую дату

            console.log(nextDate);
            
            if (nextDate) {
                dispatch(addDate(nextDate));
                window.scrollTo(0, 0);
            }
            observer.current.disconnect();
        }
    });
    if (node) observer.current.observe(node);

}, [isFetching, dispatch]);

  return (
    <section>
      <h2 className="blockDate">News for {blockDate}</h2>
      <ul className="flex flex-col gap-4">
        {newsList.map((item, index, array) => (
              <New ref={index === array.length - 1 ? lastDateRef : null} key={index} element={item}/>
        ))}
      </ul>
    </section>
  );
};

export default BlockNews;