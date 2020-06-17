import React from 'react'
import Header from '../Header/Header'
import { Link } from 'gatsby'
import { connect } from "react-redux";
import { getEvents } from '../../redux/Events/events.action'

const isClient = typeof window !== 'undefined';
const EventsHostDirectory = (props) => {
    const [events, getEvents] = React.useState([])
    const [eId, geteId] = React.useState(null)
    React.useEffect(() => {
        getEvents(props.event.events)
    }, [])
    console.log(eId)
    return (
        <>

            <div className="top-container style03">
                <Header image="/images/header/logo-white.svg" />
                <div className="visual-area">
                    <div className="container1">
                        <div className="visual-caption">
                            <span className="symbol-icon">
                                <img src="/images/events/symbol.svg" alt="symbol" />
                            </span>
                            <h1>Event Host Directory</h1>
                            <p>Event Hosts are your go-to resource for MatchDate events. Event Hosts will engage and interact to make sure all attendees are comfortable and confident during all events.<br /> Meet your Event Host here!</p>
                            <button onClick={() => { window.scrollBy(0, 350); }} className="btn">Find Host</button>
                        </div>
                    </div>
                </div>
            </div>

            <main className="main" style={{ marginTop: '0em' }}>
                <div className="member-section" style={{ padding: '0px' }}>
                    <div className="container1">
                        <div className="member-list-holder">
                            <ul className="member-list">
                                {
                                    events.map((e1, e) => {
                                        return (
                                            <li key={e}>
                                                <div className="block">
                                                    <div className="image-holder">
                                                        <Link to={`/hostEvents/${e1.host.id}`}>
                                                            <img src={e1.host.avatar} alt="image-description" />
                                                        </Link>
                                                    </div>
                                                    <div className="member-info">
                                                        <strong className="name"><Link to={`/hostEvents/${e1.host.id}`} >{`${e1.host.firstName} ${e1.host.lastName}`}</Link></strong>
                                                        <ul className="bio-info-list">
                                                            <li>{e1.host.timezone}</li>
                                                            <li>{e1.host.hostProfile.superPower}</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }


                            </ul>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

const mapStatetoProps = state => {
    return {
        event: state.event
    };
};
export default connect(mapStatetoProps, { getEvents })(EventsHostDirectory)


// onClick={() => geteId(e1.host.id)}