import React from 'react'

const Newsletter = () => {
    return (
        <div className='px-4 lg:px max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                        How to design your site footer like we did
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='btn-primary text-white'> Get a Demo
                            <svg 
                            className='inline-block ml-2'
                            width="14"
                                height="8"
                                viewBox="0 0 51 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.00524902" y="0.00817871" width="50.3675" height="18.3483" rx="1.33547" fill="#4CAF4F" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter