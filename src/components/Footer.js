import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import { BiSolidToTop } from 'react-icons/bi';
import { AiFillFacebook } from 'react-icons/ai';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';
import { useLocation } from "react-router-dom";

export const Footer = () => {

  const location = useLocation();
  console.log(location)
  return (
    <footer className="footer" style={ location.pathname === '/' ? {} : { marginTop:'200px' } } >
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a 
            className='scroll-to-top'
            style={{ background: 'var(--gradient)', color:'white'}}
            href="tel:+91-9311-228-338">
              <BiSolidPhoneCall/>
            </a>
            <a 
            className='scroll-to-top'
            href="https://www.facebook.com/shahnaiplayer/"
            target="_blank"
            rel="noreferrer"
            style={{ background: '#3b5998', color:'white'}}>
              <AiFillFacebook/>
            </a>
            <a 
            className='scroll-to-top'
            style={{ background: "#CD201F", color:'white'}}
            href="https://www.youtube.com/@shehnaiplayers"
            target="_blank"
            rel="noreferrer"
            >
              <AiFillYoutube/>
            </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
