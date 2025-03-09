import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useEffect, useState, useRef} from 'react'
import { addDate } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
import { useFetchMonthlyNewsQuery } from './store/api'
import { selectVisibleNews } from './selectors/newsSelectors'
import BlockNews from './components/Main/BlockNews'
import { DotLoader } from 'react-spinners'
import Spinner from './components/ui-kit/Spinner'


function App() {

  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const dispatch = useDispatch();
  const {data, error, isLoading, isError, isFetching, refetch} = useFetchMonthlyNewsQuery({
    year,
    month,
  }, {
    refetchOnMountOrArgChange: true
  });

const newsByDate = useSelector(selectVisibleNews);

useEffect(() => {
  if (data) {
    const dates = Object.keys(data);
  if (dates.length > 0) {
    dispatch(addDate(dates[0]));
  }
  }
}, [data, dispatch]);

function handleNextMonthFetch() {
  if (error && "status" in error && error.status === 404) return;
  setMonth(prev => prev + 1);
}

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 30000);
    return () => clearInterval(intervalId);
  }, [refetch, year, month]);

  return (
    <>
      <div className='app__container'>
        <Header />
        <Main>
          {Object.entries(newsByDate).map(([date, news], index) => (
                  <BlockNews 
                  key={index}
                  date={date} 
                  newsList={news} 
                  isFetching={isFetching} 
                  data={data} 
                  onNextFetch={handleNextMonthFetch}
                  />
          )) }  
            {isFetching && <Spinner/>}
            {isError ? <p>This is all news</p> : null}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
