import SideBar from '../components/ sideBar';
import ChannelBar from '../components/channelBar';
import ChatPage from '../components/chatPage';

const ChatRoom = ({auth, firestore}) => {
  return (
    <div className="flex">
      <SideBar/>
      <ChannelBar/>
      <ChatPage auth={auth} firestore={firestore}/>
    </div>
  );
}

export default ChatRoom;
