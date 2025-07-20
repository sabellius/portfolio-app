import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutSection() {
  return (
    <section id="about" className="about-section full-page-section">
      <Container>
        <h2 className="text-center mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <div className="about-image-container">
              <img
                src="https://via.placeholder.com/400x500"
                alt="Profile"
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
          <Col md={7}>
            <h3>
              Frontend Developer with a passion for creating intuitive UI/UX
            </h3>
            <p className="lead">
              With 5+ years of experience in web development, I specialize in
              creating responsive and user-friendly interfaces using React,
              Bootstrap, and other modern frameworks.
            </p>
            <p>
              I began my journey as a web developer in 2018 and have since
              worked on numerous projects for clients ranging from small
              businesses to large corporations. My goal is to create web
              applications that not only look great but are also intuitive and
              accessible to all users.
            </p>
            <div className="skills mt-4">
              <h4>My Skills</h4>
              <Row className="mt-3">
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">HTML/CSS</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">Bootstrap</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="skill-item">
                    <span className="skill-name">UI/UX Design</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '70%' }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
