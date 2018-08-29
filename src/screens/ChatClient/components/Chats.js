import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {ChatList} from "react-chat-elements";
import {DEFAULT_AVATAR} from "../../../app.constants";

class Chats extends React.Component {
    render() {
        return (
            <ChatList
                className='chats-list'
                dataSource={this.props.chats.map(item => {
                    return {
                        chatId: item.id,
                        title: item.title,
                        avatar: DEFAULT_AVATAR,
                        alt: 'chat',
                        unread: 0,
                        date: null
                    }
                })}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chats,
    };
};

export default connect(mapStateToProps)(Chats)
