import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import DarkMode from "./DarkModeBtn/DarkMode";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Contact } from "./Contact";
import FullScreenButton from "./FullScreenButton";

export const NavBar = () => {
  //   const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        expand="md"
        className={scrolled ? "scrolled" : "scrolled"}
        style={{ boxShadow: "1px 1px 8px rgba(52, 52, 52, 0.523)" }}
      >   
        <Container>
          <Navbar.Brand
            className="navbar-link cursor-pointer"
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <span className="logoName" style={{ fontSize: "24px", color: "var(--color)", textShadow:'1px 1px 10px var(--color2)' }}>
              Shehnai Player
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                className={"navbar-link"} 
                onClick={() => navigate("/")}>
                Home
              </Nav.Link>
              <Nav.Link
                className={"navbar-link"}
                onClick={() => navigate("/about")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className={"navbar-link"}
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                className={"navbar-link"}
                onClick={() => navigate("/clients")}
              >
                Clients
              </Nav.Link>
              <Nav.Link
                className={"navbar-link"}
                onClick={() => navigate("/videos")}
              >
                Videos
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <DarkMode />
              <FullScreenButton/>
            </span>
            <button
                className="myNavbarBtn"
                onClick={() => navigate("/contact")}
              >Contact Us</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

        
