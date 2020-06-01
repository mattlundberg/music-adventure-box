import React from "react";
import Navigation from "../Navigations/HomeNavigation";
import Banner from "../Banners/HomeBanner";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navigation activeKey={this.props.activeKey} />
        <Banner />
      </div>
    );
  }
}

export default Header;
