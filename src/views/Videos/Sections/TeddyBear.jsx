import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Video from "../../../components/Videos/Video";
import ModalVideo from "../../../components/Videos/ModalVideo";

class TeddyBearSection extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Bear Dance"
              headerText="Bear Dance"
              youTubeId="67XrnrmDPR0"
              title="Bear Dance by Bartok"
            />
          </Col>
          <Col md={6}>
            <ModalVideo
              buttonText="Watch Bear Dance"
              headerText="Bear Dance"
              youTubeId="67XrnrmDPR0"
              title="Bear Dance by Bartok"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TeddyBearSection;
