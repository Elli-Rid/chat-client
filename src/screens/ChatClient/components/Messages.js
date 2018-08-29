import * as React from "react";
import {MessageList} from 'react-chat-elements'
import connect from "react-redux/es/connect/connect";


class Messages extends React.Component {

    render() {
        return (
            <MessageList
                className='messages-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={this.props.messages.map(item => {
                    return {
                        position: item.chatId === 1 ? 'right' : 'left', // TODO: compare with current user (support manager)
                        type: 'text',
                        text: item.message,
                        date: null
                    }
                })}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps)(Messages)
