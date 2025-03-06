import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState, useRef} from 'react'
import { fetchNews } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
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

  const timedNews = makeNewsBlocks(news);

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
          {isFetching ? <p>Updating news...</p> : null}
        <NewsList blocks={timedNews ? timedNews: []}/>
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
