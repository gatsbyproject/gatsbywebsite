import React from 'react'
import Footer from "../components/Footer/Footer"
import Testimonial from '../components/Testimonials/Testimonial'
import { EventsHostDirectory } from "../components/Events/index"
const EventHost = () => {
    return (
        <div id="wrapper">
            <EventsHostDirectory />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    )
}

export default EventHost
