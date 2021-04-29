import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

// class SearchForm extends React.Component {

// state = { search: "" }

const BookList = function (props) {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          {props.books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <p>{book.category}</p>
                    <p>{book.price}</p>
                    <p>
                      {book.comments.map((c) => (
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
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BookList;

{
  /* <Container className="mt-5">
          {
            <Form>
              <Form.Group controlId="formBasicSearch">
                <Form.Label>Search your books</Form.Label>
                <Form.Control 
                  id="search"
                  value={this.state.search}
                  onChange={(e) => this.setState({
                    search: e.target.value
                    })}
                  type="text"
                  placeholder="Search..." />
                <Form.Text className="text-muted">
                  Filter your preferred books.
                </Form.Text>
              </Form.Group>

            </Form>
          }
        </Container> */
}
