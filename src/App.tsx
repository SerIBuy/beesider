import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState, useRef} from 'react'
import { fetchNews } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
import { useFetchMonthlyNewsQuery } from './store/api'
import { selectVisibleNews } from './selectors/newsSelectors'
import BlockNews from './components/BlockNews'
import { useFetchNewsQuery } from './store/api'
import NewsList from './components/NewsList'

const makeNewsBlocks = (news) => {

  if(!news) {
    console.log('There is no news');
    return;
  }
  const result = {};

  for (let item of news) {
    const currentDate = item.pub_date.split('T')[0];
    if (!result[currentDate]) {
      result[currentDate] = [item];
    } else {
      result[currentDate].push(item);
    }
  }
  return result;
}

function App() {

  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const [height, setHeight] = useState(window.innerHeight);

  const [visibleData, setVisibleData] = useState<any[]>([]);
  const {data: news, error, isLoading, isError, isFetching, refetch} = useFetchNewsQuery({
    year: year,
    month: month,
  });

<<<<<<< HEAD
const newsByDate = useSelector(selectVisibleNews);
const currentDate = useSelector(state => state.news.visibleDates[0]);

console.log('Visible news:', newsByDate);

useEffect(() => {
  if (data) {
    const dates = Object.keys(data);
  if (dates.length > 0) {
    dispatch(addDate(dates[0]));
  }
  }
}, [data, dispatch]);
=======
  const timedNews = makeNewsBlocks(news);
>>>>>>> parent of 3de5299 (added infinite scroll)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     refetch();
  //   }, 30000);
  //   return () => clearInterval(intervalId);
  // }, [refetch, year, month]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading news</div>

  return (
    <>
      <div className='w-90 mx-auto'>
        <Header />
        <Main>
          <HEAD
          {newsByDate ? <BlockNews 
                  date={currentDate} 
                  newsList={newsByDate} 
                  isFetching={isFetching} 
                  data={data} 
                  /> : null}
                
            {isFetching && <p>Загрузка...</p>}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
