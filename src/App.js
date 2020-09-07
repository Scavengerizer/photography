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
        <Switch>
          <Route path='/' exact>
            <Home />
            <Work />
            <Contact />
            <Footer />
          </Route>
          <Route path='/work' exact>
            <Work />
          </Route>
          <Route path='/contact' exact>
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
