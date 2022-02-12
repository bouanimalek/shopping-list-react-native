import { Text } from "react-native";
import React from "react";
import AppStyles from "../constants/AppStyles";

const { bodyText } = AppStyles;

const BodyText = ({ style, children }) => {
  return <Text style={{ ...bodyText, ...style }}>{children}</Text>;
};

export default BodyText;
