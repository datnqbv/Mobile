import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = '@auth_status';

export const authService = {
  async setLoggedIn(status) {
    try {
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(status));
      return true;
    } catch (error) {
      console.error('Error saving auth status:', error);
      return false;
    }
  },

  async getLoggedIn() {
    try {
      const status = await AsyncStorage.getItem(AUTH_KEY);
      return status ? JSON.parse(status) : false;
    } catch (error) {
      console.error('Error reading auth status:', error);
      return false;
    }
  },

  async clearAuth() {
    try {
      await AsyncStorage.removeItem(AUTH_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing auth status:', error);
      return false;
    }
  }
}; 