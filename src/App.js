import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import MyDropzone from './components/Uploader'
import ViewCells from './components/ViewCells'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Table 6</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Samples</Nav.Link>
              <Nav.Link href="#features">Wish List</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search For Images</Button>
            </Form>
          </Navbar>
          <br />
        </>
        <Route path="/" exact component={Home} />
        <Route path="/mydropzone/" component={MyDropzone} />
        <Route path="/viewcells/" component={ViewCells} />
      </div>
    </Router>
  );
}

export default AppRouter;

