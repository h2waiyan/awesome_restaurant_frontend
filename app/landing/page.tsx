import React from 'react'
import Footer from '../footer/page'

const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div id='home' className='flex flex-row justify-center items-center h-full' >
                    <div className='ms-10 items-start'>
                        <div id='text' className='text-white text-lg font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
                            Awesome Restaurant
                        </div>

                        <div className='my-3'>
                            <p className='text text-white-100'>
                                Well-crafted at every touch point by your experience manager.
                            </p>
                        </div>

                        <div>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div id='img'>
                        <img
                            src="/images/curry.jpeg"
                            alt="curry_img"
                            width={500}
                            height={300}
                            className="rounded-md p-3"
                        />
                    </div>
                </div>

                <div id='services' className='flex flex-row justify-center items-center h-full ps-15'>
                    <div className='ms-10'>
                        <img
                            src="/images/chef.jpg"
                            alt="chef_img"
                            width={500}
                            height={300}
                            className="rounded p-13"
                        />
                    </div>

                    <div className='ms-20'>
                        <div className='text-white text-lg font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
                            The Chef
                        </div>

                        <div className='my-3'>
                            <p className='text text-white-100'>
                                Access to local and internationally recognized and celebrity chefs in one place.
                            </p>
                        </div>

                        <div>
                            <p>

                                We created a selected list of Chefs that have never been available for private use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default LandingPage