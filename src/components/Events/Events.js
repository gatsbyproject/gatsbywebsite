import React, { useEffect, useState, Fragment, useRef } from 'react'
import Header from '../Header/Header'
import axios from '../../../config/axios'
import { Player, BigPlayButton } from 'video-react'
import "./video-react.css";
const Events = () => {
    const [events, getEvents] = useState([])
    const vidRef = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const EventApi = async () => {
            const res = await axios.get('/getEvents')
            getEvents(res.data.events)
        }
        EventApi()
    }, [])
    console.log(vidRef)
    return (
        <>
            <Header image="/images/header/logo.svg" />
            <main className="main">
                <section className="block-event">
                    <div className="container1">
                        {
                            (events.length === 0 ?
                                (
                                    <div>Loading</div>
                                ) :
                                events.map(e1 => {
                                    return (
                                        <Fragment key={e1.id}>
                                            <div className="col-left">
                                                <div className="profile-info">
                                                    <div className="image-holder">
                                                        <img src={e1.host.avatar} alt="image description" />
                                                    </div>
                                                    <blockquote>
                                                        <cite>{`${e1.host.firstName} ${e1.host.lastName}`}</cite>
                                                        <q>&ldquo;{`${e1.host.hostProfile.quote}`}&rdquo;</q>
                                                    </blockquote>
                                                </div>
                                                {
                                                    (e1.host.hostProfile.introVideo ?
                                                        (
                                                            <div className="video-area">
                                                                <Player
                                                                    poster={`${e1.host.hostProfile.introVideo.thumbnail}`}
                                                                    src={`${e1.host.hostProfile.introVideo.video}`}
                                                                >
                                                                    <BigPlayButton position="center" className="btn-play" />
                                                                </Player>
                                                            </div>
                                                        ) :
                                                        (
                                                            <div></div>
                                                        )
                                                    )
                                                }

                                                <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                                <ul className="list-detail">
                                                    <li>
                                                        <strong className="title">Home City:</strong>
                                                        <span className="text">{e1.host.timezone}</span>
                                                    </li>
                                                </ul>
                                                <a href="#" className="btn btn-secondary">Try A MatchDate Event</a>
                                            </div>


                                            <div className="col-right">
                                                <h1 className="h2">Events by {`${e1.host.firstName} ${e1.host.lastName}`}:</h1>
                                                <article className="article-card">
                                                    <div className="image-holder">
                                                        <a href="#"><img src="/images/events/img2.jpg" alt="image description" /></a>
                                                    </div>
                                                    <div className="text-holder">
                                                        <h2 className="h3"><a href="#">Master Dating for Travellers</a></h2>
                                                        <p>"Dating for the world travaller"</p>
                                                        <ul className="list-detail">
                                                            <li><i className="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                                            <li><i className="icon icon-location"></i>Chicago, IL</li>
                                                        </ul>
                                                        <div className="more-info">
                                                            <span className="tickets">3 Tickets Left</span>
                                                            <span className="duration">90 mins</span>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="article-card">
                                                    <div className="image-holder">
                                                        <a href="#"><img src="/images/events/img4.jpg" alt="image description" /></a>
                                                    </div>
                                                    <div className="text-holder">
                                                        <h2 className="h3"><a href="#">Master Dating for Travellers</a></h2>
                                                        <p>"Dating for the world travaller"</p>
                                                        <ul className="list-detail">
                                                            <li><i className="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                                            <li><i className="icon icon-location"></i>Chicago, IL</li>
                                                        </ul>
                                                        <div className="more-info">
                                                            <span className="tickets">3 Tickets Left</span>
                                                            <span className="duration">90 mins</span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            )
                        }

                        {/* <div className="col-left">
                            <div className="profile-info">
                                <div className="image-holder">
                                    <img src="/images/events/img-girl.jpg" alt="image description" />
                                </div>
                                <blockquote>
                                    <cite>Host Name</cite>
                                    <q>“Some really great quote"</q>
                                </blockquote>
                            </div>
                            <div className="video-area">
                                <a href="#" className="btn-play"><i className="icon icon-play"></i></a>
                                <img src="/images/events/img1.jpg" alt="image description" />
                            </div>
                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            <ul className="list-detail">
                                <li>
                                    <strong className="title">Home City:</strong>
                                    <span className="text">Chicago, IL</span>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-secondary">Try A MatchDate Event</a>
                        </div>
                        <div className="col-right">
                            <h1 className="h2">Events by Jamie:</h1>
                            <article className="article-card">
                                <div className="image-holder">
                                    <a href="#"><img src="/images/events/img2.jpg" alt="image description" /></a>
                                </div>
                                <div className="text-holder">
                                    <h2 className="h3"><a href="#">Master Dating for Travellers</a></h2>
                                    <p>"Dating for the world travaller"</p>
                                    <ul className="list-detail">
                                        <li><i className="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                        <li><i className="icon icon-location"></i>Chicago, IL</li>
                                    </ul>
                                    <div className="more-info">
                                        <span className="tickets">3 Tickets Left</span>
                                        <span className="duration">90 mins</span>
                                    </div>
                                </div>
                            </article>
                            <article className="article-card">
                                <div className="image-holder">
                                    <a href="#"><img src="/images/events/img4.jpg" alt="image description" /></a>
                                </div>
                                <div className="text-holder">
                                    <h2 className="h3"><a href="#">Master Dating for Travellers</a></h2>
                                    <p>"Dating for the world travaller"</p>
                                    <ul className="list-detail">
                                        <li><i className="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                        <li><i className="icon icon-location"></i>Chicago, IL</li>
                                    </ul>
                                    <div className="more-info">
                                        <span className="tickets">3 Tickets Left</span>
                                        <span className="duration">90 mins</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                     */}
                    </div>
                    <div className="popup-holder">
                        <div className="popup-frame">
                            <div className="popup-wrap">
                                <div className="box-wrap">
                                    <header className="head">
                                        <h2>Message Jamie:</h2>
                                        <a href="#" className="btn-close"><i className="icon icon-close"></i></a>
                                    </header>
                                    <form action="#" className="form-message">
                                        <div className="field">
                                            <div className="field">
                                                <label htmlFor="email">Your Email:</label>
                                                <input type="email" id="email" />
                                            </div>
                                            <div className="field">
                                                <label htmlFor="message">Message:</label>
                                                <textarea id="message"></textarea>
                                            </div>
                                            <input type="submit" className="btn" value="Try A MatchDate Event" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Events
