import React from 'react'
import { Carousel } from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const Hero = () => {
    const images = [
        'https://generaltools.com/media/magestore/bannerslider/images/y/e/yestermorrow-general-tools-1843x815-smaller-image-080822.jpg?v=0',
        'https://generaltools.com/media/catalog/category/screenshot-4.png'
    ]

    return (
        <>
            <section className='bg-gray-100'>
                <img className='w-full h-[360px] md:h-[520px]' src={images[0]} />
            </section>
        </>
    )
}

export default Hero