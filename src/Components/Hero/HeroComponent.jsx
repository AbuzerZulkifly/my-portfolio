import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const HeroComponent = ({name, job}) => {
  return (
    <div id="home" className='flex flex-col justify-center items-center md:h-screen h-[90vh] md:mt-6'>
    <div  className="flex flex-col items-center justify-center md:gap-7 gap-5">
      <p className="md:text-[3.5rem] md:w-[1008px] text-center text-lg w-[369px]   ">
        <span className='name-span'>I'm {name},</span> {job} Based in <span className='gradient-text-1'>Sri Lanka</span>
      </p>
      <p className="md:text-xl text-center md:w-[65%] text-sm w-[369px] ">
        As a {job} who's experinced in building applications to
        suit your needs, I'm always looking for new challenges and opportunities
        to grow and provide my best services as a developer.
      </p>
    <div className='flex md:gap-5 gap-2'>
     <AnchorLink offset={50} href='#contact'><button className="btn-connect">Connect With Me</button></AnchorLink>
      <a href="resume.pdf" download><button className="btn-resume">See Resume</button></a>
    </div>
  </div>
  </div>
  );
}

export default HeroComponent