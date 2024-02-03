import React from "react";
import "./Skills.css";
import Skillcard from "./SkillCard/SkillCard";
import { SKILLS } from "../../datas/data";
import SkillsInfoCard from "./SkillsinfoCard/SkillsInfocard";

const Skills =()=>{

    const [selectedSkill, setSelectedSkill] = React.useState(SKILLS[0])
    const handleSelectSkill =(data) =>{
        setSelectedSkill(data)
    }
return(

<section className="skills-container">
    <h5>Technical Proficiency</h5>

    <div  className="skills-content">
        <div className="skills">
            {SKILLS.map((item) =>(
                <Skillcard
                key={item.title}
                iconurl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                    handleSelectSkill(item)
                }}
                />
            ))}
             
        </div>
        <div className="skills-info">
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
        </div>
    </div>
</section>


);


}
export default Skills