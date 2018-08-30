import * as React from "react";
import {Input, Button} from 'react-chat-elements'
import connect from "react-redux/es/connect/connect";
import {sendMessage} from "../actions/messagesActions";


class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputValue = React.createRef()
    }

    _sendMessage = () => {
        if (this.inputValue.state.value.length > 0) {
            this.props.dispatch(this.inputValue.state.value, (Math.random() > 0.5) ? 1 : 0);  // TODO: Change after ws
            this.inputValue.clear();
        }
    };

    render() {
        return (
            <Input
                placeholder="Type here..."
                multiline={true}
                ref={el => this.inputValue = el}
                onKeyPress={this._keyPress}
                rightButtons={
                    <Button
                        text='Send'
                        onClick={this._sendMessage}
                    />
                }
            />
        )
    }

    _keyPress = (e) => {
        if (e.shiftKey && e.charCode === 13) {
            return true;
        }
        if (e.charCode === 13) {
            this._sendMessage();
            e.preventDefault();
            return false;
        }
    }
}


const mapDispatchToProps = dispatch => ({
    dispatch: (message, chatId) => {
        dispatch(sendMessage(message, chatId)) // TODO: Change after ws
    }
});

export default MessageInput = connect(() => ({}), mapDispatchToProps)(MessageInput);
