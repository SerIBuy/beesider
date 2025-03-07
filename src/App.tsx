import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState, useRef, useCallback} from 'react'
import { addDate } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
import { useFetchMonthlyNewsQuery } from './store/api'
import NewsList from './components/NewsList'
import { selectVisibleNews } from './selectors/newsSelectors'
import BlockNews from './components/BlockNews'


function App() {

  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const dispatch = useDispatch();

  const {data, isLoading, isError, isFetching, refetch} = useFetchMonthlyNewsQuery({year, month});

  console.log("fetched data: ", data);

  const apiState = useSelector(state => state.newsApi);

  console.log(apiState)

const newsByDate = useSelector(selectVisibleNews);

console.log('Visible news:', newsByDate);

useEffect(() => {
  if (data) {
    const dates = Object.keys(data);
  if (dates.length > 0) {
    dispatch(addDate(dates[0]));
  }
  }
}, [data, dispatch]);

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
        {Object.entries(newsByDate).map(([date, news]) => (

                <BlockNews 
                  key={date} 
                  date={date} 
                  newsList={news} 
                  isFetching={isFetching} 
                  data={data} 
                  newsByDate={newsByDate}
                  />
            ))}
            {isFetching && <p>Загрузка...</p>}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
