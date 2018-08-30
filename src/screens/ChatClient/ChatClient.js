import React from "react";
import '../../assets/css/bootstrap.css'
import Chats from "./components/Chats";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";


const ChatClient = () => (
    <div className={'row'}>
        <div className={'col-md-3'}><Chats/></div>
        <div className={'col-md-7 messages-container'}>
            <Messages/>
            <div className={'message-input-container'}><MessageInput/></div>
        </div>
        <div className={'col-md-2 info-container'}></div>
    </div>
);

export default ChatClient
