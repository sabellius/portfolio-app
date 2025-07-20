import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="home" className="hero-section full-page-section text-center">
      <Container>
        <h1 className="display-4 fw-bold">Hello, I'm Jane Doe</h1>
        <h2 className="my-4">Frontend Developer & UI Designer</h2>
        <p className="lead mb-4">
          I create beautiful and functional web applications using modern
          technologies
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button href="#projects" variant="primary" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="outline-primary" size="lg">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
