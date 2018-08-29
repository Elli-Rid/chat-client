import * as types from '../constants/actionTypes'

export const startChat = (chatId) => ({
    type: types.START_CHAT,
    chatId: chatId,
});

export const chatStarted = (chatId, title) => ({
    type: types.CHAT_STARTED,
    chatId: chatId,
    title: title
});

export const retrieveChats = (chats) => ({
    type: types.RETRIEVE_CHATS,
    chats: chats
});
