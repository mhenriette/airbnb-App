import groupPic from '../assets/Group 77.png'
import EXPERIENCES from '../data/experiences';
import Card from "./Card";

const Hero = () => {
    return <div className="my-10 flex flex-col justify-center items-center gap-y-5">
        <div className="flex py-5">
            <img src={groupPic} alt='group pic' />
        </div>
        <div className='w-1/4 self-center mb-5'>
            <h1 className='font-semibold text-4xl'>Online Experiences</h1>
            <p className='mt-3'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
        <div className="flex gap-x-10">
            {EXPERIENCES.map(experience => {
                return <Card {...experience} />
            })}
        </div>

    </div>;
};

export default Hero;
