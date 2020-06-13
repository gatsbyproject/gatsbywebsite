import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'gatsby'
import { SamplePrevArrow, SampleNextArrow } from '../slider'
const quotes = [
    'When I saw you, I fell in love, and you smiled because you knew - William Shakespeare',
    "If I had my life to do over again, I'd find you sooner - Kobi Yamada",
    'To the world you may be one person, but to one person you are the world - Bill Wilson',
    'You have a place in my heart no one else could ever have - F. Scott Fitzgerald'
]
const isClient = typeof window !== 'undefined';
const MOBILE_BREAKPOINT = 1023;
const MOBILE_BREAKPOINT1 = 500;
const Visual = () => {
    const settings_3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        arrows: true,
        className: 'quote-slider',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
    };
    const settings_2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        className: 'quote-slider',
        variableWidth: true,
        arrows: false,
    };
    const settings_1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'quote-slider',
        variableWidth: true,
        arrows: false,
    };
    const [viewportWidth, setWidth] = useState(0)
    useEffect(
        () => {
            if (isClient) {
                updateWindowDimensions();
                window.addEventListener('resize', updateWindowDimensions);
            }
            return () => {
                if (isClient) window.removeEventListener('resize', updateWindowDimensions);
            }
        }, []
    )
    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    }
    const isMobile = Boolean(viewportWidth <= MOBILE_BREAKPOINT);
    const isMobile1 = Boolean(viewportWidth <= MOBILE_BREAKPOINT1);
    return (
        <>
            <div className="visual-area">
                <div className="container1">
                    <div className="visual-caption">
                        <h1>Find your soulmate.</h1>
                        <strong className="sub-title">Get matched with your perfect date during one of our vetted virtual speed dating events.</strong>
                        <p>MatchDate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing Event Hosts and state of the art technology.</p>
                        <p>MatchDate is THE virtual speed dating platform for our generation and the world we live in NOW.</p>
                        <Link to="/about" className="btn">Find Out More</Link>
                    </div>
                </div>
            </div>
            <div className="container2">
                {isMobile ? isMobile1 ? (
                    <Slider {...settings_1}>
                        {
                            quotes.map((q1, i) => {
                                return (
                                    <div className="slide" key={i} style={{ width: 300 }}>

                                        <blockquote>
                                            <span className="icon-quote"></span>
                                            <q>“{q1}”</q>
                                        </blockquote>
                                    </div>

                                )
                            })
                        }
                    </Slider>
                ) : (
                        <Slider {...settings_2}>
                            {
                                quotes.map((q1, i) => {
                                    return (
                                        <div className="slide" key={i} style={{ width: 300 }}>

                                            <blockquote>
                                                <span className="icon-quote"></span>
                                                <q>“{q1}”</q>
                                            </blockquote>
                                        </div>

                                    )
                                })
                            }
                        </Slider>
                    ) : (
                        <Slider {...settings_3}>
                            {
                                quotes.map((q1, i) => {
                                    return (
                                        <div className="slide" key={i} style={{ width: 300 }}>

                                            <blockquote>
                                                <span className="icon-quote"></span>
                                                <q>“{q1}”</q>
                                            </blockquote>
                                        </div>

                                    )
                                })
                            }
                        </Slider>
                    )
                }
            </div>

            <div className="visual-image">
                <img src="/images/img10.png" alt="image-description" />
            </div>





        </>
    )
}

export default Visual
