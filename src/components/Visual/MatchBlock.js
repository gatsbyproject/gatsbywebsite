import React from 'react'
import { Link } from 'gatsby'
const MatchBlock = () => {
    return (
        <main className="main">
            <div className="match-section">
                <div className="container1">
                    <div className="wrap">
                        <div className="image-holder">
                            <img src="/images/img7.png" alt="image-description" />
                        </div>
                        <div className="description">
                            <h2>Find Your Soulmate On <span>MatchDate</span></h2>
                            <p>Utilizing state of the art artificial intelligence under the guidance of our event hosts, we create fun virtual matchmaking events, automating the speed dating process.</p>
                            <p>Using real time data and feedback from each unique user, MatchDate makes sure all sequential rounds are matches based on qualities you want in a future partner.</p>
                            <p>Never before has there been speed dating technology that utilizes attendees’ real time feedback to make sure the next speed dating round is actually what you are looking for...until now.</p>
                            <Link to="/about" className="btn btn-secondary">Find Your Match</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MatchBlock
