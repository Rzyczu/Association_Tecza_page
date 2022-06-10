import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import '../styles/Slider.css';
import SliderElement from "./SliderElement";


class Slider extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <section className="Section">
                <h2 className='Section-title display-1'>Aktualności</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        // when window width is >= 768px
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 2
                        },
                        950: {
                            slidesPerView: 2,
                            spaceBetween: 5
                        }
                    }}
                    // slidesPerView={3}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 5000
                    }}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="Swiper"

                >
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 1" img="https://picsum.photos/id/2/360/240" alt="Opis zdjecie 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="01.01.2020" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 2" img="https://picsum.photos/id/32/360/240" alt="Opis zdjecie 2" content="Oczywiście na Dyerhoffa był w wyobraźni. A Ośla Łączka ściszał po z wielkim, nie dotykanym stopą Pirx długo szukał Harelsbergera." date="02.01.2020" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 3" img="https://picsum.photos/id/433/360/240" alt="Opis zdjecie 3" content="Się w tych iluzjach jego początków, proroczo się przez mur. Wewnątrz nowa nomenklatura partyjna i same stają odważnie przeczytać we wykluczenie alternatywy." date="03.01.2020" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 4" img="https://picsum.photos/id/51/360/240" alt="Opis zdjecie 4" content="Tym w filmie Brauna, PiS, że zabrakło kart czego tu ministerialnego rozporządzenia regulującego „przedszkola nie budzący wątpliwości, i nie pokażecie to" date="04.01.2020" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 5" img="https://picsum.photos/id/67/360/240" alt="Opis zdjecie 5" content="In oleo caput tuus, ipsa me consolata in loco Super aquam refectionis collocavit. Super aquam baculus tuus, ipsa me nomen suum." date="05.01.2020" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <SliderElement title="tytul 6" img="https://picsum.photos/id/74/360/240" alt="Opis zdjecie 6" content="Że były tu żubry, na odstrzał. Tym razem Potem dołączyła do niego spokojnie umieścić kawkę! Wydawać dziwne, spod śniegu jakieś nie za " date="06.01.2020" />
                    </SwiperSlide>
                </Swiper>



            </section >
        );
    }
}


export default Slider;
