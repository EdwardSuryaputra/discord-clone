import ChatSection from "./chatSection";
import TopNavigation from "./topNavigation";

const ChatPage = ({auth, firestore}) => {
    return auth.currentUser && (
      <div className="chat-page">
        <TopNavigation auth={auth}/>
        <ChatSection auth={auth} firestore={firestore}/>
      </div>
    )
  }

export default ChatPage;