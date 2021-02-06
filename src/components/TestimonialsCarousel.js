import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Avatars imports
import avatar1 from "../avatars/avatar-1.png"
import avatar2 from "../avatars/avatar-2.png"
import avatar3 from "../avatars/avatar-3.png"
import avatar4 from "../avatars/avatar-4.png"

const TestimonialsCarousel = () => {
    return (
        <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
                <img src={avatar1} alt="2cm" />
                <div className="myCarousel">
                <h3>2cm</h3>
                <p>The page works fine, I'm happy and I highly recomended </p>
                </div>
            </>
            <>
                <img src={avatar4} alt="IG-OL" />
                <div className="myCarousel">
                <h3>IG-OL</h3>
                <p>This helped me to improve my business, I'm happy and I highly recomended</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="Forever Style" />
                <div className="myCarousel">
                <h3>ForeverStyle</h3>
                <p>Recomended</p>
                </div>
            </>
           
        </Carousel>
    )
}

export default TestimonialsCarousel
