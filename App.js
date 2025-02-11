import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorButton from "./Component/ColorButton";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: backgroundColor === "yellow" ? "black" : "white" }]}>
        {backgroundColor.toUpperCase()}
      </Text>

      {["green", "blue", "brown", "yellow", "red", "black"].map((color) => (
        <ColorButton key={color} color={color} onPress={setBackgroundColor} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default App;
