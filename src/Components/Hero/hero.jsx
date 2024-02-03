import React from "react";
import './Hero.css';

const Hero =()=> {
    return (
      <>
      <section className="hero-container">
         <div className="hero-content">
            <h2>Building Digital Expreinces That Inspire</h2>
            <p>Passionate fronend developer | Tranforming ideas into seamless and visually stunning web solutions </p>

         </div>
         <div className="hero-img">
            <div>
               <div className="tech-icon">
                <img src="" alt="hero image" />
               </div>
                <img className="mesfin-img" src="portfolio\..\assets\mesfin.jpg" alt="image" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="" alt="image" />
                </div>
                <div className="tech-icon">
                    <img src="" alt="image" />
                </div>
                <div className="tech-icon">
                    <img src="" alt="image" />
                </div>
            </div>
         </div>
      </section>
      
      </>
    )
}
export default Hero 