import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '@firebase/app-compat';
import 'firebase/compat/firestore';

const ChatSection = ({auth, firestore, topic}) => {
    const dummy = useRef();
    const messagesRef = firestore.collection(topic);
    const query = messagesRef.orderBy('createdAt');
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL, displayName } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main className="chat-message">
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage} className="form-message">
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Enter message..." className="input-form"/>
        
      </form>
    </>)

function ChatMessage(props) {
    const { text, uid, displayName, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <ul className="text-message">
            <li><p className="font-bold text-sm">{displayName}</p></li>
            <li><p>{text}</p></li>
        </ul>
      </div>
    </>)
  }
  }
  
  

  

export default ChatSection;