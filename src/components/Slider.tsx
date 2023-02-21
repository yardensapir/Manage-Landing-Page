import Avatar from './shared/Avatar';
import avatar1 from '../assets/avatar-anisha.png'
import avatar2 from '../assets/avatar-ali.png'
import avatar3 from '../assets/avatar-richard.png'
import avatar4 from '../assets/avatar-shanai.png'
import HText from './shared/htext/HText';
import useMediaQuery from '../utils/useMediaQuery';
const Slider = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return <section className='mt-2 mx-auto p-6'>
        <div className="text-center mb-12 py-2">
            <HText>What they've said</HText>
        </div>

        {isAboveMediumScreens ?
            <>
                <div className={isAboveMediumScreens ? "flex gap-10 justify-evenly p-2 text-center " : "text-center px-2"}>
                    <Avatar image={avatar1} name="Anisha Li" description=' See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.' />
                    <Avatar image={avatar2} name="Ali Bravo" description='See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.' />
                    <Avatar image={avatar3} name="Richard Watts" description='See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.' />
                    <Avatar image={avatar4} name="Shanni Gough" description='See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.' />

                </div>
                <div className='text-center relative mt-10'>
                    <button className="rounded-full bg-brightRed p-3 transition text-white hover:text-black">Get Started</button>
                </div>
            </> :
            <>
                <Avatar image={avatar2} name="Ali Bravo" description='See how your day-to-day tasks fit into wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.' />
                <div className='text-center mt-3 mb-3'>
                    <button className="rounded-full bg-brightRed p-3 transition text-white hover:text-black">Get Started</button>
                </div>

            </>


        }

    </section>
};
export default Slider;