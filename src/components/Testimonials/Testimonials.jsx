/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
    {id: 1, name: "Victor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/101/101"},
    {id: 2, name: "Staya Nadella", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/102/102"},
    {id: 3, name: "Virat Kohli", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/103/103"},
    {id: 4, name: "Victor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/104/104"},
    {id: 5, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/103/103"},
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
      };
  return (
    <div className='py-10 mb-10'>
        <div className="container">
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
                </p>
            </div>
            {/* Body Section */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialsData.map((data) => (
                        <div key={data.id} className='my-6'>
                            <div className='flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl \
                            dark:bg-gray-800 bg-primary/10 relative'>
                                <div className='mb-4 '>
                                    <img src={data.img} alt="" className='w-20 h-20 rounded-full' />
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-400 line-clamp-3'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-light dark:text-white'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='absolute top-0 right-0 font-serif text-black/20 text-9xl'>,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials