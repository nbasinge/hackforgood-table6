import AppRouter from "../App";
import React from "react";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import {Carousel, Jumbotron, Button} from 'react-bootstrap'
function Caro(props) {
  return <div>
    {/*<Jumbotron>*/}
      {/*<h2>Cell</h2>*/}
    {/*</Jumbotron>*/}
    <Carousel>
      {props.pictures.map((pic, index)=>{
        return <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic.src}
            alt={`Research Image ${index}`}
          />
          <Carousel.Caption>
            <p>{`Research Image ${index}`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      })}
    </Carousel>
  </div>
  }

export default Caro;
