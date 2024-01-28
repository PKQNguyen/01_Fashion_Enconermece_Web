/* eslint-disable no-unused-vars */
import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-pattern.jpg"
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {id: 1, title: "Home", link: "/#"},
    {id: 2, title: "About", link: "/#about"},
    {id: 3, title: "Contact", link: "/#contact"},
    {id: 4, title: "Blog", link: "/#blog"},
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white '>
        <div className='container'>
            <div data-aos="zoom-in"
            className='grid pt-5 md:grid-cols-3 pb-44'>
                {/* Company Information */}
                <div className='px-4 py-8'>
                    <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
                        <img src={footerLogo} alt="" className='max-w-[50px]' />
                        Shopy
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                </div>
                {/* Footer Links */}
                <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
                    <div>
                        <div className='px-4 py-8'>
                            <h1 className='mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li key={link.id} className='text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='px-4 py-8'>
                            <h1 className='mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li key={link.id} className='text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>District Ninh Kieu, Can Tho City.</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt/>
                                <p>(+84) 336761552</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer