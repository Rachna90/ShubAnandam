import React from 'react'
import Accordion from '../components/Accordion'
import chairImage from '/images/chair.png'
import PSlide from '../components/PSlide'
import Gmap from '../components/Gmap'

import 'swiper/css'
const Home = () => {
  return (
    <>
    {/* Banner Section Start */}
      <div className='heroImage'>
        <div className='container  mx-auto px-[65px]'>
          <div className='w-full'>
            <h1 className='  text-[42px] sm:text-[42px] lg:text-[68px] font-bold leading-[120%] pb-[20px] lg:pr-[60%] sm:pr-[0%]'>Live the Anandam Life</h1>
            <p className='lg:text-3xl text-2xl uppercase pb-[20px]  leading-[150%] lg:pr-[65%]'>2 & 3 BHK Luxury Builder Floors in Modipuram, Meerut</p>
            <div className='bg-[linear-gradient(90deg,_rgba(133,36,56,1)_0%,_rgba(31,8,13,1)_100%)] py-4 px-3 text-[11px] lg:text-[30px] font-medium text-[#DABF70] flex gap-[13px] lg:w-[60%]'>
              <span>Freehold</span>|
              <span>RERA Registered</span>|
              <span>Bank Loan Approved</span>
            </div>
          </div>
        </div>
      </div>
       {/* Banner Section END */}


        {/* whyChoose Section Start */}
      <section className='whyChoose'>
        <div className='container mx-auto lg:px-[65px] sm:px-[30px] px-[30px] lg:py-[80px] py-[50px]'>
          <div className='w-ful lg:w-[1058px] pb-[30px]'>
            <h2 className='primary-color lg:text-[36px] text-[26px] font-semibold uppercase mb-4' >Why Choose Anandam Floors?</h2>
            <p className='text-[24px] text-[rgb(0_0_0_/_60%)]'>Experience the joy of <span className='font-semibold '>elevated living</span> with Shubhanandam Group’s flagship project — a thoughtfully planned community offering luxury, privacy, and comfort at an unmatched value.</p>
          </div>


          <div className='flex gap-4 justify-between w-full lg:flex-row flex-col'>
            <div className='lg:w-[70%] flex gap-4 w-full flex-col'>
              <Accordion />
            </div>
            <div className='lg:w-[30%] w-full'>
              <img src={chairImage} alt='chairImage' data-aos="zoom-in" />
            </div>
          </div>
        </div>
      </section>
 {/* whyChoose Section END */}

       {/* ABOUT Section Start */}
      <section className='aboutSec'>
        <div className='container mx-auto lg:px-[65px] px-[30px] lg:py-[80px] py-[60px]'>
          <div className='w-full max-w-4xl m-auto'>
            <p className='text-[24px] uppercase'>About</p>
            <h3 className='lg:text-[36px] text-[26px] text-[#DABF70] font-semibold uppercase mb-[10px]'>Shubhanandam Group</h3>
            <p className='leading-[40px] text-[20px]'>A real estate brand committed to <span className='font-semibold'>affordable luxury, quality craftsmanship</span>, and <span className='font-semibold'>timely delivery</span>, Shubhanandam Group is redefining residential living in Tier-2 cities. Backed by a strong leadership team and a mission to deliver over <span className='font-semibold'>100,000 homes by 2025</span>, the group is trusted by hundreds of homeowners across Meerut.</p>
          </div>
        </div>
      </section>
{/* ABOUT Section END */}

      {/* PROJECT Section START */}
      <section className='project'>
        <div className='container mx-auto lg:px-[65px] px-[30px] lg:py-[80px] py-[60px]'>
          <div className='w-full max-w-4xl text-center m-auto'>
            <h3 className='text-[36px] primaryColor font-semibold uppercase mb-[20px]'>Projects</h3>
            <p className='lg:text-[27px] text-[20px] text-black uppercase'>Explore spacious layouts with smart design, natural ventilation, and modern interiors.</p>
          </div>
          <PSlide />

        </div>
      </section>
       {/* PROJECT Section END */}


        {/* Enquire Section START */}
      <section className='enquireSec lg:py-[80px] py-[60px]'>
        <div className='container mx-auto lg:px-[65px] px-[30px] '>
          <div className='w-full max-w-3xl text-center m-auto'>
            <h4 className='text-white text-[20px] lg:text-[36px]  font-semibold mb-[20px] capitalize'>Your dream home awaits! Fill the form and let us take care of the rest.</h4>
          </div>
          <div className='bg-white w-full max-w-2xl px-5 py-[30px] mx-auto rounded-[30px] '>
            <h6 className='text-[28px] font-medium text-[#DABF70] pb-[30px] text-center uppercase'>Enquire Now</h6>
            <form className=''>
             {/* flex row */}
    <div className=''>

                <div className='flex px-2 mb-4 justify-between gap-4 lg:flex-row flex-col'>
                  <input type='text' id="name" placeholder='Name'
                    className='border border-[#D1D1D1] rounded-[4px] w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D1D1D1]  placeholder-[rgba(0,0,0,0.6)]'
                  />
                   <input type='Email' id="email" placeholder='Email'
                    className='border border-[#D1D1D1] rounded-[4px] w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D1D1D1]  placeholder-[rgba(0,0,0,0.6)]'
                  />
                </div>
                <div className='flex px-2 mb-4 justify-between gap-4 lg:flex-row flex-col'>
                 <input type='Phone' id="phone" placeholder='Phone'
                    className='border border-[#D1D1D1] rounded-[4px] w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D1D1D1]  placeholder-[rgba(0,0,0,0.6)]
                    '
                  />
                  <input type='Preferred Time' id="preferredtime" placeholder='Preferred Time'
                    className='border border-[#D1D1D1] rounded-[4px] w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D1D1D1]  placeholder-[rgba(0,0,0,0.6)]' 
                  />
                </div>
                <div className='w-full px-2 mb-4'>
                  <textarea id="message" name='message' rows='4' col='3'
                    className='border border-[#D1D1D1] rounded-[4px] w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#D1D1D1]  placeholder-[rgba(0,0,0,0.6)]'
                  >Message</textarea>
                </div>
<div className='text-center'>
              
              <button className='bg-[#852438] px-[20px] py-[12px] rounded-[50px] hover:bg-[#DABF70] hover:shadow-xl hover:scale-102
  transition duration-300 ease-in-out'>Book a Site Visit Now</button>
  </div>

              </div>
            </form>
          </div>
        </div>
      </section>
 {/* Enquire Section END */}


      <section className='map-wrap lg:py-0 pb-5'>
        <div className='container mx-auto lg:pl-[65px] px-[0]'>
          <div className='flex gap-[35px] lg:flex-row flex-col'>
            <div className='lg:w-1/2 lg:py-[80px] pt-[60px] pb-[0]'>
              <h6 className='lg:text-[36px] text-[28px] text-[#852438] font-semibold uppercase mb-[10px]'>Location Advantage</h6>
              <p className='text-[26px] uppercase  mb-[40px]'>Modipuram, Meerut – The New Urban Hub</p>
              <ul >
                <li className="li-style">
                  <i class="ri-roadster-line"></i>
                  <p>NH-58 & Delhi–Dehradun Expressway Access</p>
                </li>
                <li className="li-style">
                  <i class="ri-roadster-line"></i>
                  <p>Proposed Meerut Metro Station nearby</p>
                </li>
                <li className="li-style">
                  <i class="ri-roadster-line"></i>
                  <p>15 minutes to City Centre</p>
                </li>
                <li className="li-style">
                  <i class="ri-roadster-line"></i>
                  <p>Seamless Delhi-NCR Connectivity</p>
                </li>
              </ul>
            </div>
            <div className='lg:w-1/2'>
              <Gmap/>
            </div>
          </div>
        </div>
      </section>
      <section className='trust'>
         <div className='container mx-auto px-[30px] lg:px-[60px] lg:py-[80px] py-[30px]'>
          <div className='flex justify-center items-center gap-5 lg:flex-row flex-col'>
          <div className='lg:w-1/3 w-full'>
          <div className='box bg-[#fff] gap-[20px] rounded-[20px] p-[20px]'>
  
            <i className="ri-lock-2-line text-[56px]"></i>
            <h6 className='text-[24px] font-medium'>100% Transparency</h6>
            
          </div>
          </div>
          <div className='lg:w-1/3 w-full'>
          <div className='box bg-[#fff] gap-[20px] rounded-[20px] p-[20px]'>
  
            <i className="ri-lock-2-line text-[56px]"></i>
            <h6 className='text-[24px] font-medium'>Trusted Developer</h6>
            
          </div>
          </div>
          <div className='lg:w-1/3 w-full'>
          <div className='box bg-[#fff] gap-[20px] rounded-[20px] p-[20px]'>
  
            <i className="ri-lock-2-line text-[56px]"></i>
            <h6 className='text-[24px] font-medium'>Ready-to-Move Options</h6>
            
          </div>
          </div>
          
          
          </div>
         </div>
      </section>
    </>
  )
}

export default Home