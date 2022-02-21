import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';


const topics = ['tailwind-css', 'react'];

const ChannelBar = () => {
    return(
        <div className="fixed top-0 left-16 h-screen m-0 flex flex-col bg-gray-800 text-white shadow-2xl w-56">
            <h1 className="ml-5 mt-4 text-lg text-gray-300"><b>Channels</b></h1>
                {/* <button className="button-channel group"><ChannelArrowLogo icon={<MdArrowForwardIos size="15"/>}/>
                <b className="pl-2">Topics</b></button> */}
            <div className='channel-container'>
                <Dropdown header='Topics' selections={topics} />
            </div>

        </div>
    );
};

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);
  
    return (
      <div className='dropdown'>
        <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
          <ChevronIcon expanded={expanded} />
          <h5
            className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
          >
            {header}
          </h5>
        </div>
        {expanded &&
          selections &&
          selections.map((selection) => <TopicSelection selection={selection} />)}
      </div>
    );
  };

  const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-2 ml-2';
    return expanded ? (
      <FaChevronDown size='14' className={chevClass} />
    ) : (
      <FaChevronRight size='14' className={chevClass} />
    );
  };
  
  const TopicSelection = ({ selection }) => (
    <div className='dropdown-selection'>
      <BsHash size='24' className='text-gray-400' />
      <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
  );
export default ChannelBar;