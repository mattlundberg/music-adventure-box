import React from "react";
import Header from "../../components/Headers/HomeHeader";
import Footer from "../../components/Footers/HomeFooter";

class VideosPage extends React.Component {
  render() {
    return (
      <div>
        <Header activeKey="/videos" />
        <h1>Videos Page</h1>
        <p>text for the Videos page</p>
      </div>
    );
  }
}

export default VideosPage;
