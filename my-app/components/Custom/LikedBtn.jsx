import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LikedBtn = () => {
    const [liked, setLiked] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => setLiked(!liked)} 
            style={{
                borderRadius:10,
                backgroundColor:liked?"red":"grey",
                width:200,
                height:50
            }}
            >
                <Text style={styles.heart}>{liked ? "❤️ Liked" : "🤍 Like"}</Text>
            </TouchableOpacity>

        </View>
    );
};

export default LikedBtn;


const styles = StyleSheet.create({
    heart: {
        fontSize: 30,
        paddingHorizontal: 20
    },
    heartBg: {
        borderRadius: 5,
        padding: 10,

    }
});