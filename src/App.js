import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import MyDropzone from './components/Uploader'

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

        {/*<nav>*/}
          {/*<ul>*/}
            {/*<li>*/}
              {/*<Link to="/">Home</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/MyDropzone/">Upload Image</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/users/">Users</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</nav>*/}

        <Route path="/" exact component={Home} />
        <Route path="/mydropzone/" component={MyDropzone} />
        <Route path="/users/" component={Users} />

      </div>
    </Router>
  );
}

export default AppRouter;

