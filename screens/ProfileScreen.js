import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Account = ({ onLogout }) => {
  const handleSignOut = async () => {
    await onLogout();
  };

  return (
    <View style={styles.container}>
      {/* Header màu xanh */}
      <View style={styles.header} />

      {/* Ảnh đại diện */}
      <Image source={require('../assets/food1.jpg')} style={styles.avatar} />

      {/* Thông tin người dùng */}
      <Text style={styles.name}>Dat Phung</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>

      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: '100%',
    height: 150,
    backgroundColor: '#00AEEF',
    position: 'absolute',
    top: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: 100, // Để avatar nằm đè lên header
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    color: '#00AEEF',
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#777',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Account;
