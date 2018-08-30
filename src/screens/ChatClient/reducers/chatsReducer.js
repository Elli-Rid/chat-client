import {CHAT_STARTED, RETRIEVE_CHATS} from "../constants/actionTypes";

const chats = (state = [
    {chatId: 1, title: 'John Doe'},
    {chatId: 2, title: 'John Doe'},
    {chatId: 3, title: 'John Doe'},
    {chatId: 4, title: 'John Doe'},
    {chatId: 5, title: 'John Doe'},
    ], action) => {
    switch (action.type) {
        case CHAT_STARTED:
            return state.concat([{title: action.title, chatId: action.chatId}]);
        case RETRIEVE_CHATS:
            return action.chats; // TODO: override state
        default:
            return state
    }
};

export default chats
