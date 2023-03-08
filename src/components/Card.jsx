import star from '../assets/Star.svg'

const Card = ({ cover, status, rate, category, text, price }) => {
    return <div className="flex flex-col">

        <div className="relative">
            <img src={cover} alt='image' className="w-full h-[235px]" />
            <p className="absolute top-0 px-2 py-0.5 bg-gray-200 rounded-sm m-2">{status}</p>
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-1 ">
                <img src={star} alt="star" />
                <p className="flex text-[#918E9B] gap-x-1">
                    <span className="text-black">{rate}</span>
                    <span>{category}</span>
                    .USA
                </p>
            </div>
            <p>{text}</p>
            <div>
                <p><span className="font-bold">{price}</span> / person</p>
            </div>
        </div>
    </div>;
};

export default Card;
