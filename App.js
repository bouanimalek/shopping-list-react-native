import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 3) {
      setMyProducts([]);
    }
  }, [count]);

  const submitHandler = (product) => {
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      Alert.alert(
        "désole",
        "nombre de caracteres doit etre > 3",
        [
          {
            text: "compris",
            onPress: () => setCount(count + 1),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.warn("dismissed"),
        }
      );
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />

      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Products
            name={item.name}
            idString={item.key}
            deleteProduct={deleteProduct}
          />
        )}
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
