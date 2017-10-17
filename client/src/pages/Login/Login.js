import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import './Login.css';

class Login extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    username: "",
    password: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        // console.log(res)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>

          <Col size="md-4 md-offset-4">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            <form className="login-form">

              <Input
                value={this.state.usename}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (Required)"
              />

              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (Required)"
              />

              <FormBtn
                onClick={this.handleFormSubmit}
                style={{ float: "left" }}
                className="btn btn-success"
              >
                Sign Up!
              </FormBtn>

              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
                style={{ float: "right" }}
                className="btn btn-success"
              >
                Log In
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>*/}
        </Row>
      </Container>
    );
  } // render
} // class

export default Login;