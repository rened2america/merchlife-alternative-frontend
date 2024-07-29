import React, { Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


type ImagesArray = string[];

interface AppProps {
    images: ImagesArray;
    selectedValue: Dispatch<SetStateAction<number>>;
}

export default function CustomSwiper({ images, selectedValue }: AppProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-[484px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-5  w-[484px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className='w-[155px] h-[155px]'>
                        <img src={image} onClick={()=>selectedValue(index)}  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}