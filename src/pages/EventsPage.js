import React from 'react'
import Footer from "../components/Footer/Footer"
import Testimonial from '../components/Testimonials/Testimonial'
import { Events } from "../components/Events/index"
const EventsPage = () => {
    return (
        <div id="wrapper">
            <Events />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default EventsPage
