import React, { Component } from 'react';
import { Container, Row, Col, Image, FormControl, ReactBootstrapStyle } from 'react-bootstrap';
import Test from './test.js'
import sand from '../../images/sand.jpeg';


class HomePage extends Component {
  render() {  
    return (
   
      <Container fluid >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
      <div fluid>
   <Image src={sand} alt="Logo" fluid className="imagefix" />
</div>
        <Col xs={6} >
        <Test />
        </Col>
        <Col xs={6}>
        <Image src={sand} alt="Logo" fluid />
        </Col>
      </Row>
    
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
    </Container>
    )
  }
}

export default HomePage;