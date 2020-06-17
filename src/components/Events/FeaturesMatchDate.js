import React from 'react'
import { Link } from 'gatsby'

const FeaturesMatchDate = () => {
    return (
        <div className="features-section">
            <div className="container1">
                <div className="wrap">
                    <div className="description">
                        <h2>Reasons to Use MatchDate</h2>
                        <ul className="info-list">
                            <li>Secure, Private and Virtual - Speed Dating and Match Making For Today's Lifestyles</li>
                            <li>Our Advanced State-Of-The-Art Technology Helps You Find Your Soulmate</li>
                            <li>Connect with singles matching your interest in your hometown and across the globe</li>
                            <li>Our Amazing Event Hosts and Your Real Time Feedback Expertly Guide Your Event Experience</li>
                        </ul>
                        <Link to="/events" className="btn">Try A MatchDate Event</Link>
                    </div>
                    <div className="image-holder">
                        <img src="/images/events/img19.png" alt="image-description" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesMatchDate
