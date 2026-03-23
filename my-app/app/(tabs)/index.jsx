import { View, Text, StyleSheet, Image } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.pexels.com/photos/28448335/pexels-photo-28448335.jpeg" }}
        style={styles.image}

      />
      <Text style={styles.name}>Hello Ganesh!</Text>
      <Text style={styles.bio}>React Native Learner 🚀</Text>
    </View>
  );
};


export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "auto",
    flex:1,
    justifyContent:"center",

  },
  name: {
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "700",
    backgroundColor: "rgba(210,120,100,0.5)",
    width: "100%",
    marginTop: 10
  },
  bio: {
    color: "gray",
    fontSize: 30,
    marginTop: 15
  }
});