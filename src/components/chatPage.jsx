import ChatSection from "./chatSection";
import TopNavigation from "./topNavigation";

const ChatPage = ({auth, firestore, topic}) => {
    return auth.currentUser && (
      <div className="chat-page">
        <TopNavigation auth={auth}/>
        <ChatSection auth={auth} firestore={firestore} topic={topic}/>
      </div>
    )
  }

export default ChatPage;