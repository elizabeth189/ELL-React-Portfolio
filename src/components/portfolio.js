import React from "react";
import Nav from "./nav";
import codingquiz from "../assets/codingquiz.PNG";
import showmesongs from "../assets/showmesongs.png";
import weather from "../assets/weatherDash.PNG";
// import readmegen from "../assets/readmegen";
// import scheduler from "../assets/scheduler";
// import meals from "../assets/meals";
import proj3 from "../assets/proj3.PNG";
import Footer from "./footer"


const Portfolio = () => {
  return (
    // container for entire page
    <div className="">
      {/* navbar */}
      <Nav/>
      <div className="mx-4 md:px-4 lg:flex lg:justify-center lg:w-full">

<div className="lg:w-full lg:max-w-[1445px] ">

  <div className="md:flex md:w-full lg:px-24 lg:pb-8">
    {/* proj 1 */}
    <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
        {/* hidden until md */}
        <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 lg:flex lg:grow lg:justify-end">
          <img
            className=" w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[723px]"
            src={codingquiz}
            alt="codingquiz"
          />
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 md:px-2 md:justify-start lg:max-w-lg">

          <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
            JS Coding Quiz{" "}
          </p>

          <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
          <a
            href="https://github.com/elizabeth189/ELLCodingQuiz"
            target={"_blank"}
            rel="noreferrer"
          > <h3>JS Coding Quiz</h3>
          </a>
          </p>

        </div>
    </div>
  </div>

  <div className="md:flex md:w-full lg:px-24 lg:pb-8">
    {/* proj 2 */}
    <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
      {/* hidden until md */}
      <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 order-2 lg:flex lg:grow lg:justify-start">
          <img
            className="  w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[723px]"
            src={showmesongs}
            alt="showmesongs"
          />
        </div>

      <div className="flex flex-col items-center justify-center md:justify-start md:w-1/2 md:px-2 lg:max-w-lg">
        
        <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
          Group Project 1
        </p>


        <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
          {" "}
          <a
            href="https://kurtmj93.github.io/show-me-songs/"
            target={"_blank"}
            rel="noreferrer"
          >
          </a>
        </p>

      </div>
    </div>
  </div>

  <div className="md:flex md:w-full lg:px-24 lg:pb-8">
    {/* weather */}
    <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
        {/* hidden until md */}
        <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 lg:flex lg:grow lg:justify-end">
          <img
            className="w-full object-cover lg:w-full lg:max-w-[723px]"
            src={weather}
            alt="weather"
          />
        </div>

      <div className="flex flex-col items-center justify-center md:justify-start md:w-1/2 md:px-2 lg:max-w-lg">

        <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
          Wather App
        </p>


        <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
        <a
              href="https://elizabeth189.github.io/ELLWeatherDash/"
              target={"_blank"} rel="noreferrer"
            >
              <h3>Weather Info Today</h3>
            </a>
        </p>

      </div>
    </div>
  </div>

  <div className="md:flex md:w-full lg:px-24 lg:pb-8">
    {/* proj 1 */}
    <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
        {/* hidden until md */}
        <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 lg:flex lg:grow lg:justify-end">
          <img
            className=" w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[723px]"
            src={proj3}
            alt="proj3"
          />
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 md:px-2 md:justify-start lg:max-w-lg">

          <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
            GroupProject{" "}
          </p>


          <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
          <a
            href="https://whispering-temple-16541.herokuapp.com/"
            target={"_blank"}
            rel="noreferrer"
          > <h3>Built with React</h3>
          </a>
          </p>

        </div>
    </div>
  </div>
  </div>
</div>

{/* footer */}
<Footer />
</div>
);
};

export default Portfolio;

