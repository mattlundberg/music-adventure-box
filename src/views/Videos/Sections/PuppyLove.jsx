import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalVideo from "../../../components/Videos/ModalVideo";

class PuppyLoveSection extends React.Component {
  render() {
    return (
      <Container style={{textAlign:"center"}}>
        <h1>Puppy Love Videos</h1>
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Bear Dance"
              youTubeId="in2uTrA8OMk"
              title="Bear Dance by Bartok"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="We're Goin' on a Bear Hunt"
              youTubeId="Kg3Nk8VT48A"
              title="We're Goin' on a Bear Hunt"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Bear Dance"
              youTubeId="in2uTrA8OMk"
              title="Bear Dance by Bartok"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Bear Hunt"
              youTubeId="Kg3Nk8VT48A"
              title="We're Goin' on a Bear Hunt"
            />
          </Col>
        </Row>
        <br />
        <h1>Puppy Love Music Downloads</h1>
        <br />
        <Row>
          <Col md={6} style={{textAlign:"center"}}>
            <Button href="" download>Download Puppy Love Song</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PuppyLoveSection;
