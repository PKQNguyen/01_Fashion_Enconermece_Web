/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa"

const ProductsData = [
    {id: 1, img: Img1, title: "Casual Wear", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"},
    {id: 2, img: Img2, title: "Printed Shirt", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"},
    {id: 3, img: Img3, title: "Women Shirt", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"},
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
            <div className='mb-24 text-left'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
                </p>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 gap-5 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center md:gap-5'>
                {
                    ProductsData.map((data) => (
                        <div key={data.id} data-aos="zoom-in"
                        className=' rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]
                        '>
                            {/* Image Section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt=""
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                            </div>
                            {/* Detail Section */}
                            <div className='p-4 text-center'>
                                {/* Star Rating */}
                                <div className='flex items-center justify-center w-full'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2'>{data.desc}</p>
                                <button className='px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary'
                                onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts