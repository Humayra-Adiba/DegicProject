import React from 'react'

function Hero() {
    return (
    <>
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto'>

        <div className='flex-1 flex flex-col items-start gap-8'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg mt-2'>Simply explained with illustrations</h1>

            <p className='text-base sm:text-lg lg:text-xl text-gray-500 max-w-md mt-[-20px]  lg:mt-4'>There are a lot of different components that will help you create the perfect look for your project</p>

            <div className='flex gap-3 flex-wrap'>
                <button className='bg-[#5F62E2] hover:bg-green-700 text-white rounded-lg font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300'>Get Started</button>

                <button className='bg-indigo-100 hover:bg-green-600 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition duration-300 text-[#5F62E2]'>Learn More</button>
            </div>
            
        </div>

            <div className='flex-1'>
            <img className='w-full h-auto max-w-lg' src="/Component1.png" alt="Rocket illustration" />
            </div>
        
        </section>
    </> )
}

export default Hero