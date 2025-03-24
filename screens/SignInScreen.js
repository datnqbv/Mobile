import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Hình ảnh túi hàng */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/grocery-bag.png')} // Đường dẫn đến hình túi hàng
            style={styles.image}
          />
        </View>
        {/* Nội dung bên dưới hình ảnh */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <View style={styles.countryContainer}>
            <Image
              source={{ uri: 'https://flagcdn.com/w40/bd.png' }} // Cờ Bangladesh
              style={styles.flag}
            />
            <Text style={styles.countryCode}>+880</Text>
          </View>
          <Text style={styles.orText}>Or connect with social media</Text>
          <TouchableOpacity style={[styles.button, styles.googleButton]}>
            <Icon name="google" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.facebookButton]}
            onPress={() => navigation.navigate('Number')}
          >
            <Icon name="facebook" size={24} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%', // Chiếm toàn bộ chiều rộng màn hình
    height: 350, // Chiều cao cố định để giống ảnh mẫu
    resizeMode: 'contain', // Giữ tỷ lệ hình ảnh
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
  },
  title: {
    fontSize: 28, // Tăng kích thước chữ để giống ảnh mẫu
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    color: '#000',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4', // Màu Google
  },
  facebookButton: {
    backgroundColor: '#3B5998', // Màu Facebook
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignInScreen;