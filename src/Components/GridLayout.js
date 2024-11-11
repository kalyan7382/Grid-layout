// GridLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormComponent from './FormComponent';
import Footer from './Footer'

const GridLayout = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col xs={12} md={4} className="p-3 bg-light border">
        <FormComponent />
        </Col>
        <Col xs={12} md={8} className="p-3 bg-secondary text-white border">
          <Footer />
        </Col>
        
      </Row>
      
      {/* <Row className="my-3">
        <Col xs={6} md={3} className="p-3 bg-info text-white border">
          Column 4
        </Col>
        <Col xs={6} md={3} className="p-3 bg-dark text-white border">
          Column 5
        </Col>
        <Col xs={6} md={3} className="p-3 bg-info text-white border">
          Column 6
        </Col>
        <Col xs={6} md={3} className="p-3 bg-dark text-white border">
          Column 7
        </Col>
      </Row> */}
    </Container>
  );
};

export default GridLayout;
