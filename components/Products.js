import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Products = ({ name }) => {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={() => console.log("cliqué")}>
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#ffb6c1",
    padding: 20,
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Products;
