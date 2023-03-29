

import React,{useState} from 'react'
import './about.css'
import {Container,Row,Col} from "reactstrap"
import aboutImg from "../../assets/Images/heroImg.jpeg" 
import Education from './Education'
import Skills from './Skills'
import Certificate from './Certificate'

const About = () => {

    let [aboutFilter,setAboutFilter]=useState('ABOUT');

return <section id='about'>
  <Container>
    <Row>
        <Col lg='12' className='mb-5'><h2>About Me</h2>{""}</Col>
        <Col lg='4' md='3'>
            <div className="about__btns d-flex flex-column align-items-center">
                <button className={`about__btn ${aboutFilter =='ABOUT' ? 'about__btn-active':'' }`} onClick={()=>setAboutFilter('ABOUT')}>
                    About me
                </button>
                <button className={`about__btn ${aboutFilter =='EDUCATION' ? 'about__btn-active':'' }`} onClick={()=>setAboutFilter('EDUCATION')}>
                    Education
                </button>
                <button className={`about__btn ${aboutFilter =='SKILLS' ? 'about__btn-active':'' }`}onClick={()=>setAboutFilter('SKILLS')}>
                    Skills
                </button>
                <button className={`about__btn ${aboutFilter =='CERTIFICATE' ? 'about__btn-active':'' }`}onClick={()=>setAboutFilter('CERTIFICATE')}>
                    Certificates
                </button>
            </div>
        </Col>
        <Col lg='8' md='9'>
        {
          aboutFilter =='ABOUT' &&  <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img w-25">
                    <img src={aboutImg} alt="" className='w-100'/>
                </div>
                <div className="about__content w-75">
                    <h2>I'm Muhammad Fawad Iqbal</h2>
                    <p>I am Muhammad Fawad Iqbal , Software Engineering student
                       from Air University Islamabad. A Full-stack Developer, and 
                       a technology lover with high dedication, motivation and the
                       ability to learn quickly.</p>
                       <div className="social__links">
                        <h6 className='mb-3'>Connect with me on one Click:</h6>
                        <span><a href="https://www.facebook.com/profile.php?id=100005691559094&mibextid=ZbWKwL"><i class="ri-facebook-line"></i></a></span>
                        <span><a href="https://github.com/fawad526"><i class="ri-github-line"></i></a></span>
                        <span><a href="https://instagram.com/fawadbravo?igshid=MGNiNDI5ZTU="><i class="ri-instagram-line"></i></a></span>
                        <span><a href="https://www.linkedin.com/in/fawad526/"><i class="ri-linkedin-line"></i></a></span>
                       </div>
                </div>
            </div>
        }
        {
            aboutFilter =="EDUCATION" && <Education/>
        }
        {
            aboutFilter == "SKILLS" && <Skills/>
        }
        {
            aboutFilter == "CERTIFICATE" && <Certificate/>
        }
        </Col>
    </Row>
  </Container>

  </section>
}

export default About