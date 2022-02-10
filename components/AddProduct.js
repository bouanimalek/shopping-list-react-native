import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
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
        <View style={styles.btnContainer}>
          <View style={styles.btnBlue}>
            <Button title="Valider" onPress={handleClick} />
          </View>
          <View style={styles.btnTomato}>
            <Button title="Annuler" onPress={cancelNewProduct} color="tomato" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  inputContainer: {
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue: {
    width: "45%",
  },
  btnTomato: {
    width: "45%",
  },
});
