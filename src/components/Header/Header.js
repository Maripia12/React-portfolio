import React from "react";

import "./Header.css";



const styles = {

  headingStyle: {
    fontSize: "90px",
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Pia Paulino</h1>
    </header>
  );
}

export default Header;