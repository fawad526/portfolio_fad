

import React from 'react'
import "./portfolio.css"
import {Row,Col,Container} from "reactstrap"


const portfolioData=[
    {
        title: "Ecommerce Website creation of guns store",
        image: "https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?b=1&k=20&m=1133980246&s=170667a&w=0&h=bTnkdrrJG8du7niSgw6r1TYQGCX2CYrqIoFxaMbOS_4=",
        url:"https://fawad526.github.io/army_store/",
    },
    {
        title: "Attendance portal for the students to register",
        image: "https://media.istockphoto.com/photos/african-american-girl-raising-her-hands-while-sitting-on-her-desk-in-picture-id1323715308?b=1&k=20&m=1323715308&s=170667a&w=0&h=MeG-_I7iI4HsElwGrxCgMm7P4QkJsWGmwvcrOyYnGlc=",
        url:"https://fawad526.github.io/attendanceportal/",  
    },
    {
   
      title: "Quiz App ",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVpeiUyMHBob3Rvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      url:"https://fawad526.github.io/quiz/",
   
    },
    {
    title: "Static HMS website",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    url:"https://fawad526.github.io/HMS/ ",
    },
    {
    title: "Employee/Company can post Job",
    image: "https://media.istockphoto.com/photos/business-people-having-casual-discussion-during-meeting-picture-id1347197740?b=1&k=20&m=1347197740&s=170667a&w=0&h=wgx6rJaa-q2k8twujrAe-KV5-0uEnGKrt_W88BwM12U=",
    url:"https://fawad526.github.io/fyp-2-kareer-konnect/",
    },
    {
    title: "Website for the Resturant",
    image: "https://media.istockphoto.com/photos/happy-friends-lunching-with-healthy-food-in-bar-coffee-brunch-young-picture-id1319836656?b=1&k=20&m=1319836656&s=170667a&w=0&h=MuZbXoLP0bdGfl2bLzHndoPfCk58yTFnHXehIyGKE8c=",
    url:"https://fawad526.github.io/fawaddhabba/"
    }

]


const Portfolio = () => {
  return <section id='portfolio'>
    <Container>
        <Row>
            <Col lg='12' className='portfolio__top mb-5'>
                <h6>Explore my work and give a feedback</h6>
                <h2>Portfolio</h2>
            </Col>
            {
                portfolioData.map((item,index)=>(
                    <Col lg='4' md='6' sm='6' key={index}>
            <div className="portfolio__card">
                <div className="portfolio__img">
                    <img src={item.image} alt="" />
                </div>
                <div className="portfolio__content">
                    <div className="content__top">
                    <h5>{item.title}</h5>    
                        <a href={item.url}>View Live Demo</a>
                    </div>
                    
                </div>
            </div>
            </Col>
                ))
            }
            
        </Row>
    </Container>
  </section>
}

export default Portfolio