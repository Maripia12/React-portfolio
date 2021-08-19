import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <h1>My Projects!</h1>

      <section id="projects" class="projects maingrid">
        <div class="line"></div>
        <div class="container">
          <a
            href="https://mlward639.github.io/Project-One-Sassy-Pets/"
            class="flex-item sassyPets"
          >
            <div>
              <h3>Sassy Pets Project</h3>
              <span>HTML/CSS/JavaScript/API</span>
            </div>
          </a>

          <a
            href="https://maripia12.github.io/Work-day-scheduler/"
            class="flex-item calender"
          >
            <div>
              <h3>Work Day Scheduler</h3>
              <span>jQuery</span>
            </div>
          </a>

          <a
            href="https://maripia12.github.io/Code-Quiz/"
            class="flex-item quiz"
          >
            <div>
              <h3>Code-Quiz</h3>
            </div>
          </a>

          <a
            href="https://sleepy-plains-49235.herokuapp.com/"
            class="flex-item express"
          >
            <div>
              <h3>Express Note-Taker</h3>
              <span>Express.js/JSON</span>
            </div>
          </a>

          <a
            href="https://github.com/Maripia12/E-Commerce-Back-End"
            class="flex-item express1"
          >
            <div>
              <h3>E-Commerce Back-End</h3>
              <span>Express.js/API/Sequelize/MySQL database</span>
            </div>
          </a>
        </div>
      </section>

      <p></p>
    </div>
  );
}
