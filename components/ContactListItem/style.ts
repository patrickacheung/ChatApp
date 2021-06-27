import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 12,
        borderRadius: 50,
    },
    chatContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 12,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 15,
        color: 'grey',
    },
    time: {
        fontSize: 13,
        color: 'grey',
        paddingTop: 6,
    },
    textWrap: {
        
    }
});

export default style;