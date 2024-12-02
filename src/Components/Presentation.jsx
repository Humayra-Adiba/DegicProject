import React from 'react'
import { ArrowForward } from "@mui/icons-material";

function Presentation() {
    const CardData = [
        {
            source: "fldocs.png",
            heading: "Managment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            
        }, 
        {

            source: "flgame.png",
            heading: "Entertainment",
            text: "Curabitur ac risus non dolor elementum consectetur.",
          },
          {
            source: "flcamera.png",
            heading: "Marketing",
            text: "Suspendisse potenti. Nulla facilisi.",
          },
          {
            source: "flwatch.png",
            heading: "References",
            text: "Vestibulum ante ipsum primis in faucibus.",
          },
        


    ];

  const socialLinks  = [
    {Link:"fb.png"},
    {Link:"insta.png"},
    {Link:"tw.png"},
  ]  

  return (
    <section className='bg-gray-50'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto'>
            {/* left section */}
            <div className='grid grid-cols-1  sm:grid-cols-2 gap-6 w-full lg:w-1/2 '>
                {CardData.map((card, index)=> (
                    <div 
                        key={index}
                        className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center'>

                        <div className='flex items-center justify-center'>
                            <img src={card.source} alt="" />
                        </div>

                        <div>
                            <h3 className='text-black text-lg md:text-xl font-semibold'>{card.heading}</h3>
                            <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
                 {/* right section */}
            <div className='w-full lg:w-1/2 md:text-center space-y-6'>
                <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md text-center lg:text-start lg:max-0'>The quickest way to create modern presentation</h1>

                <p className='text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base text-center lg:text-start'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

                      
                        <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-200 mx-auto sm:mx-0">

                        Explore All
                        <ArrowForward sx={{ fontSize: 24 }} />
                      </button>
                      


                      <p className='text-gray-500 !mt-[85px] text-center lg:text-start'>Follow us</p>

                      <div className='flex justify-center lg:justify-start gap-4 mt-6 items-center'>
                        {socialLinks.map((social, index) => (
                                <a key={index} className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300'>
                                    <img className='w-[30px] h-[30px]' src={social.Link} alt="" />
                                </a>
                            ))
                        }
                      </div>
            </div>
        </div>
    </section>
  )
}

export default Presentation