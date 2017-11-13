import React from "react";
import afx from "../img/afx.jpg";
import daftpunk from "../img/daftpunk.jpg";
import squarepusher from "../img/squarepusher.jpg";
import { Row, Col, Thumbnail, Button } from "react-bootstrap";

class Media extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={4}>
          <Thumbnail src={afx} alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={12} md={4}>
          <Thumbnail src={daftpunk} alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={12} md={4}>
          <Thumbnail src={squarepusher} alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    );
  }
}
export default Media;
