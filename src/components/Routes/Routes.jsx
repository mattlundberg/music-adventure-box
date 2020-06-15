import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//Pages
import HomePage from "../../views/Home/Home.jsx";
import ContactPage from "../../views/Contact/Contact.jsx";
import AboutPage from "../../views/About/About.jsx";
import VideoPage from "../../views/Videos/Videos";
import ShopPage from "../../views/Shop/Shop";

var hist = createBrowserHistory();

class Routes extends React.Component{
    render(){
        return(
            <Router history={hist}>
                <Switch>
                <Route path="/contact" component={ContactPage} />
                <Route path="/videos" component={VideoPage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/about" component={AboutPage} />
                <Route exact="/" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}

export default Routes; 
