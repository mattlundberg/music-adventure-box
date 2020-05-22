import React from "react";
import Header from "../../components/Headers/ShopHeader";
import Footer from "../../components/Footers/HomeFooter";

class ShopPage extends React.Component {
  render() {
    return (
      <div class="container">
        <Header activeKey="/shop" />
        <h1>Shop Page</h1>
        <p>text for the shop page</p>
        <Footer />
      </div>
    );
  }
}

export default ShopPage;
