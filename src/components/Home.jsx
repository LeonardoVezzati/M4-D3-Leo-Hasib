import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import items from "../history.json";
import BooksComments from "./BooksComments";

// .map
// we need to work with the state object to keep track of which dish we selected
// but we cannot have the state object into a functional component
// for having a state we need a Class Component

// functional components are a touch faster

class Home extends React.Component {
  // let's declare the INITIAL state for my component
  // the state is an object for keeping track of things during
  // the lifespan of our page/component

  state = {
    selectedBook: items[0], // we always need to provide an initial state for our component
  };

  // the state object in a react component is READ-ONLY
  // you cannot change it directly, but only with a method calles setState

  // the parameter you pass to setState will always be an object
  // that object will be MERGED into the current state

  render() {
    // render is the ONLY REQUIRED method in a class component
    console.log(this.props);
    return (
      <Container>
        {/* <div class="container" /> */}
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8}>
            <h1>Welcome to Strive Library</h1>
            <p>The best books you can find on the web!</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8}>
            <BooksComments book={this.state.selectedBook} marginTop={0} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
