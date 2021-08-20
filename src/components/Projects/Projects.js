import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <h1>My Projects!</h1>

      <section id="projects" class="projects maingrid">
        <div class="line"></div>
        <div class="container">
          <img
            class="project1"
            src="https://github.com/Maripia12/portfolio-demo/blob/main/assets/images/project-screenshot.png?raw=true"
            width="600"
          ></img>
          <a
            href="https://mlward639.github.io/Project-One-Sassy-Pets/"
            class="flex-item sassyPets"
          >
            <div>
              <h3>Sassy Pets Project</h3>
              {/* <span>HTML/CSS/JavaScript/API</span> */}
            </div>
          </a>

          <img
            class="project2"
            src="https://github.com/scottydphillips/LEaseGIT/blob/main/public/images/Leasegitlogin.png?raw=true"
            width="510"
            // height="200"
          ></img>
          <a
            href="https://github.com/scottydphillips/LEaseGIT"
            class="flex-item calender"
          >
            <div>
              <h3>LEaseGIT</h3>
              {/* <span>jQuery</span> */}
            </div>
          </a>

          <img
            class="workout-tracker"
            src="https://github.com/Maripia12/Workout-Tracker/blob/main/images/workout.png?raw=true"
            width="510"
          ></img>
          <a
            href="https://salty-caverns-18478.herokuapp.com/?id=6118246d95cc3d001659edb6"
            class="flex-item quiz"
          >
            <div>
              <h3>Workout Tracker</h3>
            </div>
          </a>

          <img
            class="budget-tracker"
            src="https://github.com/Maripia12/Online-Offline-Budget-Tracker/blob/main/Images/budgettracker.png?raw=true"
            width ="520"
          ></img>
          <a
            href="https://evening-badlands-40808.herokuapp.com/"
            class="flex-item express"
          >
            <div>
              <h3>Online-Offline Budget Tracker </h3>
              {/* <span>Express.js/JSON</span> */}
            </div>
          </a>

          <img
            class="note-taker"
            src="https://github.com/Maripia12/Express-Note-Taker/blob/main/Assets/Notetaker.png?raw=true"
            width="520"
          ></img>
          <a
            href="https://sleepy-plains-49235.herokuapp.com/"
            class="flex-item express1"
          >
            <div>
              <h3>Express Note-Taker</h3>
              {/* <span>Express.js/API/Sequelize/MySQL database</span> */}
            </div>
          </a>
        </div>
      </section>

      <p></p>
    </div>
  );
}
