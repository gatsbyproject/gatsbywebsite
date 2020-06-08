import React from 'react'
import Slider from "react-slick";
const quotes = [
    'True love doesn’t have a happy ending  It doesn’t have an ending at all 1',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 2',
    'True love doesn’t have a happy ending. It doesn’t have an ending at all 3',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 4',
    'True love doesn’t have a happy ending. It doesn’t have an ending at all 5',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 6',
    'True love doesn’t have a happy ending. It doesn’t have an ending at all 7',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 8',
]
const Visual = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        className: 'quote-slider'
    };
    return (
        <>
            <div className="visual-area">
                <div className="container">
                    <div className="visual-caption">
                        <h1>Find your soulmate.</h1>
                        <strong className="sub-title">Get matched with your perfect date during one of our vetted virtual speed dating events.</strong>
                        <p>MatchDate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing Event Hosts and state of the art technology.</p>
                        <p>MatchDate is THE virtual speed dating platform for our generation and the world we live in NOW.</p>
                        <a href="#" className="btn">Find Out More</a>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {
                    quotes.map((q1, i) => {
                        return (
                            <div className="slide" key={i}>
                                <blockquote>
                                    <span className="icon-quote"></span>
                                    <q>“{q1}”</q>
                                </blockquote>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* <div class="quote-slider">
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending  It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
                <div class="slide active">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t mean being inseparable. It means being separate and nothing changes.”</q>
                    </blockquote>
                </div>
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending. It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending. It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending. It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending. It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
                <div class="slide">
                    <blockquote>
                        <span class="icon-quote"></span>
                        <q>“True love doesn’t have a happy ending. It doesn’t have an ending at all”</q>
                    </blockquote>
                </div>
            </div>
             */}
            <div className="visual-image">
                <img src="/images/img10.png" alt="image-description" />
            </div>
        </>
    )
}

export default Visual
