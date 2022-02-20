import { MdArrowForwardIos} from 'react-icons/md';


const ChannelBar = () => {
    return(
        <div className="fixed top-0 left-16 h-screen m-0 flex flex-col bg-gray-800 text-white shadow-2xl w-56">
            <h1 className="ml-5 mt-4 text-lg text-gray-300"><b>Channels</b></h1>
            <div>
                <button className="button-channel group"><ChannelArrowLogo icon={<MdArrowForwardIos size="15"/>}/>
                <b className="pl-2">Topics</b></button>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

const ChannelArrowLogo = ({icon}) => (
    <div className="channel-arrow-logo group-hover:rotate-90">
        {icon}
    </div>
);

export default ChannelBar;