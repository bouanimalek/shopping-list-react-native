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

export default function App() {
  const [product, setProduct] = useState({});

  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val);
  };

  const submitHandler = () => {
    const idString = Date.now().toString();
    setMyProducts((currentMyProducts) => [
      { key: idString, name: product },
      ...currentMyProducts,
    ]);
    setProduct("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="Valider" onPress={submitHandler} />
      </View>

      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Text style={styles.element}>{item.name}</Text>
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
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
  },
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
