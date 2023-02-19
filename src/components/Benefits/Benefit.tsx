import useMediaQuery from "../../utils/useMediaQuery"

type Props = {
    bulletNumber: string,
    title: string,
    text: string,
}

const Benefit = ({ bulletNumber, title, text }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <>
            {isAboveMediumScreens ? <div className="flex gap-3 items-start">
                <span className="rounded-full bg-brightRed py-1 px-4 text-white">{bulletNumber}
                </span>
                <div className=" px-2 mb-6 w-5/6">
                    <h3 className=" text-[16px] font-bold">{title}</h3>
                    <p className="">{text}</p>
                </div>
            </div> : <div>


                <div className="flex mt-6 mb-3 items-center rounded-l-full gap-3 bg-veryPaleRed">
                    <span className="rounded-full bg-brightRed py-1 px-4 text-white">{bulletNumber}
                    </span>
                    <h3 className=" text-[15px] font-bold">{title}</h3>
                </div>
                <p>{text}</p>


            </div>

            }
        </>


    )
}

export default Benefit


