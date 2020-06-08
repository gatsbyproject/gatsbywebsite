import React from 'react'
import Footer from "../components/Footer/Footer"
import { EventHostVisual, FeaturesMatchDate } from "../components/Events/index"
const EventVisualPage = () => {
    return (
        <div id="wrapper">
            <EventHostVisual />
            <FeaturesMatchDate />
            <Footer />
        </div>
    )
}

export default EventVisualPage
