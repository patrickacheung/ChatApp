import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { User } from '../../types';
import style from './style'

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;
    const navigation = useNavigation();
    const onClick = () => {
        // navigate to chatroom with this user
        console.warn('navigate to chatroom with ' + user.name);
        // navigation.navigate('ChatRoom', {
        //     id: chatRoom.id,
        //     name: user.name,
        //     imageUri: user.imageUri
        // });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={style.chatContainer}>
                <View style={style.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={style.avatar} />
                    
                    <View style={style.midContainer}>
                        <Text style={style.username}>{user.name}</Text>
                        <Text numberOfLines={1} style={style.status}>{user.status ? user.status : 'Hi, I\'m using ChatApp!'}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;