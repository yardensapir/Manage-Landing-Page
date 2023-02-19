import Logo from '../../../assets/logo.svg'
import barsMenu from '../../../assets/icon-hamburger.svg'
import useMediaQuery from '../../../utils/useMediaQuery'



const NavBar = () => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
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
                    (<button className='rounded-full '>
                        <img src={barsMenu} alt="" />
                    </button>)}
            </div>

        </nav>
    )

}

export default NavBar