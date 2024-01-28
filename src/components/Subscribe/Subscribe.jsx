/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div data-aos="zoom-in"
    className='mb-20 text-white bg-gray-100 dark:bg-gray-800'
    style={BannerImg}
    >
        <div className='container py-10 backdrop-blur-sm'>
            <div className='max-w-xl mx-auto space-y-6'>
                <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                <input type="text" data-aos="fade-up" placeholder='Enter your email' className='w-full p-3 text-gray-900 rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe