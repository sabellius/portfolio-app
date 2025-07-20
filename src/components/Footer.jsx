import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  // Update CSS variable with the actual footer height after render
  useEffect(() => {
    const updateFooterHeight = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        document.documentElement.style.setProperty(
          '--footer-height',
          `${footer.offsetHeight}px`
        );
      }
    };

    // Update on mount and window resize
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);

    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <Row>
          <Col md={12}>
            <p className="mb-2">© 2023 My Portfolio. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="mx-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
