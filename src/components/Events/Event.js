import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../../redux/Events/events.action'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Testimonial from '../Testimonials/Testimonial'
import { Link } from 'gatsby'
import { Player, BigPlayButton } from 'video-react'
import "./video-react.css";

import Select from 'react-select'
const Event = (props) => {
    let thisYear = (new Date()).getFullYear();
    const [event, setEvent] = useState({})
    const [show, setShow] = useState(1)
    const [monthOptions, getMonth] = useState({ options: null, value: null })
    const [yearOptions, getYears] = useState({ options: null, value: null })
    useEffect(
        () => {
            const event = props.event.apiEvents.find(a1 => a1.id === props.id)
            setEvent(event)
            const yearsOptions = [], monthsOptions = []
            for (var i = 0; i <= 60; i++) {
                const Year = thisYear;
                yearsOptions.push({ value: Year, label: Year.toString() })
                thisYear = thisYear + 1
            }
            for (var i = 1; i <= 12; i++) {
                const Month = i
                monthsOptions.push({ value: Month, label: Month.toString() })
            }
            getYears({
                ...yearOptions,
                options: yearsOptions,

            })
            getMonth({
                ...monthOptions,
                options: monthsOptions
            })
        }, []
    )
    console.log(props.event.apiEvents)
    console.log(event)
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
    const startTime = formatAMPM(event.eventStartTime)
    const endTime = formatAMPM(event.eventEndTime)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(event.eventStartTime)
    const year = date.getUTCFullYear()
    const month = monthNames[date.getUTCMonth() + 1]
    const datee = date.getUTCDate()
    var dif;
    dif = (new Date(event.eventEndTime) - new Date(event.eventStartTime)) / 1000 / 60;
    if (dif > 90) {
        dif = (new Date(event.eventEndTime) - new Date(event.eventStartTime)) / 1000 / 60 / 60;
    }
    const monthHandler = (value) => {
        getMonth({
            ...monthOptions,
            value: value
        })
    }
    const yearHandler = (value) => {
        getYears({
            ...yearOptions,
            value: value
        })
    }
    console.log(props)
    return (
        <div id="wrapper">
            <Header image="/images/header/logo.svg" />
            <main className="main">
                <section className="block-event">
                    <div className="container1">
                        {
                            (event.host ?
                                (
                                    <Fragment key={event.host.id}>
                                        <div className="col-left">
                                            <div className="profile-info">
                                                <div className="image-holder">
                                                    <img src={event.host.avatar} alt="image description" />
                                                </div>
                                                <blockquote>
                                                    <cite>{`${event.host.firstName} ${event.host.lastName}`}</cite>
                                                    <q>&ldquo;{`${event.host.hostProfile.quote}`}&rdquo;</q>
                                                </blockquote>
                                            </div>
                                            {
                                                (event.host.hostProfile.introVideo ?
                                                    (
                                                        <div className="video-area">
                                                            <Player
                                                                poster={`${event.host.hostProfile.introVideo.thumbnail}`}
                                                                src={`${event.host.hostProfile.introVideo.video}`}
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
                                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                            <ul className="list-detail">
                                                <li>
                                                    <strong className="title">Home City:</strong>
                                                    <span className="text">{event.host.timezone}</span>
                                                </li>
                                            </ul>
                                            <a href="#" className="btn btn-secondary">Try A MatchDate Event</a>
                                        </div>

                                        {
                                            ((show === 1) ?
                                                (
                                                    <div class="col-right">
                                                        <div class="host-detail">
                                                            <header class="head">
                                                                <Link to="/events" class="btn-back"><i class="icon icon-back"></i>Back</Link>
                                                                <a href="#" class="share"><i class="icon icon-share"></i></a>
                                                            </header>
                                                            <div class="detail-box">
                                                                <div class="banner-image">
                                                                    <img src={event.headerImage} alt="image description" />
                                                                </div>
                                                                <h1 class="h3">{event.title}</h1>
                                                                <div class="event-info">
                                                                    <strong class="title">{event.slogan}</strong>
                                                                    <strong class="duration">{(dif > 90 ? `${dif}hrs` : `${dif}mins`)}</strong>
                                                                </div>
                                                                <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris</p>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <strong class="title">Cost:</strong>
                                                                        <strong class="price">${event.price}</strong>
                                                                    </div>
                                                                    <div class="col">
                                                                        <strong class="title">Capacity:</strong>
                                                                        <strong class="guests">25 guests</strong>
                                                                    </div>
                                                                    <div class="col">
                                                                        <strong class="title">Registered:</strong>
                                                                        <div class="guest-info">
                                                                            <ul class="list-guests">
                                                                                <li><img src={event.host.avatar} /></li>
                                                                                <li><img src={event.host.avatar} /></li>
                                                                                <li><img src={event.host.avatar} /></li>
                                                                                <li><img src={event.host.avatar} /></li>
                                                                            </ul>
                                                                            <strong class="guests">5 guests</strong>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="event-location">
                                                                    <div class="col">
                                                                        <i class="icon icon-calendar"></i>
                                                                        <strong class="heading"><time datetime="2019-01-14">{`${month} ${datee}th, ${year}`}</time></strong>
                                                                        <span class="time">{`${startTime}-${endTime}`}</span>
                                                                    </div>
                                                                    <div class="col">
                                                                        <i class="icon icon-location"></i>
                                                                        <strong class="heading">Location:</strong>
                                                                        <address>Building One, 125 Main Street, Chicago</address>
                                                                    </div>
                                                                </div>
                                                                <div class="host-info">
                                                                    <div class="image-holder">
                                                                        <img src={event.host.avatar} alt="image description" />
                                                                    </div>
                                                                    <div class="text-holder">
                                                                        <strong class="title">Event Host: {`${event.host.firstName} ${event.host.lastName}`}</strong>
                                                                        <span class="designation">Fitness Trainer</span>
                                                                    </div>
                                                                </div>
                                                                <h2 class="h3">Additional Notes:</h2>
                                                                <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud
                                                                exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                                                                <a href="#" class="btn" onClick={() => setShow(2)}>Register Ticket</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                ) : (show === 2) ?
                                                    (
                                                        <div class="col-right">
                                                            <div class="host-detail">
                                                                <header class="head">
                                                                    <a href="#" class="btn-back" onClick={() => setShow(1)}><i class="icon icon-back"></i>Back</a>
                                                                </header>
                                                                <div class="detail-box style">
                                                                    <h1 class="h3">{event.title}</h1>
                                                                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                                                    <div class="event-location">
                                                                        <div class="col">
                                                                            <i class="icon icon-calendar"></i>
                                                                            <strong class="heading"><time datetime="2019-01-14">{`${month} ${datee}th, ${year}`}</time></strong>
                                                                            <span class="time">{`${startTime}-${endTime}`}</span>
                                                                        </div>
                                                                        <div class="col">
                                                                            <i class="icon icon-location"></i>
                                                                            <strong class="heading">Location:</strong>
                                                                            <address>Building One, 125 Main Street, Chicago</address>
                                                                        </div>
                                                                    </div>
                                                                    <form action="#" class="form-booking">
                                                                        <div class="promo-row">
                                                                            <div class="col1">
                                                                                <div class="price-info">
                                                                                    <strong class="heaing">Cost:</strong>
                                                                                    <strong class="price">${event.price}</strong>
                                                                                </div>
                                                                                <span class="info-text">Includes the evnet and one drink tickets at the after event mixer.</span>
                                                                            </div>
                                                                            <div class="col1">
                                                                                <label for="promo">Promo/Pass Code:</label>
                                                                                <input type="text" id="promo" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="row-fields">
                                                                            <div class="col1 full-width">
                                                                                <label for="card">Card Type:</label>
                                                                                <input type="text" id="card" class="w-small" />
                                                                            </div>
                                                                            <div class="col1">
                                                                                <label for="name">Name on Card:</label>
                                                                                <input type="text" id="name" />
                                                                            </div>
                                                                            <div class="col1">
                                                                                <label for="number">Card Number:</label>
                                                                                <input type="text" id="number" />
                                                                            </div>
                                                                            <div class="col1">
                                                                                <label for="ccv">CCV:</label>
                                                                                <input type="text" id="ccv" class="w-small" />
                                                                            </div>
                                                                            <div class="col1">
                                                                                <label for="expiry">Expire Date:</label>
                                                                                <div class="two-fields">
                                                                                    <div class="field">
                                                                                        {/* <input type="text" id="expiry" /> */}
                                                                                        <Select
                                                                                            defaultValue={monthOptions.options[0]}
                                                                                            className="expiry1"
                                                                                            onChange={monthHandler}
                                                                                            value={monthOptions.value}
                                                                                            options={monthOptions.options}
                                                                                        />
                                                                                    </div>
                                                                                    <div class="field">
                                                                                        <Select
                                                                                            defaultValue={yearOptions.options[0]}
                                                                                            className="expiry1"
                                                                                            onChange={yearHandler}
                                                                                            value={yearOptions.value}
                                                                                            options={yearOptions.options}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <label class="check-holder">
                                                                            <input type="checkbox" />
                                                                            <span class="fake-check"></span>
                                                                        Save card for later use
                                                                    </label>
                                                                        <input type="submit" class="btn" value="Try A MatchDate Event" />
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (show === 3) ?
                                                        (
                                                            <div class="col-right">
                                                                <div class="block-confirmation">
                                                                    <h1 class="h2">Confirmation</h1>
                                                                    <p>You booking has been confirmed. Looking forward to see you at our event.</p>
                                                                    <div class="alert-confirmation">
                                                                        <div class="image-holder">
                                                                            <img src="images/icon-tick.png" alt="image description" />
                                                                        </div>
                                                                        <strong class="title">Booked</strong>
                                                                    </div>
                                                                    <h2 class="h2">Next Step: Download App for Date</h2>
                                                                    <p>You need to download the app to get ready for your dating event.</p>
                                                                    <a href="#" class="btn">Try A MatchDate Event</a>
                                                                    <span class="link-holder">
                                                                        <a href="#" class="link">Continue <i class="icon icon-back"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ) : null
                                            )
                                        }

                                    </Fragment>

                                ) :
                                (
                                    <div>Loading...</div>
                                )
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
            {/* <Testimonial /> */}
            <Footer />
        </div>

    )
}
const mapStatetoProps = state => {
    return {
        event: state.event
    };
};
export default connect(mapStatetoProps, { getEvents })(Event)