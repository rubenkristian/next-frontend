"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HomePage() {
    return (
        <div className="mx-40 mt-20">
            <div className="flex">
                <Swiper>
                    {[1, 2, 3].map((i, el) => {
                        return <SwiperSlide key={i}>Slide {el}</SwiperSlide>;
                    })}
                </Swiper>
            </div>
        </div>
    );
}