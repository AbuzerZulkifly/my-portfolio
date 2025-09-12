import NavbarComponent from "../Components/Navbar/NavbarComponent.jsx";
import HeroComponent from "../Components/Hero/HeroComponent.jsx";
import AboutMe from "../Components/About/AboutMe.jsx";
import Services from "../Components/Services/Services.jsx";
import Skills from "../Components/Skills/Skills.jsx";
import ContactMe from "../Components/Contact/ContactMe.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import React, { useState } from 'react'

const MainPage = () => {

  return (
    <div className="flex flex-col">
        <NavbarComponent />
      <div className="flex  flex-col items-center gap-10 md:gap-30">
        <div>
        <HeroComponent name="Abuzer Zulkifly" job="FullStack Developer" />
        </div>
        <div>
        <AboutMe name="Abuzer Zulkifly"/>
        </div>
        <div className="flex flex-col md:gap-10 items-center">
        <Skills />
        <Services />
        </div>
        <ContactMe />
        <Footer name="Abuzer Zulkifly" />
      </div>
    </div>
  )
}

export default MainPage