import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const app = () => {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg" }}
          style={styles.profile}
        />
        <Text style={styles.username}>Ganesh Dev</Text>
      </View>

      {/* Post Image */}
      <Image
        source={{ uri: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg" }}
        style={styles.postImage}
      />
      <Text style={styles.likes}>❤️ 120 Likes</Text>
      {/* caption */}
      <Text style={styles.caption}>Learning React Native 🔥</Text>
    </View>
  );
};

export default app;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 3,
    borderColor: "#000",
    marginBottom: 2
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center"
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15
  },
  postImage: {
    width: "100%",
    height: 300

  },
  caption: {
    fontSize: 28,
    padding: 10,
    color: "#050505"
  },
  likes: {
    fontSize: 20,
   paddingHorizontal:10,
    fontWeight: "bold"
  }
});