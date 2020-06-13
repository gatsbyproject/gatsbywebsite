import React from 'react'
import { Link } from 'gatsby'
const VirtualEvents = () => {
    const isBrowser = typeof window !== `undefined`
    return (
        <main className="main">
            <div className="event-section style01">
                <div className="container1">
                    <div className="wrap">
                        <div className="description">
                            <h2>Virtual <span>Events</span></h2>
                            <p>MatchDate has simplified the speed dating process for the virtual age with this easy-to-use platform under the guidance of amazing Event Hosts and state of the art technology.</p>
                            <p>MatchDate is THE virtual speed dating platform for our generation and the world we live in NOW.</p>
                            {
                                (isBrowser ? window.location.pathname === '/about' ?
                                    (
                                        <a className="btn btn-secondary" style={{ color: 'white' }}>Try A MatchDate Event</a>
                                    ) :
                                    (
                                        <Link to="about" className="btn btn-secondary">Try A MatchDate Event</Link>
                                    ) : (
                                        <Link to="about" className="btn btn-secondary">Try A MatchDate Event</Link>
                                    )
                                )
                            }
                        </div>
                        <div className="image-holder">
                            <img src="/images/events/virtual-events/img9.png" alt="image-description" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default VirtualEvents