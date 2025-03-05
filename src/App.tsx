import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState} from 'react'
import { fetchNews } from './newsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { createSelector } from '@reduxjs/toolkit'
import { useFetchNewsQuery } from './store/api'
import {FixedSizeList as List} from 'react-window'
import New from './components/New'

const selectedFields = createSelector((state: RootState) => state.news, (news) => news.map((item: any) => {
  return {
    abstract: item.abstract,
    web_url: item.web_url,
    multimedia: item.multimedia,
    pub_date:item.pub_date,
    source: item.source
  }
}));

function App() {
  // const dispatch = useDispatch<AppDispatch>();
  // const news = useSelector(selectedFields);

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  const [visibleData, setVisibleData] = useState<any[]>([]);
  const {data: news, error, isLoading} = useFetchNewsQuery();

  useEffect(() => {
    if (news) {
      setVisibleData(news);
    }
  }, [news]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loding news</div>

  const renderNews = ({index, style}: {index: number, style: React.CSSProperties}) => {
    const item = visibleData[index];
    return (
      <div style={style} key={index}>
        <h3>{item.abstract}</h3>
        <p>{item.web_url}</p>
        <p>{item.pub_date}</p>
      </div>
    )
  }

  return (
    <>
      <div>
        <Header />
        <List 
          height={600}
          itemCount={visibleData.length}
          itemSize={100}
          width={360}
          itemData={news}
          >
          {New}
        </List>
        {/* <Main blocks={blocks}/> */}
        {/* {news && news.map((item: any, index: any) => (
          <li key={index}>
            <h2>{item.abstract}</h2>
            <p>{item.web_url}</p>
            <p>{item.pub_date}</p>
            <p>{item.source}</p>
            </li>
        ))} */}
        <Footer />
      </div>
    </>
  )
}

export default App
