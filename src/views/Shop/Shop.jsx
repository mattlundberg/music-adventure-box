import React from "react";
import Header from "../../components/Headers/HomeHeader";
import Footer from "../../components/Footers/HomeFooter";

class ShopPage extends React.Component {
  render() {
    return (
      <div>
        <Header activeKey="/shop" />
        <h1>Shop Page</h1>
        <p>text for the shop page</p>
      </div>
    );
  }
}

export default ShopPage;
