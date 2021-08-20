import React from "react";

import "./about.css";

export default function About() {
  return (
    <div>
      <h1>Welcome!</h1>

      <img
        class="pic"
        src="https://github.com/Maripia12/React-portfolio/blob/main/src/assets/me.png?raw=true"
        width="300"
      />

      <p class="me">
        I'm a team-minded and motivated software
        engineering graduate from Georgia Tech Coding Bootcamp Program looking
        for a development position. I have the ability and willingness to innovate and
        learn new technologies. I can also effectively self-manage during
        independent projects as well as collaborate as a part of a productive
        team. Prior to attending coding Bootcamp I had completed a 3 week workshop program
        called "SheCodes". The program provided a basic introduction to
        front-end development as well as development tools. My goal moving forward is
        to continue expanding my knowledge on the different coding concepts in
        software development. 
      </p>
    </div>
  );
}
