import React from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Testimonial from '../components/Testimonials/Testimonial'
import { VirtualEvents } from "../components/Events/index"

const AboutPage = () => {
    return (
        <div id="wrapper">
            <div className="top-container style01">
                <Header image="/images/header/logo-white.svg" />
                <About />
            </div>
            <VirtualEvents />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    )
}

export default AboutPage
