import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

const AddProduct = ({ submitHandler, displayModal }) => {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
          multiline={false}
          maxLength={9}
          secureTextEntry={false}
        />
        <Button title="Valider" onPress={handleClick} />
      </View>
    </Modal>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    marginBottom: 9,
  },
});
