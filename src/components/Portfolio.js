import React from "react";
import First from "../Motivational/Forever.png";
import Second from "../Motivational/ig.png";
import Third from "../Motivational/iri.png";
import Fourth from "../Motivational/twocm.png";
import Fifth from "../Motivational/App1.png";

// FONTAWESOME IMPORTS 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus,} from "@fortawesome/free-solid-svg-icons";
// React popup box 
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // First
    const openPopupBoxFirst = () => {
        const content = (
            <>
            <img className="portfolio-iamge-popupbox" src={First} alt="First picture.." />
        <p></p>
        <b>Online Shop</b> <a className="hyper-link" onClick={() => window.open("https://foreverstyle.uk")}>
            https://foreverstyle.uk</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigFirst = {
        titleBar: {
            enable: true,
            text: "One of the projects"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    // Second
    const openPopupBoxSecond = () => {
        const content = (
            <>
            <img className="portfolio-iamge-popupbox" src={Second} alt="Second picture.." />
        <p>Construction company busines website</p>
        <b>Construction company</b> <a className="hyper-link" onClick={() => window.open("https://ig-ol.co.uk")}>
            https://ig-ol.co.uk</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigSecond = {
        titleBar: {
            enable: true,
            text: "One of the projects."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    // Third
    const openPopupBoxThird = () => {
        const content = (
            <>
            <img className="portfolio-iamge-popupbox" src={Third} alt="Third picture.." />
        <p></p>
        <b>Online CV</b> <a className="hyper-link" onClick={() => window.open("https://lazarovici.co.uk")}>
            https://lazarovici.co.uk</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigThird = {
        titleBar: {
            enable: true,
            text: "One of the projects"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    // Fourth
    const openPopupBoxFourth = () => {
        const content = (
            <>
            <img className="portfolio-iamge-popupbox" src={Fourth} alt="Fourth picture.." />
        <p></p>
        <b>Construction company</b> <a className="hyper-link" onClick={() => window.open("https://twocm.co.uk")}>
            https://twocm.co.uk</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigFourth = {
        titleBar: {
            enable: true,
            text: "One of the projects."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
     // Fifth
     const openPopupBoxFifth = () => {
        const content = (
            <>
            <img id="fifth" className="portfolio-iamge-popupbox" src={Fifth} alt="Fifth picture.." />
        <p></p>
        <b>Testing app </b> <a className="hyper-link" onClick={() => window.open("https://lazarovici.co.uk/Forever/")}>
        https://lazarovici.co.uk/Forever/</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigFifth = {
        titleBar: {
            enable: true,
            text: "One of the projects."
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupBoxFirst} >
                        <img className="portfolio-image" src={First} alt="first pic for portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxSecond} >
                        <img className="portfolio-image" src={Second} alt="second pic for portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxThird} >
                        <img className="portfolio-image" src={Third} alt="third pic for portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxFourth} >
                        <img className="portfolio-image" src={Fourth} alt="fourth pic for portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupBoxFifth} >
                        <img className="portfolio-image" src={Fifth} alt="fifth pic for portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFirst} />
            <PopupboxContainer {...popupboxConfigSecond} />
            <PopupboxContainer {...popupboxConfigThird} />
            <PopupboxContainer {...popupboxConfigFourth} />
            <PopupboxContainer {...popupboxConfigFifth} />
        </div>
    )
}

export default Portfolio
