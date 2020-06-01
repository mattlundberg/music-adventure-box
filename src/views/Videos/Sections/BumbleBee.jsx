import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalVideo from "../../../components/Videos/ModalVideo";

class BumbleBeeSection extends React.Component {
  render() {
    return (
      <Container style={{textAlign:"center"}}>
        <h1>Bumble Bee Videos</h1>
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Instructions"
              youTubeId="Mjy7ZQ41KUg"
              title="Instructions"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Coo Coo"
              youTubeId="LcROc8KU-eM"
              title="Coo Coo"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="You are my Sunshine"
              youTubeId="dONmyC8F9sw"
              title="You are my Sunshine"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Hush Little Baby"
              youTubeId="7IEo0dB9efI"
              title="Hush Little Baby"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText='"Flight of the Bumble Bee" Movement Activites'
              youTubeId="Pb6OrZUmA6o"
              title="'Flight of the Bumble Bee' Movement Activites"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Video"
              headerText="Here is the Beehive"
              youTubeId="67XrnrmDPR0"
              title="Here is the Beehive"
            />
          </Col>
        </Row>
        <br />
        <h1>Bumble Bee Music Downloads</h1>
        <br />
        <Row>
          <Col md={3}>
            <Button href="" download><h3>Download Here is a Beehive Song</h3></Button>
          </Col>
          <Col md={3}>
            <Button href="" download><h3>Download You are my Sunshine Song</h3></Button>
          </Col>
          <Col md={3}>
            <Button href="" download><h3>Download Coo Coo Song</h3></Button>
          </Col>
          <Col md={3}>
            <Button href="" download><h3>Download Hush Little Baby Song</h3></Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BumbleBeeSection;
