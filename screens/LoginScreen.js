import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/; // Regex kiểm tra số điện thoại

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const validatePhoneNumber = () => {
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    } else {
      setErrorMessage("");
      navigation.navigate("Home"); // Chuyển sang HomeScreen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        maxLength={10}
        value={phoneNumber}
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, ""); // Chỉ cho phép số
          setPhoneNumber(numericText);
          if (phoneRegex.test(numericText)) {
            setErrorMessage("");
          }
        }}
        onSubmitEditing={validatePhoneNumber}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={validatePhoneNumber}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  description: { fontSize: 14, color: "#555", marginBottom: 15 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 },
  error: { color: "red", fontSize: 14, marginBottom: 10 },
  button: { backgroundColor: "#0057FF", paddingVertical: 12, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

export default LoginScreen;
