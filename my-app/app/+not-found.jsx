import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
const NotFoundScreen = () => {
    return (
        <Stack.Screen options={{ title: "Oops Page not found!." }}>
            <View>
                <Link href={"/"} style={styles.button}>Go Back To Home Screen</Link>
            </View>
        </Stack.Screen>
    );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {},
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
})

