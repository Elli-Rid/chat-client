import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {DEFAULT_AVATAR} from "../../../app.constants";
import ChatElement from "./ChatElement";

class Chats extends React.Component {
    state = {activeChatId: null};

    _selectChat = (chatId) => {
        this.setState({activeChatId: chatId})
    };

    render() {
        return (
            <div
                className='chats-list'>
                {this.props.chats.map((item, index) => {
                    return <div
                        className={this.state.activeChatId === item.chatId ? 'active-chat-element' : 'chat-element'}
                        key={index}
                    ><ChatElement
                        avatar={DEFAULT_AVATAR}
                        title={item.title}
                        chatId={item.chatId}
                        unread={1}
                        onClick={() => this._selectChat(item.chatId)}
                        date={new Date()}
                    /></div>

                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chats,
    };
};

export default connect(mapStateToProps)(Chats)
