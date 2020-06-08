import React from 'react'
import EventUpcoming from './EventUpcoming'
import Header from '../Header/Header'
const EventHostVisual = () => {
    return (
        <>
            <div class="top-container style02">
                <Header image="images/header/logo-white.svg" />
                <div class="visual-area">
                    <div class="container">
                        <div class="visual-holder">
                            <div class="image-holder">
                                <img src="images/events/img12.png" alt="image-description" />
                            </div>
                            <div class="visual-caption">
                                <h1>Find Your Soulmate</h1>
                                <p>Matchdate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing event hosts and state of the art technology.</p>
                                <p>Matchdate is the virtual speed dating platform for our generation and the world we live in now.</p>
                                <a href="#" class="btn">Try A MatchDate Event</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main class="main">
                <div class="detail-section">
                    <div class="container">
                        <div class="video-holder">
                            <strong class="video-title">Get matched with your perfect date during one of our vetted virtual speed dating events.</strong>
                            <div class="video-frame">
                                <img src="images/events/img13.png" alt="image-description" />
                                <a href="#" class="btn-play"><i class="icon icon-play"></i></a>
                            </div>
                        </div>
                        <div class="text-area">
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
