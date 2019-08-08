import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Carousel, Nav, Button, Form, FormControl, ReactBootstrapStyle } from 'react-bootstrap';
import yolo from './package.png';

class Test extends Component {
render() {
  return (
      <div>
          <Carousel>
  <Carousel.Item>
  <Image
      className="d-block w-100"
      src={yolo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      className="d-block w-100"
      src={yolo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image
      className="d-block w-100"
      src={yolo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
   </Carousel>
    
      </div>
  )
}
}


export default Test;

