import { StyleSheet, View, Modal } from "react-native";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
import BodyText from "./BodyText";
import AppStyles from "../constants/AppStyles";
import TitleText from "./TitleText";

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ""));
  };

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TitleText style={AppStyles.headerTwo}>
          Veillez indiquer un produit
        </TitleText>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          onChangeHandler={inputHandler}
          inputValue={product}
          maxLength={10}
        />
        <View style={styles.btnContainer}>
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
            Valider
          </ButtonComponent>
          <ButtonComponent
            onPressHandler={cancelNewProduct}
            style={styles.btnTomato}
          >
            Annuler
          </ButtonComponent>
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
    padding: 5,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 15,
    borderRadius: 30,
    height: 50,
    fontSize: 19,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue: {
    backgroundColor: "seagreen",
    width: 150,
    borderRadius: 6,
  },
  btnTomato: {
    backgroundColor: "tomato",
    width: 150,
    borderRadius: 6,
  },
});
