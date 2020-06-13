import React from 'react'
import { Link } from 'gatsby'
const Footer = () => {
    return (

        <footer className="footer">
            <div className="container1">
                <div className="footer-top">
                    <strong className="f-logo">
                        <a href="#"><img src="/images/footer/logo-white.svg" alt="MATCHDATE" /></a>
                    </strong>
                    <ul className="social-networks">
                        <li><a href="https://www.facebook.com/MatchDateEvents?utm_source=matchdate_website&utm_medium=site_footer&utm_campaign=generic" target="_blank"><i className="icon icon-facebook"></i></a></li>
                        <li><a href="https://twitter.com/MatchDateEvents?utm_source=matchdate_website&utm_medium=site_footer&utm_campaign=generic" target="_blank"><i className="icon icon-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/MatchDateEvents/?utm_source=matchdate_website&utm_medium=site_footer&utm_campaign=generic" target="_blank"><i className="icon icon-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="three-cols">
                    <div className="col-apps">
                        <strong className="title">Available On</strong>
                        <ul className="list-apps">
                            <li>
                                <a href="#"><i className="icon icon-play-store"></i>Google Play Store </a>
                            </li>
                            <li>
                                <a href="#"><i className="icon icon-apple-store"></i>Apple App Store</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-links">
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="#">Why Us?</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="#">Terms Of Service</Link></li>
                            <li><Link to="#">Contact US</Link></li>
                            <li><Link to="#">Help</Link></li>
                            <li><Link to="/testimonial">Testimonial</Link></li>
                        </ul>
                    </div>
                    <div className="col-form">
                        <form action="#" className="form-subscribe">
                            <strong className="title">Subscribe</strong>
                            <input type="email" placeholder="E-mail" />
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="Subscribe Now" className="btn btn-secondary" />
                        </form>
                    </div>
                </div>
                <p>Made in NYC. All member work copyright of respective owner, otherwise <a href="#">&copy; 2020 MatchDate</a></p>
            </div>
        </footer>
    )
}

export default Footer
