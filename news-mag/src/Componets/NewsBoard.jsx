import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([])
//https://newsapi.org/v2/top-headlines?country=us&apiKey=967372355b014712af2c56a55a9fed12
    useEffect(()=>{
       let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
         //let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-29&sortBy=publishedAt&apiKey=967372355b014712af2c56a55a9fed12`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))
    },[category])
  return (
    <div>
      <h2 className="text-center" > Letest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=> {
       return  <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage } url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
