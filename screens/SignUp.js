import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  link: {
    color: 'orange',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignUp;
