
import React from 'react'
import "./skillss.css"

const frontendSkill=[
    {
        title:'Reactjs',
    
        percentage:'95%',
    },
    {
        title:'JavaScript',
        
        percentage:'85%',
    },
    {
        title:'HTML && CSS',
    
        percentage:'95%',
    },
    {
        title:'Redux',
    
        percentage:'80%',
    },
    {
        title:'Bootstrap',
    
        percentage:'90%',
    },
    {
        title:'Nextjs',
    
        percentage:'70%',
    },

]

const backendSkills=[
    {
        title:'Nodejs',
        width:'90%',
        percentage:'90%'
    },
    {
        title:'Express',
        width:'80%',
        percentage:'80%'
    },
    {
        title:'MongoDB',
        width:'95%',
        percentage:'95%'
    },
    {
        title:'Git',
        width:'95%',
        percentage:'95%'
    },
    {
        title:'Linux',
        width:'85%',
        percentage:'85%'
    },
    {
        title:'Docker',
        width:'95%',
        percentage:'95%'
    },
]

const Skills = () => {
  return <div className="skills__wrapper d-flex gap-5">
    <div className="frontend__skill w-50" >
    {
        frontendSkill.map((item,index)=> (
          <SkillItem key={index} title={item.title} percentage={item.percentage}/>
        ))
    }
    </div>
    <div className="backend__skill w-50">
      {  backendSkills.map((item,index)=>(
        <SkillItem key={index} title={item.title} percentage={item.percentage}/>
      ))}
    </div>
  </div>
}
const SkillItem =({title, percentage})=>{
   return <div className="skill__data mb-3">
    <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>
            {title}
        </h6>
        <span>{percentage}</span>
    </div>
    <div className="skill__bar">
        <span className='skill__bar-percentage' style={{width:`${percentage}`}}></span>
    </div>
</div>
}

export default Skills