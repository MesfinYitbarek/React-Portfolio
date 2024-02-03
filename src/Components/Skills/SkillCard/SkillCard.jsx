import React from "react";
import "./SkillCard.css";

const Skillcard = ({title, iconurl, isActive, onClick}) =>{

    return(

       <>
         <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()} >
            
            <div className="skill-icon">
                <img src={iconurl} alt={title} />
            </div>
            <span>{title}</span>
            
         </div>

       </>

    );
}
export default Skillcard