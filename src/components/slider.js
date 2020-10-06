import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SlideView extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const wrapper = styled.div`
            with = 100%;
            padding = 32px;
        `;
        

        return (
        
            <wrapper>
                <Slider {...settings}>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/1.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/2.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/3.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/4.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/5.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/6.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/7.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/8.jpg"} />
                    </div>
                    <div>
                        <img src={"../../static/assets/images/sliderImages/9.jpg"} />
                    </div>
                </Slider>
            </wrapper>
        );
    }
}