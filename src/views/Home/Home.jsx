import React from "react";

//Header and Footer
import Header from "../../components/Headers/HomeHeader";
import Footer from "../../components/Footers/HomeFooter";

//sections
import HowItWorks from "./Sections/HowItWorks.jsx";
import WhatIsInside from "./Sections/WhatIsInside.jsx";
import Reviews from "./Sections/Reviews.jsx";
import MyStory from "./Sections/MyStory.jsx";
import Guarantee from "./Sections/Guarantee.jsx";

class HomePage extends React.Component {
  render() {
    return (
      <div class="container">
        <Header activeKey="/" />
        <HowItWorks />
        <WhatIsInside />
        <Reviews />
        <MyStory />
        <Guarantee />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
