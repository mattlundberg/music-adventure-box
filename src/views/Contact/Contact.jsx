import React from "react";
import Header from "../../components/Headers/ContactHeader";
import Footer from "../../components/Footers/HomeFooter";

class ContactPage extends React.Component {
  render() {
    return (
      <div class="container">
        <Header activeKey="/contact" />
        <h1>Contact Page</h1>
        <p>text for the Contact page</p>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
