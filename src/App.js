import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardComp from "./components/Card";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Card from "./data/card";
import { lightTheme, darkTheme } from "./theme/theme";

export default function App() {
  const colSize = 4;

  const CardImg = Card.map(item => (
    <div className={`col-sm-${colSize} mb-2`}>
      <CardComp item={item} />
    </div>
  ));

  const [themeObj, setThemeObj] = React.useState(lightTheme);

  function themeHandler() {
    setThemeObj(themeObj.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <div>
      <Router>
        <div className={`${themeObj.bgColor} ${themeObj.textColor}`}>
          <Header themeObj={themeObj} />
          <Switch>
            <Route path="/about">
              <About themeObj={themeObj} />
            </Route>
            <Route path="/products">
              <div className="container my-5">
                <div className="row">{CardImg}</div>
              </div>
            </Route>
            <Route path="/contact">
              <Contact themeObj={themeObj} />
            </Route>
            <Route path="/">
              <Home themeObj={themeObj} />
            </Route>
          </Switch>
          <Footer themeObj={themeObj} themeHandler={themeHandler} />
        </div>
      </Router>
    </div>
  );
}
