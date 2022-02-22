import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import ChatPage from './chatPage';


const topics = ['chill-room', 'gaming-room', 'studying-room'];

const ChannelBar = ({auth, firestore}) => {
    const [topic, setTopic] = useState("chill-room");

    return(
        <div>
            <div className="fixed top-0 left-16 h-screen m-0 flex flex-col bg-gray-800 text-white shadow-2xl w-56">
                <h1 className="ml-5 mt-4 text-lg text-gray-300"><b>Channels</b></h1>
                <div className='channel-container'>
                    <Dropdown header='Topics' selections={topics} topic={topic} setTopic={setTopic}/>
                </div>

            </div>
            <ChatPage auth={auth} firestore={firestore} topic={topic}/>
        </div>
        
    );
};

const Dropdown = ({ header, selections, topic, setTopic }) => {
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
          selections.map((selection) => <TopicSelection selection={selection} topic={topic} setTopic={setTopic}/>)}
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
  
const TopicSelection = ({ selection, topic, setTopic }) => {

    return (
        <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />
        <button className='dropdown-selection-text' onClick={() => setTopic(topic = selection)}>{selection}</button>
      </div>
    );
};
export default ChannelBar;