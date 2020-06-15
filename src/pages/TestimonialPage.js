import React from 'react'
import Footer from "../components/Footer/Footer"
import TestimonialsSecond from '../components/Testimonials/TestimonialsSecond'
import { FeaturesMatchDate } from '../components/Events/index'
import Users from '../components/User/Users'

const TestimonialPage = () => {

    return (
        <div id="wrapper">
            <TestimonialsSecond />
            <FeaturesMatchDate />
            <Footer />
        </div>
    )
}

export default TestimonialPage
