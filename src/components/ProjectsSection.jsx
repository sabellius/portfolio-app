import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store built with React and Node.js',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'Responsive portfolio website template using Bootstrap',
      image: 'https://via.placeholder.com/600x400',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A React application for managing daily tasks and to-dos',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Firebase', 'Redux', 'Material UI'],
      link: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather information app using third-party APIs',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', 'APIs', 'CSS', 'localStorage'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section full-page-section">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row>
          {projects.map(project => (
            <Col lg={6} className="mb-4" key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge bg-primary me-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline-primary" href={project.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
