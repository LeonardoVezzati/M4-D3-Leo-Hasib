import { ListGroup } from "react-bootstrap";

const BooksComments = (props) => (
  // props.book is the whole object
  <div className={`mt-${props.marginTop}`}>
    <h2>Comments for {props.book.title}</h2>
    <ListGroup>
      {props.book.comments.map((c) => (
        <ListGroup.Item key={c.elementId}>
          "{c.comment}" rate {c.rate}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

export default BooksComments;
