import New from "./New";
import { useRef, useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../newsSlice";

const BlockNews = ({date, newsList, isFetching, data, newsByDate}) => {
  const observer = useRef();
  const dataCount = useRef(0);
  const dispatch = useDispatch();

  const [lastDate, setLastDate] = useState(null);

  const blockDate = date.split('-').reverse().join('.');


  const lastDateRef = useCallback((node) => {
    if (isFetching || !data) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Добавляем следующую дату
            console.log('Time to refetch')
            const dates = Object.keys(data || {});
            dataCount.current++;
            const nextDate = dates[dataCount.current]; // Берем следующую дату

            console.log(nextDate);
            
            if (nextDate && nextDate !== lastDate) {
                dispatch(addDate(nextDate));
            }
        }
    });
    if (node) observer.current.observe(node);

}, [isFetching, newsByDate, dispatch, lastDate]);

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