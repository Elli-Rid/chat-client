import * as React from "react";
import connect from "react-redux/es/connect/connect";
import Message from "./Message";


class Messages extends React.Component {

    render() {
        return (
            <div className={'messages-list'}>{this.props.messages.map((item, index) => {
                return <div
                    key={index}
                    className={`message-box-${item.chatId === 1 ? 'right' : 'left'}`}
                >
                    <Message
                        position={item.chatId === 1 ? 'right' : 'left'} // TODO: compare with current user (support manager)
                        type={'text'}
                        text={item.message}
                        date={null}
                    />
                </div>
            })}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps)(Messages)
