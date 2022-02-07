import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const AddProduct = ({ submitHandler }) => {
  const [product, setProduct] = useState();

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
      />
      <Button title="Valider" onPress={handleClick} />
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
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
});
