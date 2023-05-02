import React from "react";
import Nav from "./nav";
import Footer from "./footer"
const Contact = () => {
  return (
    <div className="">
      {/* navbar */}
      <Nav />

      {/* coder-in-chief checkbox blurb */}
      <div className="flex flex-col items-center justify-center pt-3 lg:my-6">
        <div className="flex flex-col justify-start">
          <p className="text-[#2B2A64] font-normal">Contact</p>
          <p className="text text-[#BF4D49] font-bold text-3xl pt-1 md:text-5xl">
            Elizabeth Lopez-Lopez
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex pt-3 md:items-center">
            <p className="text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl">
              Email:{" "}
              <a href="mailto:elizabethlopez0108@gmail.com">
                elizabethlopez0108@gmail.com
              </a>
            </p>
          </div>
          <div className="flex pt-3 md:items-center">
            <p className="text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl">
              Github{" "}
              <a
                href="https://github.com/elizabeth189"
                target="_blank"
                rel="noreferrer"
              >
                @elizabeth189
              </a>
            </p>
          </div>
          <div className="flex pt-3 md:items-center">
            <p className="text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl">
              LinkedIn{" "}
              <a
                href="https://www.linkedin.com/in/elizabeth-lopez-lopez-345b3b14a/"
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;
