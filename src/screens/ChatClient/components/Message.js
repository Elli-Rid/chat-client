import * as React from "react";
import {MessageBox} from "react-chat-elements";

export default class Message extends React.Component {
    render() {
        return <MessageBox
            position={this.props.position}
            type={this.props.type}
            text={this.props.text}
            date={this.props.date}
            onClick={this.props.onClick}
            unread={this.props.unread}/>

    }
}
