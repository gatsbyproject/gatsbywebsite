import React, { useState } from 'react'
import { Link } from 'gatsby'
import Cookies from 'js-cookie'
import { Modal } from 'react-responsive-modal'
import Users from '../../User/Users'
import Register from '../../User/Register'
const RegisterTicket = ({ event, parentCall }) => {
    const [name1, setOpenFirst] = useState(false)
    const [name2, setOpenSecond] = useState(false)
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
    const handleRegister = () => {
        var token = Cookies.get("token")
        if (token) {
            parentCall(2)
        } else {
            setOpenFirst(true)
        }
    }
    const callback = value => {
        var token = Cookies.get("token")
        if (value === "register") {
            setOpenFirst(false)
            setOpenSecond(true)
        } else if (value === "login") {
            setOpenSecond(false)
            setOpenFirst(true)
        } else if (token) {
            parentCall(2)
        } else {
            console.log('no')
            // setShow(1)
        }
    }
    return (
        <>
            <div class="host-detail">
                <header class="head">
                    <Link to={`/hostEvents/${event.host.id}`} class="btn-back"><i class="icon icon-back"></i>Back</Link>
                    {/* <a href="#" class="share"><i class="icon icon-share"></i></a> */}
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
                    <p>{event.description}</p>
                    <div class="row">
                        <div class="col">
                            <strong class="title">Cost:</strong>
                            <strong class="price">${event.price}</strong>
                        </div>
                        <div class="col">
                            <strong class="title">Capacity:</strong>
                            <strong class="guests">{event.capacity} guests</strong>
                        </div>
                        {/* <div class="col">
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
                                                                    </div> */}
                    </div>
                    <div class="event-location">
                        <div class="col">
                            <i class="icon icon-calendar"></i>
                            <strong class="heading"><time>{`${month} ${datee}th, ${year}`}</time></strong>
                            <span class="time">{`${startTime}-${endTime}`}</span>
                        </div>
                        <div class="col">
                            <i class="icon icon-location"></i>
                            <strong class="heading">Location:</strong>
                            <address>{event.eventCity}</address>
                        </div>
                    </div>
                    <div class="host-info">
                        <div class="image-holder">
                            <img src={event.host.avatar} alt="image description" />
                        </div>
                        <div class="text-holder">
                            <strong class="title">{`${event.host.firstName} ${event.host.lastName}`}</strong>
                            <span class="designation">Fitness Trainer</span>
                        </div>
                    </div>
                    <h2 class="h3">Additional Notes:</h2>
                    <p>{event.additionalInfo}</p>
                    <button class="btn" onClick={handleRegister}>Register Ticket</button>
                </div>
            </div>
            {
                (name1) ? (
                    <Modal
                        styles={{ modal: { borderRadius: '14px' }, overlay: { background: 'rgba(0, 0, 0, 0.50)' } }}
                        open={name1}
                        onClose={() => setOpenFirst(false)}
                        classNames={{
                            animationIn: 'customEnterAnimation',
                            animationOut: 'customLeaveAnimation',
                        }}
                        center>
                        <Users parentCall={callback} />
                    </Modal>
                ) : (<div></div>)
            }
            {
                (name2) ? (
                    <Modal
                        styles={{ modal: { borderRadius: '14px' }, overlay: { background: 'rgba(0, 0, 0, 0.25)' } }}
                        open={name2}
                        onClose={() => setOpenSecond(false)}
                        classNames={{
                            animationIn: 'customEnterAnimation',
                            animationOut: 'customLeaveAnimation',
                        }}
                        animationDuration={1000}
                        center>
                        <Register parentCall={callback} />
                    </Modal>
                ) : null
            }
        </>
    )
}

export default RegisterTicket
