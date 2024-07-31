import React from 'react'

const Hero2 = () => {
    const tools = [
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-7_1.png',
            name:'Angleizer Template Tool',
        },
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-9_1.jpg',
            name:'Groommets'
        },
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-10.png',
            name:'Jigs and Fixtures'
        },
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-11.png',
            name:'Measuring and Layout Tools'
        },
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-12.png',
            name:'Lasers Tape Measures'
        },
        {
            image:'https://generaltools.com/media/wysiwyg/screenshot-8.jpg',
            name:'Infrared Thermometers'
        }
    ]
    return (
        <>
            <h1 className='text-5xl text-center my-10'>Specialized Hand Tools and Instruments</h1>
            <div className='p-10 max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {
                    tools.map((tool,index) => {
                        return (
                            <div key={index} className='flex justify-center items-center flex-col gap-4 hover:opacity-80 cursor-pointer '>
                                <img className='w-full rounded' src={tool.image} />
                                <h1 className='text-2xl text-center'>{tool.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Hero2