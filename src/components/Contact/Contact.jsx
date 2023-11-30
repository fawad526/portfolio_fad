import React from 'react'
import "./contact.css"
import {Container,Row,Col} from "reactstrap"
import Form from '../Form/Form'


const Contact = () => {
  return <section id='contact'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>Get In Touch</h2>
            </Col>
            <Col lg='6' md='6'>
            <div className="contact__info-container d-flex align-items-center gap-5">
                <div className="single__info-box w-50">
                    <h6>Address</h6>
                    <p>Pakistan, Islamabad</p>
                </div>
                <div className="single__info-box w-50">
                    <h6>Phone</h6>
                    <p>+92 3490565091</p>
                </div>
            </div>
            <div className="contact__info-container d-flex align-items-center gap-5 mb-1 pt-3">
                <div className="single__info-box w-50">
                    <h6>Email</h6>
                    <p>fawadiqbal274@gmail.com</p>
                </div>
                <div className="single__info-box w-50">
                    <h6>Location</h6>
                    <p>Rawalpindi, Jinnah Camp</p>
                </div>
            </div>
            </Col>
            <Col lg='6' md='6'>
                <Form/>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Contact