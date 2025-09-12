import React from 'react'
import Services_Data from '../../data/services.data.js'

const Services = () => {
  return (
    <div className='flex flex-col items-center md:gap-12 gap-8 md:w-[1080px] w-full mt-10 px-2'>
      <div className="flex items-center md:gap-3 gap-1">
        <hr className="heading-line" />
        <h1 className='md:text-3xl text-xl'>My Services</h1>
        <hr className="heading-line" />
      </div>
    <div className='flex flex-col md:gap-10 gap-5'>
      <div className='service-container grid md:grid-cols-3 items-center md:gap-3 grid-1 gap-5'>
          {Services_Data.map((services, index) => {
            return (
              <div key={index} className="service-container-item">
                
                  <h1 className="">{services.name}</h1>
                  <p className="text-xl text-pretty">{services.description}</p>
                
              </div>
            );
          })}
      </div>
      <div className="acheivement">
            <div className="acheivements">
              <h1 className=''>2+</h1>
              <p>Years of experince</p>
            </div>
              <hr className='w-10 rotate-90 border-0 h-1' />
            <div className="acheivements">
              <h1 className=''>5</h1>
              <p>Projects Completed</p>
            </div>
              <hr className='w-10 rotate-90 border-0 h-1' />
            <div className="acheivements">
              <h1 className=''>10+</h1>
              <p>Impressed Clients</p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Services