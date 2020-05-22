import React from "react";
import Header from "../../components/Headers/AboutHeader";
import Footer from "../../components/Footers/HomeFooter";

class AboutPage extends React.Component {
  render() {
    return (
      <div class="container"> 
        <Header activeKey="/about" />
        <h1>About Page</h1>
        <p>Text for the about page</p>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
