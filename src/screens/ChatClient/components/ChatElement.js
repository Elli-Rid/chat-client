import * as React from "react";
import {ChatItem} from "react-chat-elements";

export default class ChatElement extends React.Component {
    render() {
        return <ChatItem
            avatar={this.props.avatar}
            alt={'chat'}
            title={this.props.title}
            date={this.props.date}
            onClick={this.props.onClick}
            unread={this.props.unread}/>

    }
}
