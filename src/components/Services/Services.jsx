

import React from 'react'
import {Container,Row,Col} from "reactstrap"
import "./service.css"


const Services = () => {

    const servicesData=[
        {
            icon:'ri-code-line',
            title:'Web Design',
            desc:'Web Applications Designer is responsible for designing the overall layout and aesthetic for websites.Their duties include coding webpages or entire websites meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features',
        },
        {
            icon:'ri-code-s-slash-line',
            title:'Web Development',
            desc:'I am Muhammad Fawad Iqbal , Software Engineering student from Air University Islamabad. A Full-stack Developer, and a technology lover with high dedication, motivation and the ability to learn quickly.I have experience of 2 years currently working with multinational company with one year.',
        },
        {
            icon:'ri-qr-code-line',
            title:'App Development',
            desc:'Web Applications Designer is responsible for designing the overall layout and aesthetic for websites.Their duties include coding webpages or entire websites meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features',
        },
        {
            icon:'ri-search-line',
            title:'SEO',
            desc:'Web Applications Designer is responsible for designing the overall layout and aesthetic for websites.Their duties include coding webpages or entire websites meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features',
        },
        {
            icon:'ri-landscape-line',
            title:'Graphics Design',
            desc:'Web Applications Designer is responsible for designing the overall layout and aesthetic for websites.Their duties include coding webpages or entire websites meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features',
        },
        {
            icon:'ri-gallery-line',
            title:'UI/UX',
            desc:'Web Applications Designer is responsible for designing the overall layout and aesthetic for websites.Their duties include coding webpages or entire websites meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features',
        },
    ]

  return <section id="services">
    <Container>
        <Row>
            <Col lg='12' className='services__top mb-5'>
                <h6>Features</h6>
                <h2>What Service I provide</h2>
            </Col>
          
            {
                servicesData.map((item,index)=>(
                    <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                    <div className="single__service">
                <span className="service__icon" >
                <i class={item.icon}></i>
                </span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </div>
            </Col>
                ))
            }
            
        </Row>
    </Container>
  </section>
}



export default Services