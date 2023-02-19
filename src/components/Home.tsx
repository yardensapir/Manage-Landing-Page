import HText from "./shared/htext/HText"
import info from '../assets/illustration-intro.svg'
import useMediaQuery from "../utils/useMediaQuery"

const Home = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");



    return (
        <section className="py-10 mi">

            <div className={`${isAboveMediumScreens ? "flex mx-auto w-5/6 items-center justify-evenly" : "flex flex-col-reverse justify-center p-6"}`}>
                <div className="">
                    <div className="mb-3">
                        <HText>
                            Bring everyone together to build better products
                        </HText>
                    </div>
                    <p className="py-3">Manage makes it simple for software teams to plan day-to-day tasks while kepping the larger team goals in view</p>
                    <button className=" mt-6 rounded-full bg-brightRed p-3 transition text-white hover:text-black">Get Started</button>
                </div>


                <div className="mb-6 ">
                    <img src={info} alt="" />
                </div>
            </div>

        </section>
    )

}

export default Home