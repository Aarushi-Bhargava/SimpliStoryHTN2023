import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Article from "../components/Article";
import '../page-styles/News.css'
import cheerio from "cheerio";

const News = () => {
    const [links, setLinks] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [fetching, setFetching] = useState(false)

    const API_KEY = '4a9138d385de4cb0995da5e007c1bda6';
    const ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&per_page=10`;

    useEffect( () => {

        async function fetchRecentNews() {
        try {
            let response = await axios.get(ENDPOINT);
            
            // Check if the response is in JSON format
            if (typeof response.data === 'object') {
                let data = response.data;
                if (data.status === "ok") {
                    let articles = data.articles;
                    setLinks(articles)
                    // setFetching(true)
                } else {
                    console.error("Error fetching news:", data.message);
                }
            } else {
                // If the response is not JSON, print the first 500 characters to see what it is
                console.error("Unexpected response from server:", response.data.substring(0, 500));
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    fetchRecentNews()

    }, []);

    

    // useEffect(() => {
    //     if (links.length === 0) {
    //         return
    //     }
    //     async function isArticleValid(url) {
    //         try {
    //             const response = await axios.get(url);
    //             const $ = cheerio.load(response.data);
    //           }
    //           catch {
    //             return false
    //           }
    //       };
    //     console.log(links)
    //     async function final() {
    //         const processArticles = async () => {
    //             const validArticles = await Promise.all(
    //               links.map(async (article) => {
    //                 if (await isArticleValid(article)) {
    //                   return article;
    //                 }
    //                 return null; // If not valid, return null
    //               })
    //             );
          
    //             setFilteredArticles(validArticles.filter((article) => article !== null));
    //      }
    //     }

    // }, [fetching])
    
    // if (links.length === 0) {
    //     console.log("test")
    //     const validArticles = links.filter((link) => isArticleValid(link));
    //     setLinks((prevFilteredArticles) => [
    //         ...prevFilteredArticles,
    //         ...validArticles,
    //     ]);
    //     };
    // console.log(links)
    console.log(filteredArticles)

    return (
    <div>
        <h1>Latest News</h1>
        <div className="three-column-section">
            {links && links.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </div>
    </div>
    );
}

export default News