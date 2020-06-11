import React, { useState } from 'react'
import Header from '../Header/Header'
const faq = [
    {
        id: 1,
        ques: 'The event is sold out--is there a wait list?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 2,
        ques: 'How will I be “admitted” to the event?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 3,
        ques: 'What devices and programs or apps do I need to have access to for Match Date?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 4,
        ques: 'I was on the wait list but there were no openings--will I get a refund?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 5,
        ques: 'The event is over, now what?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 6,
        ques: 'Where do the attendees live?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 7,
        ques: 'How long are MatchDate events?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    },
    {
        id: 8,
        ques: 'How often do MatchDate events occur?',
        ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
    }
]
const FrequentlyAskedQues = () => {
    const [state, setState] = useState({ id: '', active: false })
    const activeHandler = (i) => {
        setState({
            ...state,
            id: i,
            active: !state.active
        })
    }
    return (
        <>
            <div className="top-container style06">
                <Header image="/images/header/logo-white.svg" />
                <div className="visual-area">
                    <div className="container1">
                        <div className="visual-caption">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="accordion-section">
                    <div className="container1">
                        <ul className="accordion">
                            {faq.map((f1) => {
                                return (
                                    <li key={f1.id} className={state.id === f1.id ? (state.active ? 'active' : null) : null}>
                                        <a href="#" className="accordion-opener" onClick={(e) => {
                                            e.preventDefault()
                                            activeHandler(f1.id)
                                        }}>{f1.ques}</a>
                                        <div className="accordion-slide">
                                            <div className="slide-text">
                                                <p>{f1.ans}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default FrequentlyAskedQues

