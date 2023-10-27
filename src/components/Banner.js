import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Shehnai Player", "Shehnai Player"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Carousel />
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2 className="fw-bolder fs-1">
                      {`Welcome to`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Shehnai Player", "Shehnai Player" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                    <p>
                      The Shehnai, an iconic Indian musical instrument, holds
                      profound significance in the context of weddings across
                      India. It falls within the category of Aerophonic
                      Instruments, and the melodious tunes produced by the
                      Shehnai are traditionally associated with auspiciousness
                      in Indian marriage ceremonies. Often regarded as a
                      harbinger of good fortune, the Shehnai is prominently
                      featured in North Indian weddings, processions, and
                      celebratory events. Its role in Indian wedding music,
                      whether for Bengali, Rajasthani, Gujarati, or Punjabi
                      weddings, is indispensable. The inclusion of Shehnai
                      melodies elevates the ambiance, infusing a unique charm
                      into the marriage festivities.
                    </p>
                    <button class="btn mb-4" onClick={() => navigate('/contact')} >
                      Contact Us
                      <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    style={{ paddingTop: "30px" }}
                  >
                    <img
                      src={headerImg}
                      alt="Header Img"
                      style={{ borderRadius: "14px" }}
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col xs={12} md={12} xl={12}>
              <div
                className="tagline p-3 text-center"
                style={{
                  borderRadius: "12px",
                  marginTop: "20px",
                  width: "100%",
                  textShadow: "2px 2px #282c345b",
                }}
              >
                World is like music, some high notes, some low notes, but always
                a beautiful sound like shehnai
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
