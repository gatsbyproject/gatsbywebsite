import React from 'react'

const EventUpcoming = () => {
    return (
        <>
            <div className="upcoming-area">
                <form action="#" className="heading-block">
                    <h2>Upcoming <br /><span>Virtual Events</span></h2>
                    {/* <div className="calender-field">
                        <input type="text" id="calender" placeholder="Thursday, 14 May 2020" />
                        <label htmlFor="calender"><i className="icon-calendar1"></i></label>
                    </div> */}
                    <a href="#" className="btn">Find A MatchDate Event</a>
                </form>
                <ul className="events-list">
                    <li>
                        <div className="image-holder">
                            <a href="#"><img src="images/events/img14.png" alt="image-description" /></a>
                        </div>
                        <div className="description">
                            <strong className="title"><a href="#">Event One</a></strong>
                            <span className="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                    <li>
                        <div className="image-holder">
                            <a href="#"><img src="images/events/img15.png" alt="image-description" /></a>
                        </div>
                        <div className="description">
                            <strong className="title"><a href="#">Event Two</a></strong>
                            <span className="text">100+  -  Reservations Still available </span>
                        </div>
                    </li>
                    <li>
                        <div className="image-holder">
                            <a href="#"><img src="images/events/img16.png" alt="image-description" /></a>
                        </div>
                        <div className="description">
                            <strong className="title"><a href="#">Event Three</a></strong>
                            <span className="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                    <li>
                        <div className="image-holder">
                            <a href="#"><img src="images/events/img17.png" alt="image-description" /></a>
                        </div>
                        <div className="description">
                            <strong className="title"><a href="#">Event Four</a></strong>
                            <span className="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default EventUpcoming
