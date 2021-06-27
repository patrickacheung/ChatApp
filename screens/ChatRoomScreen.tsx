import React from 'react';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import MessageInputBox from '../components/MessageInputBox';
import BG from '../assets/images/BG.png';

const ChatRoomScreen = () => {
    return (
        <ImageBackground style={style.bg} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <MessageInputBox />
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%'
    }
});

export default ChatRoomScreen;