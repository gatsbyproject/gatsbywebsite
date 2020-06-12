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
            const events = []
            let count = 1
            res.data.events.map(d1 => {
                const host = {}
                if (count == 1) {
                    host['host'] = d1.host
                    const event = d1
                    delete event.host
                    // console.log(event)
                    host['event'] = [event]
                    events.push(host)
                } else {
                    const check = events.find(f1 => f1.host.id === d1.host.id)
                    if (check) {
                        events.map(e1 => {
                            if (e1.host.id === d1.host.id) {

                                const event = { ...d1 }
                                delete event.host
                                e1.event.push(event)
                                // console.log(e1.event.length)
                            }
                        })
                    } else {
                        host['host'] = d1.host
                        const event = { ...d1 }
                        delete event.host
                        // console.log(event)
                        host['event'] = [event]
                        events.push(host)
                    }
                }
                count++
                // console.log(events.length)
            })
            console.log(events, '3')
            console.log(events.length)
            getEvents(events)
        }
        EventApi()
    }, [])
    console.log(vidRef)
    const formatAMPM = (date) => {
        var date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

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
                                                {
                                                    e1.event.map(e2 => {

                                                        const startTime = formatAMPM(e2.eventStartTime)
                                                        const endTime = formatAMPM(e2.eventEndTime)
                                                        const monthNames = ["January", "February", "March", "April", "May", "June",
                                                            "July", "August", "September", "October", "November", "December"
                                                        ];
                                                        const date = new Date(e2.eventStartTime)
                                                        const year = date.getUTCFullYear()
                                                        const month = monthNames[date.getUTCMonth() + 1]
                                                        const datee = date.getUTCDate()
                                                        var dif = (new Date(e2.eventEndTime) - new Date(e2.eventStartTime)) / 1000 / 60;
                                                        return (
                                                            <article className="article-card">
                                                                <div className="image-holder">
                                                                    <a href="#"><img src={e2.headerImage} alt="image description" /></a>
                                                                </div>
                                                                <div className="text-holder">
                                                                    <h2 className="h3"><a href="#">{e2.title}</a></h2>
                                                                    <p>{e2.slogan}</p>
                                                                    <ul className="list-detail">
                                                                        <li><i className="icon icon-calendar"></i>{`${month}, ${datee}th, ${year} at ${startTime}-${endTime}`}</li>
                                                                        <li><i className="icon icon-location"></i>
                                                                            {e1.host.timezone.replace('/', ', ')}
                                                                        </li>
                                                                    </ul>
                                                                    <div className="more-info">
                                                                        <span className="tickets">3 Tickets Left</span>
                                                                        <span className="duration">{dif} mins</span>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        )
                                                    })
                                                }
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
