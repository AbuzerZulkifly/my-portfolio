import React from 'react'
import Css from '../../assets/css.jpg';
import Javascript from '../../assets/javascript.png';
import reactjs from '../../assets/reactjs.jpg';
import nodejs from '../../assets/nodejs.png';
import expressjs from "../../assets/expressjs.png";
import mongodb from '../../assets/mongodb.jpg';
import tailwindcss from '../../assets/tailwind.jpeg';
import Html from '../../assets/html.jpg';
const Skills = () => {
  return (
    <div id='projects' className='flex flex-col items-center gap-3 md:w-[1080px] mt-10'>
      
          <div className="flex items-center gap-5 mt-5">
            <div><hr className='heading-line' /></div>
            <div><h1 className="md:text-3xl text-center text-lg">My Skills</h1></div>
            <div><hr className='heading-line' /></div>
          </div>
    
       <div className="img-holder">
            <div className="">
              <img src={Html} alt="" />
            </div>
            <div className="">
              <img src={Css} alt="" />
            </div>
            <div className="">
              <img src={Javascript} alt="" />
            </div>
            <div className="">
              <img src={reactjs} alt="" />
            </div>
            <div className="">
              <img src={nodejs} alt="" />
            </div>
            <div className="">
              <img src={expressjs} alt="" />
            </div>
            <div className="">
              <img src={mongodb} alt="" />
            </div>
            <div className="">
              <img src={tailwindcss} alt="" />
            </div>
       </div>
    </div>
  )
}

export default Skills