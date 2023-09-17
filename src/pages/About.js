import React from "react";
import "../page-styles/About.css"
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
      return (
        <div className="aboutContainer">
            
            <div className="box1">
            
                <h1>Why did we create SimpliStory ?</h1>

                <p>In today's rapidly changing world, staying informed about current events is more crucial than ever. However, the language and nuances of standard news articles can be complex and difficult for children to comprehend. This often leads to a gap in understanding, leaving our younger generation unaware of the events shaping their world. Enter SimpliStory, where we transform the complexities of today's news into summaries tailored for a child's understanding and comprehension.</p>
            </div>

            <div className="box2">
                    
                <h1>What is SimpliStory ?</h1>

                <p>SimpliStory is designed to take a news article and transform it into a child-friendly summary, making the information accessible and comprehensible to young minds. By simplifying the language, eliminating jargon, and focusing on key takeaways, we ensure that children can not only read but also understand the news that impacts their lives. 

In the “Search” tab, the user can input an article link to summarize, equipped with  text-to-speech functionality. If they go to the “Latest News” tab, recently published news articles are fetched from the internet and displayed with options to read the full article or to read our child-friendly summary (for the links that allow scraping).
</p>
            </div>

        </div>
      )
  }
  
  
  
  export default About