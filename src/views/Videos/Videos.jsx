import React from "react";
import Header from "../../components/Headers/VideosHeader";
import Footer from "../../components/Footers/HomeFooter";

class VideosPage extends React.Component {
  render() {
    return (
      <div class="container">
        <Header activeKey="/videos" />
        <h1>Videos Page</h1>
        <p>text for the Videos page</p>
        <Footer />
      </div>
    );
  }
}

export default VideosPage;
