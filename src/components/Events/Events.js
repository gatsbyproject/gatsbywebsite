import React, { useEffect, useState, Fragment, useRef } from 'react'
import { Link } from "gatsby"
import Header from '../Header/Header'
import { Player, BigPlayButton } from 'video-react'
import "./video-react.css";
import { connect } from "react-redux";
import { getEvents } from '../../redux/Events/events.action'
import Event from './Event'
const Events = (props) => {
    const [events, getEvents] = useState([])
    const vidRef = useRef(null)
    const [show, setShow] = useState(false)
    var id = localStorage.getItem('eventId')
    const [idShow, setId] = useState(false)
    useEffect(() => {
        if (props.id) {
            const allEvents = props.event.events.filter(e1 => e1.host.id === props.id)
            getEvents(allEvents)
        } else if (props.hostID) {
            const allEvents = props.event.events.filter(e1 => e1.host.id === props.hostID).map(e1 => {
                const eventIid = e1.event.filter(e2 => e2.id === props.eventID)
                console.log(eventIid, 'kkkk')
                e1["event"] = eventIid
                return e1
            })

            getEvents(allEvents)
        } else {
            getEvents(props.event.events)
        }
        localStorage.clear()
        setId(false)
    }, [])
    console.log(events)
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
            <div id="wrapper">

                <Header image="/images/header/logo.svg" />
                <main className="main">
                    <section className="block-event">
                        <div className="container1">
                            {
                                (events.length === 0 ?
                                    (
                                        <div>Loading</div>
                                    ) : idShow ? (<Event iD={id} />) :
                                        events.map((e1, e) => {
                                            return (
                                                <Fragment key={e}>
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
                                                                            fluid={false}
                                                                            width={'100%'}
                                                                            height={255}
                                                                            poster={`${e1.host.hostProfile.introVideo.thumbnail}`}
                                                                            src={`${e1.host.hostProfile.introVideo.video}`}
                                                                        >
                                                                            <BigPlayButton position="center" />
                                                                        </Player>
                                                                    </div>
                                                                ) :
                                                                (
                                                                    <div></div>
                                                                )
                                                            )
                                                        }
                                                        <p>{e1.host.hostProfile.description}</p>
                                                        <ul className="list-detail">
                                                            <li>
                                                                <strong className="title">Home City:</strong>
                                                                <span className="text">{e1.host.hostProfile.homeCity.description}</span>
                                                            </li>
                                                        </ul>

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
                                                                    <article className="article-card" key={e2.id}>
                                                                        <div className="image-holder">
                                                                            <a href="#"><img src={e2.headerImage} alt="image description" style={{ height: '13em' }} /></a>
                                                                        </div>
                                                                        <div className="text-holder">
                                                                            <h2 className="h3"><Link to={`/hostEvent/${e2.id}`} >{e2.title}</Link></h2>
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
            </div>
        </>

    )
}
const mapStatetoProps = state => {
    return {
        event: state.event
    };
};
export default connect(mapStatetoProps, { getEvents })(Events)


// onClick={() => { localStorage.setItem("eventId", e2.id); setId(true) }}
