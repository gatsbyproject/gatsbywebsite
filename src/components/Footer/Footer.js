import React from 'react'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container1">
                <div className="footer-top">
                    <strong className="f-logo">
                        <a href="#"><img src="/images/footer/logo-white.svg" alt="MATCHDATE" /></a>
                    </strong>
                    <ul className="social-networks">
                        <li><a href="#"><i className="icon icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon icon-linkedin"></i></a></li>
                        <li><a href="#"><i className="icon icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon icon-youtube"></i></a></li>
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
                        <strong className="title">About us</strong>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Why Us?</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms Of Service</a></li>
                            <li><a href="#">App</a></li>
                            <li><a href="#">Contact US</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Help</a></li>
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
