import Logo from '../../../assets/logo.svg'
import closeMenu from '../../../assets/icon-close.svg'
import barsMenu from '../../../assets/icon-hamburger.svg'
import useMediaQuery from '../../../utils/useMediaQuery'
import { useState } from 'react'



const NavBar = () => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    return (
        <nav className="mx-auto w-5/6">

            <div className={`${flexBetween}`}>


                <div className="py-6">
                    <img src={Logo} alt="" />
                </div>

                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-8/12`}>
                        <div className={`${flexBetween} gap-12`}>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">pricing</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">product</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">about us</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">community</a>
                        </div>

                        <div>
                            <button className=" rounded-full bg-brightRed p-3 transition text-white hover:text-black">Get Started</button>
                        </div>

                    </div>
                ) :
                    (<button className='z-20' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img src={isMenuToggled ? "" : barsMenu} alt="" />
                    </button>)}
            </div>
            {
                !isAboveMediumScreens && isMenuToggled && (



                    <div className='fixed right-0 top-0 p-6 gap-10 text-lg w-full h-full drop-shadow-md backdrop-opacity-10 backdrop-invert '>
                        <div onClick={() => setIsMenuToggled(!isMenuToggled)} className='flex justify-end cursor-pointer '>
                            <img src={closeMenu} alt="" />
                        </div>
                        <div className='flex flex-col w-full h-60 mt-12 bg-white justify-center items-center'>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">pricing</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">product</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">about us</a>
                            <a className='hover:text-darkGrayishBlue transition duration-500' href="">community</a>
                        </div>

                    </div>


                )
            }

        </nav>
    )

}

export default NavBar