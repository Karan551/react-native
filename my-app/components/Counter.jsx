import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.counter}>Counter :{counter}</Text>
            <View style={styles.btnContainer}>
                <Button
                    title="Decrease"
                    color={"#E84253"}
                    accessibilityLabel="Decrease button"
                    onPress={() => setCounter((prev) => prev > 0 ? prev - 1 : 0)}
                />
                <Button
                    title="Reset"
                    color={"#D17EC8"}
                    accessibilityLabel="Reset button"
                    onPress={() => setCounter(0)}
                />
                <Button
                    title="Increase"
                    color={"#37369B"}
                    accessibilityLabel="Increase button"
                    onPress={() => setCounter(counter + 1)}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    continer: {

    },
    counter: {
        fontSize: 40,
        fontWeight: "700",
        textAlign: "center"
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20,
        width: "100%",
        // height: 400
        flex:1,
    }

});