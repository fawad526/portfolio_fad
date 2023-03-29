
import React from 'react'
import "./experience.css"
import {Row,Container,Col} from "reactstrap"


const Experience = () => {
    const develpomentExperienceData=[
        {
            year:'(Aug-Sep 2022)',
            title:'MERN Developer (Internship)| Texinity Technologies Pvt Ltd. Islamabad',
            desc:'• Support software including applications, database integration, interfaces, and new functionality enhancements. • Coordinate cross-functionally to ensure the project meets business objectives and compliance standards. • Building the wireframes screens UI/UX component for the application• Implementation of the wireframes using Reactjs using material-UI and also Bootstrap5 which allow to complete the task in a very unique way. • Error handling technique how to resolve and learn about the dependencies of different libraries how to use and implement it.',
        },
        {
            year:'(July-Aug 2022)',
            title:'MERN Developer Intern | Daxno Technologies Islamabad',
            desc:'• As an intern I learned about the culture and behavior how industry work they guide me so well how to approach to new things, in there I have work on the frontend development. • Development of screens to implement using JavaScript framework reactjs • I have work on the project that is basically my FYP they guide me how to implement it from the start where I am possibly meet a functionality where I am able to complete one module where company can post job Ad and they can check the job details where they can also check as it is remote, or in office.',
        },
        
    ]
    const develpomentExperienceData2 = [
        {
            year:'(May-Aug 2022)',
            title:'PSEB MERN Developer | Air University , Islamabad ',
            desc:'• In there I have learned about the basics of Development and approaching towards the MERN stack. • Instructing us in a way that leaning was very unique in especially in the frontend reactjs was one of the core.',
        },
        {
            year:'(2022-2023)',
            title:'FYP Job portal  Web Application (FYP Accelerator Program with 10Pearls)',
            desc:'• The project is to use AI-driven techniques to make the hiring and career searching processes easier, both for the companies, job seekers, and other users of the system. The key objectives of the projects are as follows: • To provide a platform for the companies to post jobs with shortlisting criteria.• To shortlist the best-fit candidates for a job from the pool of relevant profiles, given some selection criteria. • To provide job recommendations to the candidates based on their detailed profile and personality assessment. • To help students and faculty members search and connect based on the criteria of their own choice. The proposed platform will select the candidates who are qualified for the job and shortlist them by a well-defined process. In this way, we can save time and cost of extra work, make the hiring process more efficient and more accurate, eliminate unqualified applicants quickly, and shortlist the candidates aligned to the qualifications. Likewise, the platform will provide the best-fitting job recommendations to the candidates based on their skill set and expertise Kraeer Konnect will assist the students, researchers, and faculty members to connect for joint research and development projects and other purposes. • The project is developed using MERN stack and we are using BERT model and for connecting we are using Flask',
        }
    ]
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
            <h2>Experience</h2>
            </Col>
            <Col lg='6' md='6'>
                <div className="single__experience-container">
                {
                    develpomentExperienceData.map((item,index)=>(
                        <div className="single__experience" key={index}>
                        <span className='experience__icon'><i class="ri-briefcase-line"></i></span>
                        <h6>{item.year}</h6>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                     ))
                }
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="single__experience-container">
                {
                    develpomentExperienceData2.map((item,index)=>(
                        <div className="single__experience" key={index}>
                        <span className='experience__icon'><i class="ri-briefcase-line"></i></span>
                        <h6>{item.year}</h6>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                     ))
                }
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Experience