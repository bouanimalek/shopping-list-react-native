import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.9}>
      <View style={{ ...styles.btn, ...style }}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "grey",
    padding: 9,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});

export default ButtonComponent;
