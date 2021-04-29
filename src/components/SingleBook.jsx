import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
              <Card.Text>
                <p>{props.book.category}</p>
                <p>{props.book.price}</p>
                <p>
                  {props.book.comments.map((c) => (
                    <ListGroup.Item key={c.elementId}>
                      "{c.comment}" rate {c.rate}
                    </ListGroup.Item>
                  ))}
                </p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
