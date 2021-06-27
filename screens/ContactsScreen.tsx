import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import Users from '../data/Users';

export default function ContactsScreen() {
    return (
        <View style={style.container}>
          <FlatList style={style.contactsList}
            data={Users} 
            renderItem={( {item} ) => <ContactListItem user={item} />} 
            keyExtractor={(item) => item.id}
          />
        </View>
      );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactsList : {
      width: '100%'
    }
});