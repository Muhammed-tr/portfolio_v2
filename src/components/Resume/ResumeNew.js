import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import image from "../../Assets/../Assets/MuhammedİzzetDemir_CV.jpg";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={image}
            download="MuhammedİzzetDemir_CV.jpg"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img
            src={image}
            alt="Resume"
            style={{
              maxWidth: "1000px", // Genişlik ayarı
              height: "auto", // Otomatik yükseklik ayarı
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Hafif gölge efekti
            }}
            className="d-flex justify-content-center"
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={image}
            download="MuhammedİzzetDemir_CV.jpg"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
