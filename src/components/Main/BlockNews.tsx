import New from "./New";
import { useRef, useCallback,useEffect} from "react";
import { useDispatch } from "react-redux";
import { addDate } from "./newsSlice";
import { useSelector } from "react-redux";
import { INew } from "../../types/news";
import { RootState } from "../../store/store";

const BlockNews = ({date, newsList, isFetching, data, onNextFetch}:{
  date: string,
  newsList: INew[],
  isFetching: boolean,
  data: any,
  onNextFetch: () => void
}) => {

  const observer = useRef<IntersectionObserver | null>(null);
  const dispatch = useDispatch();
  const processedNodesRef = useRef(new Set<HTMLLIElement>);
  let blockDate;

  if (date) {
    blockDate = date.split('-').reverse().join('.');
  }

  const loadedDates = useSelector((state: RootState) => state.news.visibleDates);

  const loadedDatesRef = useRef(loadedDates);

  useEffect(() => {
    loadedDatesRef.current = loadedDates;
  }, [loadedDates]);

  const lastDateRef = useCallback((node: HTMLLIElement) => {
    if (isFetching || !data) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      const target = entries[0];

        if (target.isIntersecting && !processedNodesRef.current.has(node)) {
          processedNodesRef.current.add(node);

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
    <section className="block-news__section">
      <h2 className="block-news__date">News for {blockDate}</h2>
      <ul className="block-news__container">
        {newsList.map((item, index, array) => (
              <New ref={index === array.length - 1 ? lastDateRef : null} key={index} element={item}/>
        ))}
      </ul>
    </section>
  );
};

export default BlockNews;