import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import MyDropzone from './components/Uploader'
import ViewCells from './components/ViewCells'
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
        <Route path="/" exact component={Home} />
        <Route path="/mydropzone/" component={MyDropzone} />
        <Route path="/viewcells/" component={ViewCells} />
      </div>
    </Router>
  );
}

export default AppRouter;

