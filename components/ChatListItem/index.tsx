import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { ChatRoom } from '../../types';
import style from './style'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('ChatRoom', { 
            id: chatRoom.id,
            name: user.name,
            imageUri: user.imageUri,
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={style.chatContainer}>
                <View style={style.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={style.avatar} />
                    
                    <View style={style.midContainer}>
                        <Text style={style.username}>{user.name}</Text>
                        <View style={style.textWrap}>
                            <Text numberOfLines={1} style={style.lastMessage}>{chatRoom.lastMessage.content}</Text>
                        </View>
                    </View>
                </View>
                
                <Text style={style.time}>
                    {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
                </Text>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;