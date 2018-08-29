import {MESSAGE_RECEIVED, SEND_MESSAGE} from "../constants/actionTypes";

const messages = (state = [], action) => {
    switch (action.type) {
        case SEND_MESSAGE: // TODO: remove that after ws integration
            return state.concat([
                {
                    message: action.message,
                    chatId: action.chatId,
                    id: action.id
                }
            ]);
        case MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    chatId: action.chatId,
                    id: action.id
                }
            ]);
        default:
            return state
    }
};

export default messages
