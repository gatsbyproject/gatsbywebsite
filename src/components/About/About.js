import React from 'react'
import { Link } from 'gatsby'
const About = () => {

  return (
    <>
      <div className="visual-area">
        <div className="container1">
          <div className="visual-caption">
            <h1>About MatchDate</h1>
            <p>Utilizing state of the art artificial intelligence under the guidance of our event hosts, we create fun virtual matchmaking events, automating the speed dating process.</p>
            <p>Using real time data and feedback from each unique user, MatchDate makes sure all sequential rounds are matches based on qualities you want in a future partner.</p>
            <p>Never before has there been speed dating technology that utilizes attendees’ real time feedback to make sure the next speed dating round is actually what you are looking for...until now.</p>
            <Link to="/events" className="btn">Try A MatchDate Event</Link>
          </div>
        </div>
      </div>

      <div className="visual-image">
        <img src="/images/about/img11.png" alt="image-description" />
      </div>
    </>
  )
}

export default About
