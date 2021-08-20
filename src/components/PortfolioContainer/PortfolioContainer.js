import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
      if (currentPage === "Contact") {
        return <Contact />;
      }
      if (currentPage === "Resume") {
        return <Resume />;
      }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
