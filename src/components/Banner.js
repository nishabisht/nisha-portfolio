import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export default function Banner() {
  const [toRotate, setToRotate] = useState([
    "Application Support Engineer",
    "Web Designer",
    "Backend Developer",
  ]);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
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
    console.log(text);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(600);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hi! I'm Nisha "}
              <span className="wrap">{text}</span>
            </h1>
            <span className="gray">
              Aspiring Software Engineer with experience in production support
              and a background in Computer Science. Committed to delivering
              high-quality software solutions through technical expertise and
              innovative problem-solving.
            </span>
            <button onClick={() => console.log("lets connect")}>
              Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={headerImg} className="Header Img" alt="headerimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
