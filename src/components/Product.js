import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../stylesheets/Product.css';

const Product = () => {
    //pagina unui produs
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className="d-flex justify-content-center">
                    <img
                        className="d-block"
                        src={require("../images/masina.jpg")}
                        alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className="d-flex justify-content-center">
                    <img
                        className="d-block"
                        src={require("../images/masina2.jpg")}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="d-flex justify-content-center">
                    <img
                        className="d-block"
                        src={require("../images/masina3.jpg")}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <h1 id="titlu">Masina de spalat</h1>
        </div>
    )
}

export default Product