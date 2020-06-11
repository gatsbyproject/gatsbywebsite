import React, { useState } from 'react'
import Header from '../Header/Header'
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
const EventsCalendar = () => {
    const [date, setDate] = useState(new Date())
    const handleChange = date => {
        setDate(date);
    };
    return (
        <>

            <div className="top-container style04">
                <Header image="/images/header/logo-white.svg" />
                <div className="visual-area">
                    <div className="container1">
                        <div className="visual-caption">
                            <span className="symbol-icon">
                                <img src="images/calendar/symbol.svg" alt="symbol" />
                            </span>
                            <h1>Events Calendar</h1>
                            <p>Check back often as new events are added frequently that will suit  your time and interests!</p>
                            <div className="calender-field">
                                <DatePicker
                                    selected={date}
                                    id="calender"
                                    onChange={handleChange}
                                />
                                {/* <input type="text" id="calender" placeholder="Thursday, 14 May 2020" /> */}
                                <label htmlFor="calender"><i className="icon-calendar1"></i></label>
                            </div>
                            <a href="#" className="btn">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="events-info-section">
                    <div className="container1">
                        <ul className="events-list">
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img28.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">Super Happy Fun Time!!</a></strong>
                                    <span className="text">0 - 50  Filling Fast</span>
                                </div>
                            </li>
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img29.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">Traveling Fundraiser</a></strong>
                                    <span className="text">100+  -  Reservations Still available </span>
                                </div>
                            </li>
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img30.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">An Evening of traveling</a></strong>
                                    <span className="text">0 - 50  Filling Fast</span>
                                </div>
                            </li>
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img31.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">A Night to Celebrate Love</a></strong>
                                    <span className="text">100+  -  Reservations Still available </span>
                                </div>
                            </li>
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img32.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">A Celebration of Life</a></strong>
                                    <span className="text">0 - 50  Filling Fast</span>
                                </div>
                            </li>
                            <li>
                                <div className="image-holder">
                                    <a href="#"><img src="/images/calendar/img33.png" alt="image-description" /></a>
                                </div>
                                <div className="description">
                                    <strong className="title"><a href="#">The Wonders of Match</a></strong>
                                    <span className="text">100+  -  Reservations Still available </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EventsCalendar
