

import React from 'react'
import "./certificate.css" 



const Certificate = () => {
  return <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
    <div className="award__item">
        <AwardItem year='2022' title='Frontend Development in Reactjs(Coursera)' text='I 
    have completed frontend Certification in Reactjs from coursera where I 
    learned how to use hooks, props and state with help of it I construct a 
    frontend website as the final project (a Website of a Restruant)' />
    </div>
  
   
    <div className="award__item">
        <AwardItem year='2022' title='MERN Stack Certificate(Texinity)' text='I have done my summer internship in a company where i worked on MERN stack on different
        projects  ususally developing the frontend pages in Reactjs. Where after completion of the internship period a stipend and Certificate is 
        given.'/>
    </div>
    <div className="award__item">
        <AwardItem year='2022' title=' MERN Stack Certificate(DAXNO)' text='I have work with a comapny on contract base for 3 months.Where i worked on
         MERN stack on different projects. Where after completion of the internship
         period a stipend and Certificate is given.'/>
    </div>
    <div className="award__item">
        <AwardItem year='2023' title=' Server-side Development with Nodejs(Coursera)' text='I
        have recently completed Certification from coursera in serverside development with
        Nodejs learned REST API (CRUD) operations , Asynchronous I/O callback, promises 
        and many more.'/>
    </div>
  </div>
}

const AwardItem=({year, title ,text})=>{
    return  <div className="single__award">
    <div className="award__year">{year}</div>
    <h6 className="award__title">{title} - {" "}<span>{text}</span></h6>
</div>
}


export default Certificate

/** 
  - {" "} <span>
     
 */