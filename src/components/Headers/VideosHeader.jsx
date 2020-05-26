import React from "react";
import Navigation from "../Navigations/HomeNavigation";
import Banner from "../Banners/HomeBanner";

const Header = (props) => {
  return (
    <div>
      <Navigation activeKey={props.activeKey} />
    </div>
  );
};

export default Header;
