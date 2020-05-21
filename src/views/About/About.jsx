import React from "react";
import Header from "../../components/Headers/HomeHeader";
import Footer from "../../components/Footers/HomeFooter";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header activeKey="/about" />
        <h1>About Page</h1>
        <p>Text for the about page</p>
      </div>
    );
  }
}

export default AboutPage;
