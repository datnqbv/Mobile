import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ColorButton = ({ color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={() => onPress(color)}>
      <Text style={[styles.buttonText, { color: color === "yellow" ? "black" : "white" }]}>
        {color.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 350,
    padding: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ColorButton;
