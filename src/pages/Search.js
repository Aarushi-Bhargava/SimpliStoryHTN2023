import React from "react";
import { useState, useEffect } from "react";
import "../page-styles/Search.css";
import axios from 'axios';
import cheerio from 'cheerio';
import ParagraphText from "../components/ParagraphText";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as Logo } from '../mascots/robot_head.svg'

const bubbleStyle = {
    backgroundColor: '#f0f0f0', // Background color
    color: '#000',              // Text color
    padding: '10px',            // Padding inside the bubble
    borderRadius: '15px',       // Rounded corners
    maxWidth: '80%',            // Maximum width of the bubble
    margin: '0 auto',           // Center horizontally
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Box shadow for depth
    textAlign: 'center', // Center the text horizontally
    marginTop: '20vh',
  };

const Search = () => {
    const [searchParams] = useSearchParams();
    const [name, setName] = useState('');
    const [currentLink, setCurrentLink] = useState(searchParams.get("id"));
    const [answers, setAnswers] = useState("Please enter a url into the message box below!");
    const [showSpeechButton, setShowSpeechButton] = useState(false);

    function extractMeaningfulSentences(textList) {
        const meaningfulSentences = textList.filter(sentence => {
            const words = sentence.split(/\s+/); // Split sentence into words
            return words.length >= 10;
        });
        return meaningfulSentences;
    }

    useEffect(() => {
        if (answers && answers !== 'Loading...') {
            setShowSpeechButton(true);
        } else {
            setShowSpeechButton(false);
        }
    }, [answers]);

    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(answers);
        speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        async function handleResponse() {
            if (currentLink === null) return;

            setAnswers('Loading...');
            try {
                const response = await axios.get(currentLink);
                const $ = cheerio.load(response.data);
                $('script, style').remove();

                let text = $.text();
                const lines = text.split('\n').map(line => line.trim()).filter(line => line);
                var filtered = extractMeaningfulSentences(lines);
                var article = filtered.join('\n');

                const options = {
                    method: 'POST',
                    url: 'https://api.cohere.ai/v1/generate',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        authorization: 'Bearer CG58TzflvId22iQQ94JNTO2IkJaRIOffE6EUDbk0'
                    },
                    data: {
                        max_tokens: 200,
                        truncate: 'END',
                        return_likelihoods: 'NONE',
                        prompt: 'Summarize the following text at an elementary vocabulary level to convey the main idea of the article: ' + article
                    }
                };

                axios
                    .request(options)
                    .then(response => setAnswers(response.data.generations[0].text))
                    .catch(error => setAnswers("The link you have used does not give us access. Please try another link."));
            } catch (error) {
                setAnswers("The link you have used does not give us access. Please try another link.");
            }
        }
        handleResponse();
    }, [currentLink]);

    return (
        <div>
            <div style={bubbleStyle}>
            <p style={{fontSize:'20px'}}>{answers}</p>
            {showSpeechButton && 
                <button onClick={handleSpeak} className="speech-button">
                    🔊
                </button>
            }
            </div>
            {/* <ParagraphText text={answers}/> */}
            <form className="message">
                <input
                    type="text"
                    placeholder="Enter an article link here..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="circle-button" onClick={() => setCurrentLink(name)}>
                    <span>&#9650;</span>
                </button>
            </form>
            <Logo className="robot-bot-left"></Logo>
        </div>
    );
}

export default Search;
