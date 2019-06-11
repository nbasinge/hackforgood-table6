import AppRouter from "../App";
import React from "react";
import { BrowserRouter as Router, NavLink, Redirect} from "react-router-dom";
import {Button, Jumbotron, Nav, Form, Navbar, FormControl} from 'react-bootstrap'
function Home() {
  return <div>
    <Jumbotron>
    <h1>Welcome!</h1>
    <p>
      This is a simple uploading application where you can upload your tiff images for analysis
    </p>
    <p>
      {/*<Button variant="primary" onClick={()=>{return <Redirect to="/mydropzone"> Dashboard </Redirect>}}>Upload Image</Button>*/}
      <NavLink to="/mydropzone"> Upload Image </NavLink>
      <NavLink to="/viewcells"> View Images </NavLink>
    </p>
  </Jumbotron>

  </div>}

export default Home;