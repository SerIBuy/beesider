import New from "./New";
import { useRef, useCallback, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../newsSlice";
import { useSelector } from "react-redux";

const BlockNews = ({date, newsList, isFetching, data, onNextFetch}) => {
  const observer = useRef(0);
  const dispatch = useDispatch();
  let blockDate;

  if (date) {
    blockDate = date.split('-').reverse().join('.');
  }

  const loadedDates = useSelector(state => state.news.visibleDates);

  const loadedDatesRef = useRef(loadedDates);

  useEffect(() => {
    loadedDatesRef.current = loadedDates;
  }, [loadedDates]);

  const lastDateRef = useCallback((node) => {
    if (isFetching || !data) return;
    if (observer.current) {
      observer.current.disconnect();
      ;
    }

    observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const currentLoadedDate = loadedDatesRef.current;
            const dates = Object.keys(data || {});
            const nextDate = dates[currentLoadedDate.length];
            
            if (nextDate) {
                dispatch(addDate(nextDate));
            } else {
              onNextFetch();
            } 
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