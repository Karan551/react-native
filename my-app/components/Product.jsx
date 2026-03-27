import { View, Text, StyleSheet, Image } from "react-native";

const Product = ({ item }) => {
    const { name, price, image_url, instock } = item;
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: image_url }}
                style={styles.image}
            />
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.price}>Price: {price}</Text>
            {

                instock ?
                    <Text style={styles.buy}>Buy Now</Text>
                    : <Text style={styles.outStock}>Out of Stock</Text>
            }

        </View>
    );
};

export default Product;



const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        elevation: 12
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },
    price: {
        color: "green",
        marginTop: 5,
        fontSize: 20
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 12
    },
    buy: {
        color: "blue",
        fontSize: 18
    },
    instock: {
        color: "green",
        marginTop: 5
    },
    outStock: {
        color: "red",
        marginTop: 10,
        fontWeight: "bold"
    }
});