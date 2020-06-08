import React from 'react'
import Header from '../Header/Header'
const Events = () => {
    return (
        <>

            <Header image="/images/header/logo.svg" />
            <main class="main">
                <section class="block-event">
                    <div class="container">
                        <div class="col-left">
                            <div class="profile-info">
                                <div class="image-holder">
                                    <img src="/images/events/img-girl.jpg" alt="image description" />
                                </div>
                                <blockquote>
                                    <cite>Host Name</cite>
                                    <q>“Some really great quote"</q>
                                </blockquote>
                            </div>
                            <div class="video-area">
                                <a href="#" class="btn-play"><i class="icon icon-play"></i></a>
                                <img src="/images/events/img1.jpg" alt="image description" />
                            </div>
                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            <ul class="list-detail">
                                <li>
                                    <strong class="title">Home City:</strong>
                                    <span class="text">Chicago, IL</span>
                                </li>
                            </ul>
                            <a href="#" class="btn btn-secondary">Try A MatchDate Event</a>
                        </div>
                        <div class="col-right">
                            <h1 class="h2">Events by Jamie:</h1>
                            <article class="article-card">
                                <div class="image-holder">
                                    <a href="#"><img src="/images/events/img2.jpg" alt="image description" /></a>
                                </div>
                                <div class="text-holder">
                                    <h2 class="h3"><a href="#">Master Dating for Travellers</a></h2>
                                    <p>"Dating for the world travaller"</p>
                                    <ul class="list-detail">
                                        <li><i class="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                        <li><i class="icon icon-location"></i>Chicago, IL</li>
                                    </ul>
                                    <div class="more-info">
                                        <span class="tickets">3 Tickets Left</span>
                                        <span class="duration">90 mins</span>
                                    </div>
                                </div>
                            </article>
                            <article class="article-card">
                                <div class="image-holder">
                                    <a href="#"><img src="/images/events/img4.jpg" alt="image description" /></a>
                                </div>
                                <div class="text-holder">
                                    <h2 class="h3"><a href="#">Master Dating for Travellers</a></h2>
                                    <p>"Dating for the world travaller"</p>
                                    <ul class="list-detail">
                                        <li><i class="icon icon-calendar"></i>April, 24th, 2020 at 6:30PM-7:30PM</li>
                                        <li><i class="icon icon-location"></i>Chicago, IL</li>
                                    </ul>
                                    <div class="more-info">
                                        <span class="tickets">3 Tickets Left</span>
                                        <span class="duration">90 mins</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="popup-holder">
                        <div class="popup-frame">
                            <div class="popup-wrap">
                                <div class="box-wrap">
                                    <header class="head">
                                        <h2>Message Jamie:</h2>
                                        <a href="#" class="btn-close"><i class="icon icon-close"></i></a>
                                    </header>
                                    <form action="#" class="form-message">
                                        <div class="field">
                                            <div class="field">
                                                <label for="email">Your Email:</label>
                                                <input type="email" id="email" />
                                            </div>
                                            <div class="field">
                                                <label for="message">Message:</label>
                                                <textarea id="message"></textarea>
                                            </div>
                                            <input type="submit" class="btn" value="Try A MatchDate Event" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Events
