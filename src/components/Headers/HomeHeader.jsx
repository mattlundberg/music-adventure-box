import React from "react";
import Navigation from "../Navigations/HomeNavigation";
import Banner from "../Banners/HomeBanner";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <h1>Header</h1>
        <p>Text for how it Header</p>
      </div>
    );
  }
}

export default Header;
