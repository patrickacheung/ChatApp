import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBubble: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    message: {

    },
    timestamp: {
        alignSelf: 'flex-end',
        color: 'grey'
    }
});

export default style;