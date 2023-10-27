import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img31.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useLocation } from "react-router-dom";

const About = () => {

  const location = useLocation();

  return (
    <section className="project" id="projects" style={ location.pathname === '/about' ? {paddingTop:'200px',background:'var(--gradient)' } : {background:'var(--gradient)' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item style={{ cursor: "pointer" }} >
                      <Nav.Link eventKey="first">Occasions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ cursor: "pointer" }} >
                      <Nav.Link eventKey="second">Performance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ cursor: "pointer" }} >
                      <Nav.Link eventKey="third">Instruments</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>
                      The Sound of Shehnai creates and maintains a sense of auspiciousness and sanctity and, as a result, is widely used during marriages, processions, and in temples of West India. Shehnai plays one of the most important parts of any Indian wedding music, parties and welcome occasions etc., be it for a Bengali, Rajasthani, Gujarati or Punjabi wedding. The music of Shehnai adds a special charm to a marriage ceremony with its tune heightening the mood of the celebration, The started providing Shehnai playing services from the time when entertainment sources were limited. . We employ the finest Shehnai Group in the Delhi (INDIA) - performers who share our vision and give you their all every time they play. Shehnai Playing was founded on the principle that the music we play can have a profound effect on some of the most important Events in people's lives, and as such should be a musically and visually exciting, dynamic, fun, and supremely entertaining experience.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Shehnai Player.com has Played for So many auspicious occasions Like Marriage ceremony, Birthday party, sagan Party,Religious occasions, corporate parties or National events in India And oversees, our stylish uniform and colorful safa,Pagdi give Artist royal look to their personality and style. Our Group has performed in so Many Bollywood stars, Wedding’s, performed in “Saif Kareena’s” wedding, for minister’s homely events, for IAS and IPS officer’s, Diplomats, for international level players marriage’s & homely event’s. for Famous industrialist for all kind of programmes organize by govt. of India and event management organizations, that has given “Shehnai Player.com” a platform Into the Glittering World as well. Thats way whenever there is an occasion or ceremony, one name that comes to the mind is the Famous ‘’Shehnai Player.com’’ the choice of millions!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>We Have Musically Trained and “A” Grade artists from All India Radio and Doordarshan who can play classical music, fusion, jazz music, light music and Regenol & film songs. Instrumental Music, solo Performance, and accompany with shehnai or other Instrument’s We have also all kind of “A” Grade trained and famous Artist/instrument player’s, like Sitar, Sarangi, Santoor, Shehnai, Sarod, sexophon, flute, Violin, Israj, Guitar, ecodian, Mandolin, Tasha , Dhol, Nagada, Tabla, Dholak, Pakhawaj, Mirdangam, Keybord Player,etc.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default About;