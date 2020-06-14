import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const addBackground = {
  backgroundImage: 'url("../../../images/banners/test.png")',
  backgroundSize: "cover",
};

class Banner extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style={addBackground}>
          <h3>A Musical Journey Connecting Your Family</h3>
          <p>
            <Button href="/shop" variant="primary" size="lg">
              Get Started
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Banner;
