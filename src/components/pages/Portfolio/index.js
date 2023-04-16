import React from "react";
// import codingquiz from "../../../assets/codingquiz.png";
// import showmesongs from "../../../public/showmesongs.png";
// import weather from "../../../assets/weatherDash.PNG";
// import readmegen from "../../../assets/readmegen.PNG";
// import scheduler from "../../../assets/scheduler.PNG";
// import meals from "../../../assets/trackmymeals.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h2 className="project-text">Current Projects:</h2>
      <div className="row">
        <div className="main-project">
          <a
            href="https://kurtmj93.github.io/show-me-songs/"
            target={"_blank"}
            rel="noreferrer"
          >
           {/* <img src={showmesongs}></img> */}
          </a>
          <div className="main-project-text">
            <a
              href="https://github.com/kurtmj93/show-me-songs"
              target={"_blank"}
              rel="noreferrer"
            >
              <p>This was my first group collaboration project!</p>
            </a>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="project2">
          <a
            href="https://github.com/elizabeth189/ELLCodingQuiz"
            target={"_blank"}
            rel="noreferrer"
          >
            {/* <img style={{ margin: 0 }} src={codingquiz}></img> */}
          </a>
          <div>
            <a
              href="https://github.com/elizabeth189/ELLCodingQuiz"
              target={"_blank"} rel="noreferrer"
            >
              <h3>JS Coding Quiz</h3>
            </a>
          </div>
        </div>
        <div className="project3">
          <a
            href="https://github.com/elizabeth189/ELLWeatherDash"
            target={"_blank"} rel="noreferrer"
          >
            {/* <img style={{ margin: 0 }} src={weather}></img> */}
          </a>
          <div>
            <a
              href="https://elizabeth189.github.io/ELLWeatherDash/"
              target={"_blank"} rel="noreferrer"
            >
              <h3>Weather Info Today</h3>
            </a>
          </div>
        </div>
        <div className="project4">
          <a
            href="https://github.com/elizabeth189/ELL-README-Generator"
            target={"_blank"} rel="noreferrer"
          >
            {/* <img style={{ margin: 0 }} src={readmegen}></img> */}
          </a>
          <div>
            <a
              href="https://github.com/elizabeth189/ELL-README-Generator"
              target={"_blank"} rel="noreferrer"
            >
              <h3>README Generator</h3>
            </a>
          </div>
        </div>
        <div className="project5">
          <a
            href="https://github.com/elizabeth189/ELLWorkingCalendar"
            target={"_blank"} rel="noreferrer"
          >
            {/* <img style={{ margin: 0 }} src={scheduler}></img> */}
          </a>
          <div>
            <a
              href="https://elizabeth189.github.io/ELLWorkingCalendar/"
              target={"_blank"} rel="noreferrer"
            >
              <h3>Daily Planner</h3>
            </a>
          </div>
        </div>
        <div className="project6">
          <a
            href="https://github.com/timothymichaelcook/2-track-my-meals"
            target={"_blank"} rel="noreferrer"
          >
            {/* <img style={{ margin: 0 }} src={meals}></img> */}
          </a>
          <div>
            <a
              href="https://sleepy-coast-17586.herokuapp.com/"
              target={"_blank"} rel="noreferrer"
            >
              <h3>Second group project!</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
