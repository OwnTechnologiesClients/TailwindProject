import React from 'react'

const Blog = () => {

    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/blog1.png" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/blog2.png" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog3.png" },
    ]


    return (
        <div className='px-4 lg:px14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>

                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Caring is the new marketing
                </h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                    The Nextcent blog is the best place to read about the latest membership
                    insights, trends and more. See who's joining the community, read about how
                    our community are increasing their membership income and lot's more.
                </p>
            </div>

            {/* All blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                        <div className='text-center px-4 py-2 bg-white shadow-lg rounded-md md:w-3/4 
                            mx-auto absolute left-0 right-0 -bottom-2'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>
                                    Readmore <svg
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
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog