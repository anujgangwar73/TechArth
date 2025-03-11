import React from "react";
// import "./Footer.scss";
import { mdiMapMarker, mdiEmail, mdiPhone, mdiArrowRight, mdiLinkedin, mdiFacebook, mdiTwitter, mdiMapMarkerOutline, mdiEmailOutline, mdiPhoneOutline } from "@mdi/js";
import Icon from "@mdi/react";
import footer from '../assets/footer.png'
import x_logo from '../assets/x_logo.jpg'

const Footer = () => {
    return (
        <footer className="footer-cont">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo-contact">
                        <div className="footer-logo">
                            <span>TECHARTH</span>
                            <span>Think.Transform.Thrive</span>
                        </div>
                        <div className="footer-contact">
                            <p>
                                <Icon path={mdiMapMarkerOutline} size={1} />
                                <a href="https://www.google.com/maps/search/?q=Nirvana+Country,+Gurugram,+122018" target="_blank" rel="noopener noreferrer">
                                    Nirvana Country, Gurugram, 122018
                                </a>
                            </p>
                            <p>
                                <Icon path={mdiEmailOutline} size={1} />
                                <a href="mailto:letstalk@techarthco.com">letstalk@techarthco.com</a>
                            </p>
                            <p>
                                <Icon path={mdiPhoneOutline} size={1} />
                                +91 9810156429
                            </p>
                        </div>
                    </div>
                    <div className="footer-company-links">
                        <div>Company</div>
                        <span>
                            About Us
                        </span>
                        <span>
                            What we do
                        </span>
                        <span>
                            Why Choose Us
                        </span>
                    </div>
                    <div className="footer-industry-links">
                        <div>Industries</div>
                        <span>
                            Oil & Gas
                        </span>
                        <span>
                            Manufacturing
                        </span>
                        <span>
                            Utilities
                        </span>
                        <span>
                            Aviation
                        </span>
                    </div>
                    <div className="footer-subscribe-social">
                        {/* <div className="footer-subscribe">
                            <div>Subscribe Now</div>
                            <div className="subscribe-box">
                                <input type="email" placeholder="info@abc.com" />
                                <button><Icon path={mdiArrowRight} size={1} /></button>
                            </div>
                        </div> */}
                        <div className="footer-social">
                            <span>Follow Us</span>
                            <div className="social-icons">
                                <Icon path={mdiLinkedin} size={2} style={{ cursor: "pointer" }} />
                                {/* <Icon path={mdiFacebook} size={2} />
                                <img src={x_logo} width={"43px"} height={"43px"}
                                    style={{
                                        borderRadius: "30px",
                                        marginTop: "3px",
                                        marginLeft: "3px"
                                    }} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="left-text">
                        Copyright © 2025 techarth, All rights reserved
                    </div>
                    <div className="right-text">
                        Terms of Services  |  Privacy Policy  |  Cookie Policy
                    </div>
                </div>
            </div>
            <div className="bg-image">
                <div>
                    <img src={footer} />
                </div>
                <div>
                    <img src={footer} />
                </div>
                <div>
                    <img src={footer} />
                </div>
                <div>
                    <img src={footer} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
