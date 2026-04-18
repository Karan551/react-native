import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const about = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>about</Text>
        </View>
    );
};

export default about;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    text: {
        color: "#f5f5f5",
        textAlign:"center",
        fontSize:40,
        margin:20

    }
});