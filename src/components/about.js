import React from "react";
import Nav from "./nav";
import Me from "../assets/me.png";
import Footer from "./footer";

const About = () => {

  return (
    <div className="">

    <Nav/>
    <div className='md:flex md:justify-around md:pt-6 md:pb-6 md:px-14 lg:px-[15%]'>
    {/* About me text blurb */}
    <div className='flex justify-end pr-12 pt-4 md:order-2 md:justify-center md:text-right md:pr-0 lg:justify-end'>
      <div className="flex flex-col items-end w-5/6 lg:w-full">
          <p className="text-base tracking-widest text-[#2B2A64]">About Me</p>
          <p className="w-full mb-1 text-xs tracking-wider text-right text-[#2B2A64] md:h-auto md:pb-4 lg:text-sm lg:w-5/6"> My name is Elizabeth and I graduated from the University of Richmond
          in May of 2021. Born and raised in Naples, Florida I am a diehard warm
          weather lover. I am also an avid runner and tennis player. In my spare
          time I also LOVE to bake, but my one rule is I will only bake
          something I will eat! I graduated with a BS in Biology on the pre-med
          track, however, recently I have found myself being pulled in a
          different direction. With a passion for learning and an interest in
          coding I decided to embark on a new journey and jump into the world of
          coding. Through this Fullstack Coding Bootcamp Course I have gained
          the skills necessary to succeed in this field. Here you will find some
          of the projects I've curated with all that I've learned!</p>
      </div>
    </div>
    {/* me img */}
    <img className=' rounded h-[400px] w-full object-cover border-y-8 border-[#2B2A64] md:order-1 md:w-[337px] md:h-[320px] md:border-0 lg:w-[440px] lg:h-[418px]' src={Me} alt="me" />
    </div>



{/* footer */}
<Footer />
</div>
);
};

export default About;
