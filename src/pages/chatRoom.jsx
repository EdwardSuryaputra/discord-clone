import SideBar from '../components/ sideBar';
import ChannelBar from '../components/channelBar';

const ChatRoom = ({auth, firestore}) => {
  return (
    <div className="flex">
      <SideBar/>
      <ChannelBar auth={auth} firestore={firestore}/>
    </div>
  );
}

export default ChatRoom;
