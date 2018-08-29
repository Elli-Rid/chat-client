import {combineReducers} from "redux"
import chatsReducer from "./ChatClient/reducers/chatsReducer";
import messagesReducer from "./ChatClient/reducers/messagesReducer";


export default combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
});
