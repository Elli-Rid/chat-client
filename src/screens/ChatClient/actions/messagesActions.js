import * as types from "../constants/actionTypes";

export const sendMessage = (message, chatId) => ({
    type: types.SEND_MESSAGE,
    chatId: chatId,
    message: message
});


export const messageReceived = (id, chatId, message) => ({
    type: types.MESSAGE_RECEIVED,
    id: id,
    chatId: chatId,
    message: message
});
