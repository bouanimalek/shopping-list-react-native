import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.logo}>My Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: Colors.danger,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },
  logo: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "bold",
    padding: 9,
  },
});

export default Header;
