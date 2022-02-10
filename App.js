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
  Modal,
  Pressable,
  Image,
} from "react-native";
import AddProduct from "./components/AddProduct";
import DissmissKeyboard from "./components/DissmissKeyboard";
import Products from "./components/Products";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const submitHandler = (product) => {
    setDisplayModal(false);
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  return (
    <DissmissKeyboard>
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          hardwareAccelerated
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>OUPS!</Text>
              </View>
              <View style={styles.modalBody}>
                <Image
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2012/04/26/18/36/negative-42774_960_720.png",
                  }}
                  style={styles.redCheck128}
                />
                <Text style={styles.modalBodyText}>
                  Merci d'indiquer plus d'un seul caractère
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={styles.pressableBtnModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalBtn}>Compris!</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Button title="Nouveau produit" onPress={() => setDisplayModal(true)} />
        <AddProduct
          submitHandler={submitHandler}
          displayModal={displayModal}
          cancelNewProduct={cancelNewProduct}
        />

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
    </DissmissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    // backgroundColor: "grey",
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
  },
  pressableBtnModal: {
    backgroundColor: "#20b2aa",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    padding: 16,
  },
  redCheck128: {
    width: 100,
    height: 100,
  },
});
