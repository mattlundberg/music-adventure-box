import React from "react";
import Header from "../../components/Headers/HomeHeader";
import Footer from "../../components/Footers/HomeFooter";

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header activeKey="/contact" />
        <h1>Contact Page</h1>
        <p>text for the Contact page</p>
      </div>
    );
  }
}

export default ContactPage;
