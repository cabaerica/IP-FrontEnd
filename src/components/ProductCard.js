import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ProductCard = () => {
    //datele unui produs vor fi puse pe un card care va fi adaugat pe FirstPage
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src= {require("../images/masina.jpg")} />
      <Card.Body>
        <Card.Text>
          Masina spala foarte bine si suppeeerr bunaaa!!!!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Pret :1199</ListGroupItem>
        <ListGroupItem>Masina de spalat ARCTIC WB124</ListGroupItem>
        <ListGroupItem>Descriere amanuntita</ListGroupItem>
      </ListGroup>

    </Card>
  );
}

export default ProductCard;
