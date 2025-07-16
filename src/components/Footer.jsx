import logo from '/images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container mx-auto lg:px-[65px] sm:px-[30px] px-[30px] lg:py-[80px] py-[50px]'>
                    <div className='flex justify-between lg:flex-row flex-col'>
                        <div className='lg:mb-0 mb-[20px]'>
                        <div className='logo w-[194px] h-auto mb-[20px]'>
                            <img src={logo} alt='image' />
                        </div>
                        <div className=''>
                            <h6 className='text-white mb-[20px]'>Follow Us</h6>
                            <ul className='social flex gap-3'>
                                <li className='bg-white flex justify-center items-center w-[44px] h-[44px] rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6'><a href='' ><i class="ri-facebook-fill"></i></a></li>
                                <li className='bg-white flex justify-center items-center w-[44px] h-[44px] rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6'><a href=''><i class="ri-twitter-x-line"></i></a></li>
                                <li className='bg-white flex justify-center items-center w-[44px] h-[44px] rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6 '><a href=''><i class="ri-linkedin-fill"></i></a></li>
                                <li className='bg-white flex justify-center items-center w-[44px] h-[44px] rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6 '><a href=''><i class="ri-instagram-line"></i></a></li>
                            </ul>
                        </div>
                        </div>

                        <div className='text-[#DABF70] lg:mb-0 mb-[20px]'>
                            <h6 className='text-[20px] text-[#DABF70] font-medium mb-[20px]'>Useful Links</h6>
                            <ul className='flex gap-[20px] 	flex-col'>
                                <li className='hover:text-[#f5e7bbd7]'><a href='' >Home</a></li>
                                <li className='hover:text-[#f5e7bbd7]'><a href=''>About Us</a></li>
                                <li className='hover:text-[#f5e7bbd7]'><a href=''>Projects</a></li>
                                <li className='hover:text-[#f5e7bbd7]'><a href=''>Blog</a></li>
                            </ul>
                        </div>
                        <div className='text-[#DABF70] '>
                            <h6 className='text-[20px] text-[#DABF70] font-medium mb-[20px]'>Useful Links</h6>
                            <ul className='flex gap-[20px] 	flex-col'>
                        <li className='hover:text-[#f5e7bbd7] flex '><a className='flex gap-[10px]' href='' ><i class="ri-phone-fill"></i> <p>0120- 350 0832 </p></a></li>
                        <li className='hover:text-[#f5e7bbd7] flex '><a className='flex gap-[10px]' href='' ><i class="ri-map-pin-fill"></i> <p>Near Sector 9, Ansal Town, Modipuram, Meerut </p></a></li>
                        <li className='hover:text-[#f5e7bbd7] flex '><a  className='flex gap-[10px]' href='' ><i class="ri-mail-fill"></i> <p>support@shubhanandam.com </p></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    </div>
            </footer>
            <div className='lg:px-[0] px-[10px] text-[rgba(218,192,112,0.4)] italic bg-[#621110]	text-center py-5'>© Shubh Anandam Pvt Ltd 2025. | All Rights Reserved | Developed by ritzmediaworld.com</div>
        </>
    )
}

export default Footer