**Inspiration 📜**

In today's rapidly changing world, staying informed about current events is more crucial than ever. However, the language and nuances of standard news articles can be complex and difficult for children to comprehend. This often leads to a gap in understanding, leaving our younger generation unaware of the events shaping their world. Enter SimpliStory, where we transform the complexities of today's news into summaries tailored for a child's understanding and comprehension.

**What it does 💻**

-SimpliStory is designed to take a news article and transform it into a child-friendly summary, making the information accessible and comprehensible to young minds. By simplifying the language, eliminating jargon, and focusing on key takeaways, we ensure that children can not only read but also understand the news that impacts their lives.


-In the “Search” tab, the user can input an article link to summarize, equipped with text-to-speech functionality. If they go to the “Latest News” tab, recently published news articles are fetched from the internet and displayed with options to read the full article or to read our child-friendly summary (for the links that allow scraping).

**How we built it ⚙️**

SimpliStory was built using various software found through our own research that include:

-For Front-End: CSS, ReactJS

-For Back-End: JavaScript, Cohere API, NewsAPI.org API

-For Website Design Mockup: Figma

**Challenges we ran into 🤔**

While developing SimpliStory, we encountered a few significant challenges. One major issue was with certain news links that wouldn't allow us to access their text, especially those behind paywalls. Instead of bypassing these barriers, we added error messages to inform users when a particular link was not accessible. For known problematic sites in our "Latest News" section, we simply disabled the "Summarize" feature.

-Another challenge was the initial design of our scraping tool. It would fetch every piece of text from a website, from menus to alternate image text to ads. We had to apply filters to the fetched content to ensure it only captured the main article content, making it ready for summarization with Cohere. This fine-tuning was crucial to maintain the cohesiveness and quality of our summaries.

**Accomplishments that we’re proud of 🎯**

We are very proud of our allocation of tasks across all members of our team, allowing us to complete features quickly and efficiently. Rohan worked primarily on the backend functionality of the features. Aarushi worked on building the UI for the project. Selena created the graphics, in addition to also helping with the frontend. Finally, Edison focused on connecting the backend with the frontend. As a team, we cooperated effectively, and none of us were scared to voice our thoughts on the direction of the project.

**What we learned 🧠**

-Edison: Learned about using LLM with cohere.ai to solve real world problems. 
-Rohan: Learned how to incorporate APIs to bring a variety of unique features to the project. 
-Aarushi: Learned how to use React to create a responsive UI and further deepen understanding of API integration. 
-Selena: Learned CSS used to style the UI.

**What’s next for SimpliStory 🛤️**

As we improve SimpliStory, our primary focus remains on ensuring a child-friendly experience. We are in the process of developing filters to exclude content that might not be suitable for young readers. Additionally, in our commitment to delivering unbiased information, we are taking measures to sidestep news from potentially biased outlets. Our overarching aim is to provide young users with straightforward, reliable news from trusted outlets.

**Best .Tech Domain Name by Radix**

We registered simplistory.tech as our domain.

**Built with 🦾**

ReactJs, CSS, Javascript, Cohere AI API, News API, Figma, Adobe Illustrator

