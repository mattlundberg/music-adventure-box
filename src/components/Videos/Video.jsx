import React from "react";
import Container from "react-bootstrap/Container";

class Video extends React.Component {
  render() {
    return (
      <Container>
        <iframe
          fill
          title={this.props.title}
          src={this.props.videoUrl}
          height="90%"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </Container>
    );
  }
}

export default Video;
