import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: ""
  };

  setNewAsin = asin => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        {/* <AllTheBooks /> */}
        <Row>
          <Col md={8}>
            <BookList books={fantasy} setNewAsin={this.setNewAsin} selectedAsin={this.state.selectedAsin} />
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    );
  }
}

export default App;
