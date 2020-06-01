import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Video from "./Video";
import Image from "react-bootstrap/Image";

function VideoModal(props) {
  const [show, setShow] = useState(false);
  var imgUrl = "//img.youtube.com/vi/" + props.youTubeId + "/0.jpg";
  var videoUrl = "https://www.youtube.com/embed/" + props.youTubeId;
  var centerStyle = {
    textAlign: "center",
  };

  return (
    <Container style={centerStyle}>
      <h4>{props.headerText}</h4>
      <div>
        <Image src={imgUrl} fluid rounded />
        <br />
        <br />
        <Button bg="primary" onClick={() => setShow(true)}>
          <h3>{props.buttonText}</h3>
        </Button>
      </div>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header>{props.headerText}</Modal.Header>
        <Modal.Body>
          <Video videoUrl={videoUrl} title={props.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button bg="primary" onClick={() => setShow(false)}>
            Close Video
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default VideoModal;
