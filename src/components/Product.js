import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../stylesheets/Product.css';
const Product = () => {
  //pagina unui produs
  return (
      <Carousel>
        <Carousel.Item className="carousel">
          <img
              className="d-block"
              src= {require("../images/masina.jpg")}
              alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
              className="d-block"
              src= {require("../images/masina.jpg")}
              alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
              className="d-block"
              src= {require("../images/masina.jpg")}
              alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Product