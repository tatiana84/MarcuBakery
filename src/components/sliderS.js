import React from 'react';
import { Zoom } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    const images = [
        '../../../static/assets/images/sliderImages/1.jpg',
        '../../../static/assets/images/sliderImages/2.jpg',
        '../../../static/assets/images/sliderImages/3.jpg',
        '../../../static/assets/images/sliderImages/4.jpg',
        '../../../static/assets/images/sliderImages/5.jpg',
        '../../../static/assets/images/sliderImages/6.jpg',
        '../../../static/assets/images/sliderImages/7.jpg',
        '../../../static/assets/images/sliderImages/8.jpg',
        '../../../static/assets/images/sliderImages/9.jpg'
    ];
 
    const zoomInProperties = {
        indicators: true,
        scale: 1.4
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