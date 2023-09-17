import React from 'react';
import "./Article.css"
import {createSearchParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import cheerio from 'cheerio'

const Article = ({ article }) => {
  const [works, setWorks] = useState(true);
  const url = article.url
  const navigate = useNavigate()
  useEffect(() => {
    console.log(url)
    console.log("fetching..")
    async function testLink() {
      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        $('script, style').remove();
        let text = $.text();
      }
      catch {
        setWorks(false)
      }
    }
    testLink()
  }, [])
  return (
  <div>
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
      <div></div>
      {works && (<a className="right-align" onClick={() => navigate({pathname:"/search", search: createSearchParams({id: url}).toString()})}>Summarize</a>)}
    </div>
  </div>
  );
};

export default Article;

