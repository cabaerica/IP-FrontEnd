import React from 'react'
import {ListGroupItem, ListGroup} from 'react-bootstrap'

const Card = () => {
    //datele unui produs vor fi puse pe un card care va fi adaugat pe FirstPage
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/masina.jpg" />
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
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
  </Card>
  )
}

export default Card