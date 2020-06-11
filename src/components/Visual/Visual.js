import React from 'react'
import Slider from "react-slick";
import { SamplePrevArrow, SampleNextArrow } from '../slider'
const quotes = [
    'True love doesn’t have a happy ending  It doesn’t have an ending at all 1',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 2',
    'True love doesn’t have a happy ending. It doesn’t have an ending at all 3',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 4',
    'True love doesn’t have a happy ending. It doesn’t have an ending at all 5',
    'True love doesn’t mean being inseparable. It means being separate and nothing changes. 6',
    // 'True love doesn’t have a happy ending. It doesn’t have an ending at all 7',
    // 'True love doesn’t mean being inseparable. It means being separate and nothing changes. 8',
]
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
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <div className="visual-area">
                <div className="container1">
                    <div className="visual-caption">
                        <h1>Find your soulmate.</h1>
                        <strong className="sub-title">Get matched with your perfect date during one of our vetted virtual speed dating events.</strong>
                        <p>MatchDate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing Event Hosts and state of the art technology.</p>
                        <p>MatchDate is THE virtual speed dating platform for our generation and the world we live in NOW.</p>
                        <a href="#" className="btn">Find Out More</a>
                    </div>
                </div>
            </div>
            <div className="container2">

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
            </div>

            <div className="visual-image">
                <img src="/images/img10.png" alt="image-description" />
            </div>





        </>
    )
}

export default Visual
