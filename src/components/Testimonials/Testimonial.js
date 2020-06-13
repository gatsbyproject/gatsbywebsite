import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { SamplePrevArrow, SampleNextArrow } from '../slider'
const testimonials = [
    {
        stars: 3,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '1'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '2'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '3'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '4'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '5'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: 'Sean Parks'
    },
]
const isClient = typeof window !== 'undefined';
const MOBILE_BREAKPOINT = 750;
const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'slides',
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
    return (
        <>
            <main className="main">
                <section className="block-testimonials">
                    <h2 className="h1">True Love <span className="text-pink">Stories</span></h2>
                    <div className="container">
                        {isMobile ? (
                            <Slider {...settings1}>
                                {
                                    testimonials.map((t1, i) => {
                                        var array = [...Array(t1.stars).keys()]
                                        return (
                                            <div className="slide" key={i}>
                                                <div className="card-holder">
                                                    <ul className="list-ratings">
                                                        {
                                                            array.map(a1 => {
                                                                return (
                                                                    <li className="active" key={a1}><i className="icon icon-star"></i></li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <blockquote>
                                                        <q>{t1.quote}</q>
                                                        <cite>- {t1.name}</cite>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        ) : (
                                <Slider {...settings}>
                                    {
                                        testimonials.map((t1, i) => {
                                            var array = [...Array(t1.stars).keys()]
                                            return (
                                                <div className="slide" key={i}>
                                                    <div className="card-holder">
                                                        <ul className="list-ratings">
                                                            {
                                                                array.map(a1 => {
                                                                    return (
                                                                        <li className="active" key={a1}><i className="icon icon-star"></i></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <blockquote>
                                                            <q>{t1.quote}</q>
                                                            <cite>- {t1.name}</cite>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            )
                        }
                    </div>
                    <a href="#" className="btn">Tell Us Your Story</a>
                </section>
            </main >


        </>
    )
}

export default Testimonial


