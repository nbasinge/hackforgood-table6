import AppRouter from "../App";
import React, {useState} from "react";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import {Button, Jumbotron, Image,Container, Row, Col, Dropdown, Card} from 'react-bootstrap'
import Caro from './Caro';
const pictures = [[{
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-0.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-1.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-2.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-3.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-4.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-5.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-6.png"
}, {
  src: "https://nihinput-nih.s3.amazonaws.com/public/a-7.png"
}
],[{
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-0.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-1.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-2.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-3.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-4.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-5.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-6.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-7.png"
  }
  ],[{
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-0.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-1.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-2.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-3.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-4.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-5.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-6.png"
  }, {
    src: "https://nihinput-nih.s3.amazonaws.com/public/a-7.png"
  }
  ]
];
function ViewCells() {
  let [activeCell, setActiveCell] = useState(0)
  return <div>
    <Jumbotron>
      <h2>Viewing Research Images</h2>
      <NavLink to="/mydropzone">Upload Another Image (*tif)</NavLink>
      <Card>

      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title>{`Cell Sample ${activeCell+1}`}</Card.Title>
        <Card.Text>
          Some images to scroll through to look at patterns or to analyze further. <Button variant="primary">Analyze</Button>

        </Card.Text>
        <Caro pictures={pictures[activeCell]} activeCell={activeCell}/>

      </Card.Body>

    </Card>
    </Jumbotron>




      {/*<Dropdown>*/}
      {/*<Dropdown.Toggle variant="success" id="dropdown-basic">*/}
         {/*Cell {activeCell+1}*/}
      {/*</Dropdown.Toggle>*/}
      {/*<Dropdown.Menu>*/}
      {/*{*/}
      {/*pictures.map((pic, index) => {*/}
        {/*return <Dropdown.Item onClick={(index)=>{setActiveCell(index)}}>Cell {index + 1}</Dropdown.Item>*/}
      {/*})*/}
    {/*}*/}
      {/*</Dropdown.Menu>*/}
    {/*</Dropdown>*/}
  </div>
}

export default ViewCells;