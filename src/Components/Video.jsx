import React from 'react'

function Video() {
  return (
    <section className='bg-gray-100 py-24 px-12'>
        <div>
            <h1 className='text-center text-2xl md:text-5xl font-semibold'>Use illustrations in UI design</h1>

          <div className='flex justify-center items-center mt-16'>
          <iframe className='object-cover rounded-xl md:w-10/12 w-full md:h-[535px] h-[350px]'src="https://www.youtube.com/embed/egZLn0qcBZo?si=Pd-qW7Tb0isWlV00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    </section>
  )
}

export default Video