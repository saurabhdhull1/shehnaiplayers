import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Gallery } from "./Pages/Gallery";
import { About } from "./Pages/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiSolidToTop } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiSolidPhoneCall } from 'react-icons/bi';


function App() {

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >150) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  return (
    <div className="App" style={ location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/about' ? {} : { marginTop:'200px' }} >
      <NavBar />
      <Outlet/>
      <Footer />
      <a 
      className='scroll-to-top'
      href="tel:+91-9311-228-338"
      style={{  position:'fixed', right:'20px', bottom:'190px', zIndex:999, boxShadow:'.5px .5px 10px black', cursor:'pointer', color:'var(--color)' }}>
      <BiSolidPhoneCall/>
      </a>
      <a 
      className='scroll-to-top'
      href='https://web.whatsapp.com/send?phone=+91-9311-228-338'
      target='_blank'
      style={{  position:'fixed', right:'20px', bottom:'130px', zIndex:999, boxShadow:'.5px .5px 10px black', cursor:'pointer', background: '#25d366', color:'var(--color)' }}>
      <AiOutlineWhatsApp/>
      </a>
      <div 
      className='scroll-to-top'
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{  position:'fixed', right:'20px', bottom:'70px', zIndex:999, boxShadow:'.5px .5px 10px black', cursor:'pointer' }}>
      <BiSolidToTop/>
      </div>
    </div>
  );
}

export default App;
