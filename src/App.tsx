import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState, useRef} from 'react'
import { addDate } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
import { useFetchMonthlyNewsQuery } from './store/api'
import { selectVisibleNews } from './selectors/newsSelectors'
import BlockNews from './components/BlockNews'
import NewsList from './components/NewsList'


function App() {

  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const dispatch = useDispatch();

  console.log(month)

  const {data, isLoading, isError, isFetching, refetch} = useFetchMonthlyNewsQuery({
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
  setMonth(prev => prev + 1);
}

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
            {isFetching && <p>Загрузка...</p>}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
