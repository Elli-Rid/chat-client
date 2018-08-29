import React from "react";
import '../../assets/css/bootstrap.css'
import Chats from "./components/Chats";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";


const ChatClient = () => (
    <div className={'row'}>
        <div className={'col-md-3'}><Chats/></div>
        <div className={'col-md-6 messages-container'}>
            <Messages/>
            <div style={{position: 'absolute', bottom: 0, width: '100%', height: '50px'}}><MessageInput/></div>
        </div>
        <div className={'col-md-3'}></div>
    </div>
);

export default ChatClient
