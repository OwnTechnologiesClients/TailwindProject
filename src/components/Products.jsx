import React from 'react'
import aboutImg from '../assets/mobile-login.png'
import maecenasImg from '../assets/maecenas.png'


const Products = () => {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center 
                gap-12'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                            How to design your site footer like we did
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
                            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
                            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
                            facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
                            urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
                            quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
                            libero. Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className='btn-primary'>
                            Learn More
                        </button>

                    </div>
                </div>

            </div>

            {/* company states */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' >
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                    <img alt='' src={maecenasImg} />

                    </div>

                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                                lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                                Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                                in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                                Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                                Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
                                sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
                                Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat
                                ante feugiat eget. Quisque vulputate odio neque, eget efficitur
                                libero condimentum id. Curabitur id nibh id sem dignissim
                                finibus ac sit amet magna.
                            </p>
                            <h5 className='text-brandPrimary text=x1 font-semibold mb-2'>Tim Smith</h5>
                            <p className=''>British Dragon Boat Racing Association</p>
                        </div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img alt='' src='/src/assets/company1.png' className='cursor-pointer' />
                            <img alt='' src='/src/assets/company2.png' className='cursor-pointer' />
                            <img alt='' src='/src/assets/company3.png' className='cursor-pointer' />
                            <img alt='' src='/src/assets/company4.png' className='cursor-pointer' />
                            <img alt='' src='/src/assets/company5.png' className='cursor-pointer' />
                            <img alt='' src='/src/assets/company6.png' className='cursor-pointer' />
                            <div className='flex items-center gap-8'>
                                <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>
                                    Meet all customers <svg
                                        width="9"
                                        height="9"
                                        viewBox="0 0 9 9"
                                        fill="none"
                                        className='inline-block ml-2'
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.68938 5.47757L6.78877 4.37819C6.91915 4.2478 6.91915 4.03641 6.78877 3.90603L5.68938 2.80664M6.69098 4.14211L2.01685 4.14211"
                                            stroke="#4CAF4F" />
                                    </svg>

                                </a>
                            </div>
                        </div>


                    </div>


                </div>

            </div>


        </div>
    )
}

export default Products