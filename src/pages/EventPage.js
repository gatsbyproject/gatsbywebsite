import React from 'react'
import Footer from "../components/Footer/Footer"
import Testimonial from '../components/Testimonials/Testimonial'
import { Event } from "../components/Events/index"
const EventPage = (props) => {
    console.log(props)
    return (
        <div id="wrapper">
            <Event />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default EventPage
