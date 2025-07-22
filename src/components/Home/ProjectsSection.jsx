import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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

function ProjectsSection() {
  return (
    <section className="project-section">
      <Container>
        <h2 className="project-heading text-center mb-5">
          <span className="text-primary">My Projects</span>
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
  );
}

export default ProjectsSection;
