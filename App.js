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
  ImageBackground,
} from "react-native";
import AddProduct from "./components/AddProduct";
import ButtonComponent from "./components/ButtonComponent";
import DissmissKeyboard from "./components/DissmissKeyboard";
import Header from "./components/Header";
import Products from "./components/Products";
import Colors from "./constants/colors";
//import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "greatVibes-regular": require("./assets/fonts/GreatVibes-Regular.otf"),
//   });
// };

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  // const [fontsLoaded, setfontsLoaded] = useState(false);

  const [fontsLoaded, error] = useFonts({
    BangersRegular: Bangers_400Regular,
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "greatVibes-regular": require("./assets/fonts/GreatVibes-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/12/20/09/01/valentine-scrapbooking-4708011_960_720.jpg",
        }}
      >
        <Header />
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

          <ButtonComponent
            onPressHandler={() => setDisplayModal(true)}
            style={styles.addProductBtn}
          >
            Nouveau produit
          </ButtonComponent>

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
      </ImageBackground>
    </DissmissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    backgroundColor: Colors.white,
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
    borderBottomColor: Colors.secondary,
  },
  modalHeaderText: {
    color: Colors.secondary,
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
    backgroundColor: Colors.info,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: Colors.white,
    textAlign: "center",
    padding: 16,
  },
  redCheck128: {
    width: 100,
    height: 100,
  },
  addProductBtn: {
    backgroundColor: Colors.success,
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.white,
    marginBottom: 20,
  },
  bgImage: {
    flex: 1,
  },
});
