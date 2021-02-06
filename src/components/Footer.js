import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";
import Portfolio from "./Portfolio";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">

                        <div className="d-flex">
                            <p>My online CV / Portfolio</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: +447535507417">+447535507417</a>
                        </div>
                        <div className="d-flex">
                            <p>irinel@lazarovici.co.uk</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Home</a>
                                <br />
                                <Link smooth={true} to="about" offset={-110} href="#" className="footer-nav">About Me</Link>
                                <br />
                                <Link smooth={true} to="services" offset={-110} href="#" className="footer-nav">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} href="#" className="footer-nav">Experience</Link>
                                <br />
                                <Link smooth={true} to="portfolio" offset={-110} href="#" className="footer-nav">Portfolio</Link>
                                <br />
                                <Link smooth={true} to="contacts" offset={-110} href="#" className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url="https://lazarovici.co.uk"
                                quote="FullStack Developer"
                                hashtag="Web Design"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url="https://lazarovici.co.uk"
                                quote="FullStack Developer"
                                hashtag="Web Design"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url="https://lazarovici.co.uk"
                                quote="FullStack Developer"
                                hashtag="Web Design"
                            >
                                <WhatsappIcon className="mx-3" size={36} />
                            </WhatsappShareButton>
                            <LinkedinShareButton
                                url="https://lazarovici.co.uk"
                                quote="FullStack Developer"
                                hashtag="Web Design"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                    <p className="pt-3 text-center">
                        &copy;
                            {new Date().getFullYear()}&nbsp; Lazarovici Web Design LLC&trade; | All Rights Reserved.
                        </p>
                </div>
                <div className="d-flex">

                </div>
            </div>
        </div>
    )
}

export default Footer
