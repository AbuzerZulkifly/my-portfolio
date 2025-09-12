import React from 'react'

const Footer = ({name}) => {
  return (
    <div className="md:w-[65%] flex flex-col gap-3 ">
      
      <hr className="md:w-full md:mb-3 md:mt-3" />
      <div className='flex md:flex-row flex-col gap-5 justify-between items-center'>
      <div className="flex md:gap-2 gap-5 ">
        <span>&copy;</span>
        <span>2024</span>
        <span>{name}.</span>
        <span>All Rights Reserved</span>
      </div>
        <div className='flex justify-between gap-5 footer-span'>
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer