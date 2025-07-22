import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "8-Tech EdTech Platform",
    description:
      "An ed-tech platform with live classes, recorded videos, PDF notes, and student management.",
    tech: "MERN, Bunny Stream, Jitsi",
    image: "/edtech.png", // replace with your image
    githubLink: "https://github.com/sudipta57/edtech-user-side",
  },
  {
    title: "Ride Booking app",
    description:
      "A ride booking app that allows users to book rides, track drivers in real-time, and manage bookings easily.",
    tech: "Next.js, AI API",
    image: "/uber.jpg",
    githubLink: "",
  },
  {
    title: "Encrypted Chat App",
    description:
      "A secure chat app with end-to-end encryption using Signal Protocol.",
    tech: "React Native, Signal Protocol",
    image: "/chat.webp",
    githubLink: "https://github.com/sudipta57/chattu-MERN",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  C++, React, Node.js, MongoDB, NeonDB, Next.js{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">AI-ML.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <section className="project-section">
          <Container>
            <h2 className="project-heading text-center mb-5">
              <span className="text-white">My Projects</span>
            </h2>
            <Row className="justify-content-center">
              {projects.map((project, index) => (
                <Col md={4} className="mb-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Card className="bg-transparent project-card shadow-lg rounded-3 border-0">
                          <Card.Img
                            variant="top"
                            src={project.image}
                            className="project-image"
                          />
                          <Card.Body>
                            <Card.Title className="text-white">
                              {project.title}
                            </Card.Title>
                            <Card.Text className="text-white">
                              {project.description}
                            </Card.Text>
                            <p className="text-muted">
                              <strong>Tech:</strong> {project.tech}
                            </p>
                          </Card.Body>
                        </Card>
                      </a>
                    ) : (
                      <Card className="bg-transparent project-card shadow-lg rounded-3 border-0">
                        <Card.Img
                          variant="top"
                          src={project.image}
                          className="project-image"
                        />
                        <Card.Body>
                          <Card.Title className="text-white">
                            {project.title}
                          </Card.Title>
                          <Card.Text className="text-white">
                            {project.description}
                          </Card.Text>
                          <p className="text-muted">
                            <strong>Tech:</strong> {project.tech}
                          </p>
                        </Card.Body>
                      </Card>
                    )}
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sudipta57"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCjd11COjk9fjT42KU3h3f-Q"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sudipta-ghorami-261a81292/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/codewithsudipta_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
