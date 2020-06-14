import React from 'react'
import EventUpcoming from './EventUpcoming'
import Header from '../Header/Header'
const EventHostVisual = () => {
    return (
        <>
            <div className="top-container style02">
                <Header image="/images/header/logo-white.svg" />
                <div className="visual-area">
                    <div className="container1">
                        <div className="visual-holder">
                            <div className="image-holder">
                                <img src="/images/events/img12.png" alt="image-description" />
                            </div>
                            <div className="visual-caption">
                                <h1>Find Your Soulmate</h1>
                                <p>Matchdate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing event hosts and state of the art technology.</p>
                                <p>Matchdate is the virtual speed dating platform for our generation and the world we live in now.</p>
                                <a href="#" className="btn">Try A MatchDate Event</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="detail-section">
                    <div className="container1">
                        <div className="video-holder">
                            <strong className="video-title">Get matched with your perfect date during one of our vetted virtual speed dating events.</strong>
                            <div className="video-frame">
                                <img src="/images/events/img13.png" alt="image-description" />
                                {/* <a href="#" className="btn-play"><i className="icon icon-play"></i></a> */}
                            </div>
                        </div>
                        <div className="text-area">
                            <p>Utilizing state of the art artificial intelligence under the guidance of our event hosts, we create fun virtual matchmaking events, automating the speed dating process.</p>
                            <p>Using real time data and feedback from each unique user, MatchDate makes sure all sequential rounds are matches based on qualities you want in a future partner.</p>
                        </div>
                        <EventUpcoming />
                    </div>
                </div>
            </main>
        </>
    )
}

export default EventHostVisual
