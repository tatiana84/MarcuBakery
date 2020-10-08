import React from 'react';
import { Zoom } from 'react-slideshow-image';

import img_1 from '../../static/assets/images/sliderImages/1.jpg';
import img_2 from '../../static/assets/images/sliderImages/2.jpg';
import img_3 from '../../static/assets/images/sliderImages/3.jpg';
import img_4 from '../../static/assets/images/sliderImages/4.jpg';
import img_5 from '../../static/assets/images/sliderImages/5.jpg';
import img_6 from '../../static/assets/images/sliderImages/6.jpg';
import img_7 from '../../static/assets/images/sliderImages/7.jpg';
import img_8 from '../../static/assets/images/sliderImages/8.jpg';
import img_9 from '../../static/assets/images/sliderImages/9.jpg';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
    const images = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
        img_9,
    ];
 
    const zoomInProperties = {
        indicators: true,
        scale: 0.9
    }

    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{width: "100%"}}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={each} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Slideshow;