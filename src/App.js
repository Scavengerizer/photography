import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/01 header";
import Home from "./components/02 home";
import Work from "./components/03 work";
import Contact from "./components/04 contact";
import Footer from "./components/05 footer";

import "./styles/app.scss";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Home />
        <Work />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
