import React from 'react'
import Header from '../Header/Header'

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
const TestimonialsSecond = () => {
    return (
        <>

            <div className="top-container style03">
                <Header image="/images/header/logo-white.svg" />
                <div className="visual-area">
                    <div className="container1">
                        <div className="visual-caption">
                            <h1>Our Clients Find Love On MatchDate</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main className="main">
                <div className="testimonials-section">
                    <div className="container1">
                        <div className="testimonials-block-holder">
                            {
                                testimonials.map((t1, i) => {
                                    var array = [...Array(t1.stars).keys()]
                                    return (
                                        <div className="block">
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
                        </div>
                        <span className="btn-holder">
                            <a href="#" className="btn btn-secondary">Tell Us Your Story</a>
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TestimonialsSecond