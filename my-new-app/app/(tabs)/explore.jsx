import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello explore</Text>
    </View>
  );
};

export default explore;



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems:"center",
    justifyContent:"center",
    // flexDirection:"row"
  },
  text: {
    color: "#000",
    fontSize: 48
  }
});
