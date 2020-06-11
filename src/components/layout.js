import React from "react"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import About from "./About/About"
import Testimonial from './Testimonials/Testimonial'
import { EventsHostDirectory, VirtualEvents } from "./Events/index"

// import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div id="wrapper">
      <div className="top-container style01">
        <Header image="/assests/images/header/logo-white.svg" />
        <About />
      </div>
      <VirtualEvents />
      <Testimonial />
      <EventsHostDirectory />
      <Footer />
    </div>
  )
}
export default Layout
