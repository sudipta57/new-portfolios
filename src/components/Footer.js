import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sudipta Ghorami</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sudipta57"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCjd11COjk9fjT42KU3h3f-Q"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sudipta-ghorami-261a81292/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/codewithsudipta_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
