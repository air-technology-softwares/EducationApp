import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

class AppHeader extends React.Component {
    render() {
        return (
            <View style={styles.bg}>
                <Text style={styles.txt}>Air Technology</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'blue',
        padding:20,
    },

    txt:{
        textAlign: 'center',
        color: 'white',
        fontSize:35,
        fontWeight:'bold',
    },
})

export default AppHeader;