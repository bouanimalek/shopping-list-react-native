import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    setMyProducts((currentMyProducts) => [
      { key: idString, name: product },
      ...currentMyProducts,
    ]);
  };

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />

      <FlatList
        data={myProducts}
        renderItem={({ item }) => <Products name={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
});
