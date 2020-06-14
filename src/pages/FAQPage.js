import React from 'react'
import Footer from "../components/Footer/Footer"
import FrequentlyAskedQues from '../components/FrequentlyAskedQues/FrequentlyAskedQues'
import Testimonial from '../components/Testimonials/Testimonial'
const FAQPage = () => {
    return (
        <div id="wrapper">
            <FrequentlyAskedQues />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    )
}

export default FAQPage
