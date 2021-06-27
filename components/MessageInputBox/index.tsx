import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import style from './style';

const MessageInputBox = () => {
    const [message, setMessage] = useState('');
    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    const onMicrophonePress = () => {
        console.warn('microphone press');
    }

    const onSendPress = () => {
        console.warn(`sending ${message}`);
        setMessage('');
    }

    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey' />
                <TextInput
                    placeholder={"Type a message"}
                    style={style.textInput} 
                    multiline 
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name='attachment' size={24} color='grey' style={style.attachment} />
                {!message && <Fontisto name='camera' size={24} color='grey' />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={style.voiceButton}>
                    {!message
                        ? <MaterialCommunityIcons name='microphone' size={28} color='white' />
                        : <MaterialIcons name='send' size={28} color='white' />
                    } 
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default MessageInputBox;