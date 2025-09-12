import React from 'react'
import ProPic from '../../assets/ProPic.jpg';

const AboutMe = ({name}) => {
  return (

     <div id="about" className='flex flex-col justify-center items-center mt-5 md:h-screen'>
    <div  className="flex flex-col items-center gap-1 md:w-[1008px] w-full justify-center">
      
      <div className='flex items-center gap-5' >
        <div><hr className='heading-line ' /></div>
        <p className="md:text-3xl text-center text-lg">About Me</p>
        <div><hr className='heading-line' /></div>
      </div>

      <div className="">
      <div className='flex flex-col items-center justify-center gap-6'>
        <div >
          <img src={ProPic} className="w-60 h-auto " alt="" /> 
        </div>
        <div className="flex justify-center">
          <p className="md:text-[24px] md:px-0 px-3 text-lg w-[90%] ">
            Hey there! I'm {name}, a passionate FullStack Developer
            based in Sri Lanka. With a knack for crafting seamless web
            applications, I thrive on turning ideas into reality through code.
            My journey in the tech world has equipped me with a diverse skill
            set, allowing me to tackle challenges head-on and deliver innovative
            solutions.
            <br /> <br />
            When I'm not coding, you can find me exploring the latest tech
            trends or indulging in my love for the great outdoors. I Look
            forward to meet amazing people like you and create something amazing
            together!
          </p>
         </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default AboutMe