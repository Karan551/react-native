import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import Product from "@/components/Product";

const products = [
  { id: "1", name: "Watch", price: "4000", image_url: "https://images.pexels.com/photos/5421271/pexels-photo-5421271.jpeg",instock:true },
  { id: "2", name: "Shoes", price: "1000", image_url: "https://images.pexels.com/photos/6765524/pexels-photo-6765524.jpeg",instock:true },
  { id: "3", name: "Bag", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },
  { id: "4", name: "Smart Bag", price: "1800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },
  { id: "5", name: "Books", price: "500", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },
  { id: "6", name: "T.V.", price: "18000", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:false },
  { id: "7", name: "Shirt", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },
  { id: "8", name: "Pant", price: "1000", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg" },{ id: "3", name: "Bag", price: "800", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },
  { id: "9", name: "Sweater", price: "700", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:false },
  { id: "10", name: "Bottles", price: "200", image_url: "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",instock:true },



];



const app = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <Product item={item} />
        }

        ListHeaderComponent={
          <Text style={styles.header}>Product List</Text>
        }
        ListFooterComponent={
          <Text style={styles.footer}>End of Product</Text>
        }
        // horizontal={true}
        initialNumToRender={1}
      />
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  },
  footer: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  }

}
);