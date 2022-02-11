import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";

const Products = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable
      // style={({ pressed }) => [
      //   {
      //     backgroundColor: pressed ? "blue" : "red",
      //   },
      // ]}
      onPress={() => deleteProduct(idString)}
    >
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: Colors.info,
    borderRadius: 6,
  },
  element: {
    color: Colors.white,
    padding: 20,
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Products;
