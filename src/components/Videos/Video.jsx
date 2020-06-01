import React from "react";
import Container from "react-bootstrap/Container";

class Video extends React.Component {
  render() {
    return (
      <Container>
        <iframe
          fluid
          title={this.props.title}
          src={this.props.videoUrl}
          height="100%"
          width="100%"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          style={{minHeight:"480px"}}
        ></iframe>
      </Container>
    );
  }
}

export default Video;
