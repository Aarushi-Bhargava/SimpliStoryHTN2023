import React from "react";
import "../page-styles/Home.css"
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo1 } from "../mascots/Full_robot.svg";



const Home = () => {
  const navigate = useNavigate();
    return (
      <div className="app-container">
      
      <main className="app-main">
        <h1>SimpliStory</h1>
        <div className="typewriter">
          <p>Aiming to facilitate education for the younger generation.</p>
        </div>
      
        <button className="try-me-button" onClick={() => navigate('/search')}>Try Me</button>

        <div className="logo1Styling"> 
          <Logo1/>
        </div>
      </main>



    </div>
    )
}

export default Home