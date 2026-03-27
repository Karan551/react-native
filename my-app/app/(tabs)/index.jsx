import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import Product from "@/components/Product";


const products = [
  { id: "1", name: "Watch", price: "4000", image_url: "https://images.pexels.com/photos/5421271/pexels-photo-5421271.jpeg", instock: true },
  { id: "2", name: "Shoes", price: "1000", image_url: "https://images.pexels.com/photos/6765524/pexels-photo-6765524.jpeg", instock: true },
  { id: "3", name: "Bag", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },
  { id: "4", name: "Smart Bag", price: "1800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },
  { id: "5", name: "Books", price: "500", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },
  { id: "6", name: "T.V.", price: "18000", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: false },
  { id: "7", name: "Shirt", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },
  { id: "8", name: "Pant", price: "1000", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg" }, { id: "3", name: "Bag", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },
  { id: "9", name: "Sweater", price: "700", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: false },
  { id: "10", name: "Bottles", price: "200", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg", instock: true },



];




  const app = () => {
    const [counter, setCounter] = useState(0);
    console.log("this is the value of counter::", counter);


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count : {counter}</Text>
        <View style={styles.btnContainer}>
          <Button
            title="Decrease"
            color="#F904D2"
            accessibilityLabel="Decrease button"
            onPress={(prev) => prev > 0 ? setCounter(counter - 1) : 0}
          />

          <Button
            title="Reset"
            color="#5058E9"
            accessibilityLabel="Decrease button"
            onPress={() => setCounter(0)}
          />
          <Button
            title="Increase"
            color="#3537DF"
            accessibilityLabel="Decrease button"
            onPress={() => setCounter(counter + 1)}
          />
        </View>
      </View>
    );
  };

  export default app;





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: "#f5f5f5",

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
      padding: 10
    },
    btn: {
      padding: 18,
      fontSize: 18
    }
  }
  );