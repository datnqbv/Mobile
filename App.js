import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  View,
} from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Đăng nhập 12345 </Text>
      <Text style={styles.paragraph}>Nhập số điện thoại</Text>
      <Text style={styles.des}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        placeholder="Nhập số điện thoại của bạn"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Tiếp tục"
          onPress={() => {
            if (!phoneNumber) {
              Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại');
            } else {
              Alert.alert('Thông báo', `Số điện thoại bạn nhập: ${phoneNumber}`);
            }
          }}
          color="gray"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
  },
  des: {
    marginBottom: 15,
    fontSize: 14,
  },
  header: {
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
  },
});
