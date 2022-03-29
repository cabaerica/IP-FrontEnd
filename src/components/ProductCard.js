import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ProductCard = () => {
    //datele unui produs vor fi puse pe un card care va fi adaugat pe FirstPage
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src="../images/masina.jpg" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Pret</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>

    </Card>
  );
}

export default ProductCard;