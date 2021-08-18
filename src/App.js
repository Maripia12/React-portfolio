import React from "react";
import Header from "./components/Header";
import Navbar from  "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
