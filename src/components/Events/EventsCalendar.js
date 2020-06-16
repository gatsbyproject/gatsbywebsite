import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
import { connect } from 'react-redux'
import { getEvents } from '../../redux/Events/events.action'
import Events from './Events'
const EventsCalendar = (props) => {
    const [date, setDate] = useState(new Date())
    const [events, getEvents] = useState([])
    const [eventId, geteventId] = useState({ hostId: '', eventId: '' })
    useEffect(
        () => {
            getEvents(props.event.apiEvents)
        }, [props.event.apiEvents]
    )
    const handleChange = date => {
        setDate(date);
    };
    return (
        <>
            {
                eventId.hostId ? (<Events hostID={eventId.hostId} eventID={eventId.eventId} />) :
                    (
                        <>
                            <div className="top-container style04">
                                <Header image="/images/header/logo-white.svg" />
                                <div className="visual-area">
                                    <div className="container1" style={{ marginBottom: '12em' }}>
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
                                            {
                                                events.map(e1 => {
                                                    return (
                                                        <li key={e1.id}>
                                                            <div className="image-holder">
                                                                <a href="#"><img src={e1.headerImage} alt="image-description" /></a>
                                                            </div>
                                                            <div className="description">
                                                                <strong className="title"><a href="#" onClick={() => geteventId({ ...eventId, hostId: e1.host.id, eventId: e1.id })}>{e1.title}</a></strong>
                                                                <span className="text">{e1.slogan}</span>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </main>
                        </>
                    )
            }
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        event: state.event
    }

}

export default connect(mapStatetoProps, { getEvents })(EventsCalendar)
