import React from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../datas/data";
import ExeprienceCard from "./ExperienceCard/ExperienceCard";

const WorkExperience =() =>{

    return(
        <section className="experience-container">
            <h5>WOrk Experience</h5>
            <div className="experience-content">
                {WORK_EXPERIENCE.map((item)=> (
                    <ExeprienceCard key={item.title} details={item} />
                ))}

            </div>


        </section>

    );
}
export default WorkExperience