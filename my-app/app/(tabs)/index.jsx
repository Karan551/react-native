import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Login } from "@/components/index";
import { Link } from "expo-router";


const app = () => {

  // console.log("liked value::", liked);
  return (

    <View style={styles.container} >
    <Text style={styles.text}>Home Page</Text>
      {/* <Login /> */}
      <Link href="/about" style={styles.button}>About</Link>
    </View>

  );
};

export default app;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#f5f5f5",
    // justifyContent: "center",
    // alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,

  },
  button: {
    fontSize: 45,
    textDecorationLine: 'underline',
    color: '#000',
    textAlign:"center",
    fontWeight:700
  }
}
);