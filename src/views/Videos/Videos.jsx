import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Header and Footer
import Header from "../../components/Headers/VideosHeader";
import Footer from "../../components/Footers/HomeFooter";

//Side Navigation
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";

//Sections
import TeddyBearSection from "./Sections/TeddyBear";

class VideosPage extends React.Component {
  render() {
    return (
      <div class="container">
        <Header activeKey="/videos" />
        <br />
        <TabContainer defaultActiveKey={"teddyBear"}>
          <Row>
            <Col md={2}>
              <Nav
                justify
                variant="pills"
                bg="secondary"
                className="flex-column"
              >
                <Nav.Item>
                  <Nav.Link eventKey="teddyBear">Teddy Bear</Nav.Link>
                </Nav.Item>
                <br />
                <Nav.Item>
                  <Nav.Link eventKey="teddyBear2">Teddy Bear 2</Nav.Link>
                </Nav.Item>
                <br />
                <Nav.Item>
                  <Nav.Link eventKey="teddyBear3">Teddy Bear 3</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={10}>
              <TabContent>
                <TabPane eventKey="teddyBear">
                  <TeddyBearSection />
                </TabPane>
                <TabPane eventKey="teddyBear2">
                  <TeddyBearSection />
                </TabPane>
                <TabPane eventKey="teddyBear3">
                  <TeddyBearSection />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
        <br />
        <Footer />
      </div>
    );
  }
}

export default VideosPage;
