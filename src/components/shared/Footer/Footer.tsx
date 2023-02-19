import Logo from '../../../assets/logo-white.svg'
import faceBookIcon from '../../../assets/icon-facebook.svg'
import instagramIcon from '../../../assets/icon-instagram.svg'
import pinterestIcon from '../../../assets/icon-pinterest.svg'
import twittertIcon from '../../../assets/icon-twitter.svg'
import youtubetIcon from '../../../assets/icon-youtube.svg'
import useMediaQuery from '../../../utils/useMediaQuery'
const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <footer className=" p-6 bg-veryDarkBlue">
            {/* Left Side */}
            <div className='w-5/6 flex justify-between px-6 py-6 mx-auto'>
                
                <div className='flex items-start flex-row gap-24 mt-6'>

                    <div className='flex flex-col gap-20'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='flex flex-row gap-6 '>
                            <a href=""><img src={faceBookIcon} alt="" /></a>
                            <a href=""><img src={youtubetIcon} alt="" /></a>
                            <a href=""><img src={twittertIcon} alt="" /></a>
                            <a href=""><img src={pinterestIcon} alt="" /></a>
                            <a href=""><img src={instagramIcon} alt="" /></a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <a href="" className='text-white'>Home</a>
                        <a href="" className='text-white'>Pricing</a>
                        <a href="" className='text-white'>Products</a>
                        <a href="" className='text-white'>About Us</a>
                    </div>

                </div>

                {/* Right Side */}

                <div className='flex flex-row gap-8 items-center'>

                    <div className='flex flex-col gap-3'>
                        <a href="" className='text-white'>Careers</a>
                        <a href="" className='text-white'>Community</a>
                        <a href="" className='text-white'>Privacy Policy</a>
                    </div>


                    <div className='relative'>
                        <input className=' px-6 py-2 rounded-full' type="text" placeholder='Updates in your inbox...' />
                        <button className=" ml-2 px-5 rounded-full bg-brightRed p-3 transition text-white hover:text-black">Go</button>
                    </div>

                </div>

            </div>

        </footer>

    )

};
export default Footer;