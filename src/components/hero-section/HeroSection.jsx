import React from 'react'
import './hero-section.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from "../../assets/Images/heroImg.jpeg"
import pdffile from "../../assets/Resume_Muhammad_Fawad_Iqbal.pdf"

import {Typewriter} from "react-simple-typewriter"

const HeroSection = () => {
  
  const downloadResume = () => {
    const url = `${pdffile}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return <section className='hero__section' id="home">
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className="hero__content">
                
                <p className='mb-3'>Welcome to my World!</p>
                    <h5 className='hi mb-4'>Hi</h5>
                    <h2 className='hero__title mb-4'>I'm <span>
                     <Typewriter words={["Muhammad Fawad Iqbal"," Professional Coder.", "Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                     </span>
                     </h2>
                    <p>I am Muhammad Fawad Iqbal , Software Engineering student
                       from Air University Islamabad. A Full-stack Developer, and 
                       a technology lover with high dedication, motivation and the
                       ability to learn quickly.</p>
                       <div className="mt-5 hero__btns d-flex align-items-center gap-4" >
                        <button className="hire__btn"><a href="#">Click on</a></button>
                        <button className="btn13" onClick={downloadResume}>Download Resume</button>
                       </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="" className="w-100"/>
                </div>
            </Col>
        </Row>

    </Container>
  </section>
}

export default HeroSection
