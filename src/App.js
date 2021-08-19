import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PortfolioContainer from "./components/PortfolioContainer/PortfolioContainer";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <PortfolioContainer />
        {/* <Projects /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
