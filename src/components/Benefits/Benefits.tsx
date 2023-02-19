import HText from "../shared/htext/HText"
import Benefit from "./Benefit"
import useMediaQuery from "../../utils/useMediaQuery"

type Props = {}

const Benefits = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section className={isAboveMediumScreens? "flex justify-between px-6 gap-60" : "flex flex-col justify-between px-6"}>
            {/* left side */}
            <div className="flex flex-col py-2 mb-6 gap-3">
                <HText>
                    What's different about Manage?
                </HText>
                <p>Manage provides all the functionality your team needs,without the complexity. Our software is tailer-made for modern digital product teams</p>
            </div>
            {/* right side */}

            <div className="mt-2">
                <Benefit title="Track company-wide progress" bulletNumber={"01"} text="See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again." />
                <Benefit title="Advanced built-in reports" bulletNumber={"02"} text="See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again." />
                <Benefit title="Everything you need in one place" bulletNumber={"03"} text="See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again." />
            </div>

        </section>
    )
}

export default Benefits