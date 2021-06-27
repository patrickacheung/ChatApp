import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        maxHeight: 60,
    },
    attachment: {
        marginRight: 10,
    },
    voiceButton: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default style;