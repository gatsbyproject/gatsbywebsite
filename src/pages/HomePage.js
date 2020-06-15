import React from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Visual, MatchBlock, TagBar } from '../components/Visual/index'
import Testimonial from '../components/Testimonials/Testimonial'
import { VirtualEvents } from "../components/Events/index"
const HomePage = () => {

    return (
        <div id="wrapper">
            <div className="top-container style01">
                <Header image='/images/header/logo-white.svg' />
                <Visual />
            </div>
            <MatchBlock />

            <TagBar />
            <VirtualEvents />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    )
}


export default HomePage
