import React from "react";
import Header from "./components/01 header";
import Home from "./components/02 home";
import Work from "./components/03 work";
// import Upcoming from "./components/04 upcoming";
// import Footer from "./components/05 footer";

import "./styles/app.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Work />
    </div>
  );
}

export default App;
