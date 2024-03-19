import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Assignment1 from "./assignments/Assignment1";
import Assignment2 from "./assignments/Assignment2";
import Assignment3 from "./assignments/Assignment3";
import Assignment4 from "./assignments/Assignment4";
import Assignment5 from "./assignments/Assignment5";
import Assignment6 from "./assignments/Assignment6";
import Assignment7 from "./assignments/Assignment7";
import Assignment8 from "./assignments/Assignment8";
import FinalProject from "./FinalProject/FinalProject";
import { Jumbotron } from "../home/migration";

const RenderHtml = React.forwardRef((props, ref) => {
  return (
    <>
      <Jumbotron id="computer">
        <Container style={{ paddingTop: 80, paddingBottom: 40 }}>
          <h1 ref={ref} className="display-5 pb-3 text-center">
            Computer Graphics
          </h1>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bresenham's line algorithm</Accordion.Header>
              <Accordion.Body>
                <Assignment1 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Matrices Calculator</Accordion.Header>
              <Accordion.Body>
                <Assignment2 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>House Transforming</Accordion.Header>
              <Accordion.Body>
                <Assignment3 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Snake Game</Accordion.Header>
              <Accordion.Body>
                <Assignment4 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Focal Space Cubes</Accordion.Header>
              <Accordion.Body>
                <Assignment5 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Greenest Grass</Accordion.Header>
              <Accordion.Body>
                <Assignment6 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Generated Towers</Accordion.Header>
              <Accordion.Body>
                <Assignment7 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Sign Shoot Out</Accordion.Header>
              <Accordion.Body>
                <Assignment8 />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Obstacle Course</Accordion.Header>
              <Accordion.Body>
                <FinalProject />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Jumbotron>
    </>
  );
});

export default RenderHtml;
