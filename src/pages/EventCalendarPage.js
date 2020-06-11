import React from 'react'
import Footer from "../components/Footer/Footer"
import Testimonial from '../components/Testimonials/Testimonial'
import { EventsCalendar } from "../components/Events/index"
const EventCalendarPage = () => {
    return (
        <div id="wrapper">

            <EventsCalendar />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default EventCalendarPage