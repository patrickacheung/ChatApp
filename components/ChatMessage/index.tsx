import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';

import { Message } from '../../types';
import style from './style';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={style.container}>
            <View style={[
                style.messageBubble, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage() ? '20%' : 0,
                    marginRight: !isMyMessage() ? '20%': 0,
                }
            ]}>
                { !isMyMessage() && <Text style={style.name}>{message.user.name}</Text> }
                <Text style={style.message}>{message.content}</Text>
                <Text style={style.timestamp}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}
 
export default ChatMessage;