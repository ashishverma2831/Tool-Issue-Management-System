import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import '../App.css'
import Hero2 from './Hero2';

const Hero3 = () => {

    const data = [
        {
            image: 'https://www.zomato.com/partner-with-us/static/media/PawanKumar.fb110f23.png',
            description:'lor sit amet, consectetur adipiscing elit. Sed auctor, nunc eget ultrices posuere, nunc libero ultricies nunc, nec tincidunt nunc turpis nec nunc',
            name: 'Pawan Kumar',
            owner: 'Kumar Mechanic, Dehradun'
        },
        {
            image: 'https://www.zomato.com/partner-with-us/static/media/Tushar.6bc47b8a.png',
            description:'lor sit amet, consectetur adipiscing elit. Sed auctor, nunc eget ultrices posuere, nunc libero ultricies nunc, nec tincidunt nunc turpis nec nunc',
            name: 'Tushar',
            owner: 'Sharma Tool Shop, Delhi NCR'
        },
        {
            image: 'https://www.zomato.com/partner-with-us/static/media/Jasmeet.7da6a5e1.png',
            description:'lor sit amet, consectetur adipiscing elit. Sed auctor, nunc eget ultrices posuere, nunc libero ultricies nunc, nec tincidunt nunc turpis nec nunc',
            name: 'Jasmeet Singh',
            owner: 'Tool Techtonic, Udaipur'
        }
    ]

    return (
        <>
            <section className='px-5 py-10 bg-gray-100'>
                <div className='py-5 px-5 max-w-screen-md mx-auto'>
                    <p className='text-center text-4xl '>Our Clients</p>
                    <Carousel
                        className='h-[300px] w-full'
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        containerClass="container-with-dots"
                        dotListClass="react-multi-carousel-dot-list"
                        draggable={true}
                        infinite={true}
                        renderButtonGroupOutside={true}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 512
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 512,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        customLeftArrow={<button className='hover:bg-gray-100 border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute w-8 left-0 -translate-x-1 bg-white h-8 mx-1 rounded-full'>{'<'}</button>}
                        customRightArrow={<button className='hover:bg-gray-100  border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute right-0 translate-x-1 bg-white w-8 h-8 mx-1 rounded-full'>{'>'}</button>}
                        customDot={<button className='bg-gray-400/50 w-2 h-2 mx-1 my-5 rounded-full'></button>}
                        rewind={true}
                        rewindWithAnimation={true}
                        shouldResetAutoplay={true}
                        showDots={true}
                        slidesToSlide={1}
                        swipeable={true}
                    >

                        {
                            data.map((card,index) => {
                                return (
                                    <div key={index} className='w-full rounded-lg mx-auto flex gap-2'>
                                        <div className='img-quotation flex justify-end place-items-end w-[160px]'>
                                            <img className=' bg-contain w-32 h-32 rounded-lg' src={card.image} />
                                        </div>
                                        <div className=' flex flex-col gap-2 p-4 flex-1'>
                                            <p className='text-2xl font-semibold'></p>
                                            <p className='text-lg font-normal text-gray-500'> {card.description} </p>
                                            <div>
                                                <p className='text-xl text-blue-500 font-normal'> {card.name} </p>
                                                <p className='text-xl text-gray-900 font-normal'> Owner - {card.owner} </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Hero3