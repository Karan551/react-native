import { View, Text, StyleSheet, ImageBackground } from "react-native";
import icedCoffee from "@/assets/images/iced-coffee.png";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffee}
        resizeMode="cover"
        style={styles.img}
      />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

/* 
my-new-app/assets`

*/
export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
   
  },
  text: {
    fontSize: 45,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "#ccc",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  img:{
    width:"100%",
    height:"100%",
    flex:1,
    justifyContent:"center",
    resizeMode:"cover"
  }
});
