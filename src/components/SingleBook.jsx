import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.setNewAsin(this.props.book.asin);
          }}
          style={{
            border: this.props.book.asin === this.props.selectedAsin ? "3px solid red" : "3px solid rgb(0 0 0 / 12.5%)"
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
