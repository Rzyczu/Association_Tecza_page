import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

import '../styles/Partners.css';

class Partners extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <section className="Section">
                <h2 className='Section-title display-2'>Partnerzy</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        // when window width is >= 768px
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 2
                        },
                        950: {
                            slidesPerView: 6,
                            spaceBetween: 2
                        },
                        685: {
                            slidesPerView: 5,
                            spaceBetween: 1
                        },
                        550: {
                            slidesPerView: 4,
                            spaceBetween: 1
                        },
                        360: {
                            slidesPerView: 3,
                            spaceBetween: 1
                        }
                    }}
                    // slidesPerView={3}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 1000
                    }}
                    loopFillGroupWithBlank={true}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    className="Swiper"

                >
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/2/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/4/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/5/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/6/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/7/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/8/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/9/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/11/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/12/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/123/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/13/75/75"></img>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="https://picsum.photos/id/14/75/75"></img>
                    </SwiperSlide>
                </Swiper>


            </section >
        );
    }
}

export default Partners;
