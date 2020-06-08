import React from 'react'

const EventUpcoming = () => {
    return (
        <>
            <div class="upcoming-area">
                <form action="#" class="heading-block">
                    <h2>Upcoming <br /><span>Virtual Events</span></h2>
                    <div class="calender-field">
                        <input type="text" id="calender" placeholder="Thursday, 14 May 2020" />
                        <label for="calender"><i class="icon-calendar1"></i></label>
                    </div>
                    <a href="#" class="btn">Try A MatchDate Event</a>
                </form>
                <ul class="events-list">
                    <li>
                        <div class="image-holder">
                            <a href="#"><img src="images/events/img14.png" alt="image-description" /></a>
                        </div>
                        <div class="description">
                            <strong class="title"><a href="#">Event One</a></strong>
                            <span class="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                    <li>
                        <div class="image-holder">
                            <a href="#"><img src="images/events/img15.png" alt="image-description" /></a>
                        </div>
                        <div class="description">
                            <strong class="title"><a href="#">Event Two</a></strong>
                            <span class="text">100+  -  Reservations Still available </span>
                        </div>
                    </li>
                    <li>
                        <div class="image-holder">
                            <a href="#"><img src="images/events/img16.png" alt="image-description" /></a>
                        </div>
                        <div class="description">
                            <strong class="title"><a href="#">Event Three</a></strong>
                            <span class="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                    <li>
                        <div class="image-holder">
                            <a href="#"><img src="images/events/img17.png" alt="image-description" /></a>
                        </div>
                        <div class="description">
                            <strong class="title"><a href="#">Event Four</a></strong>
                            <span class="text">0 - 50  Filling Fast</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default EventUpcoming
