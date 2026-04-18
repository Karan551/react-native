import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const name = () => {
    return (
        <View>
            <Text style={styles.txt}> My name</Text>
        </View>
    );
};

export default name;

const styles=StyleSheet.create({
    txt:{
        color:"#f5f5f5",
        fontSize:80,
        textAlign:"center",
        flex:1
    }
})