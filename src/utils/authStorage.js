import AsyncStorage from '@react-native-community/async-storage';

export const storeTokenData = async (token) => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (error) {
    console.log(error);
  }
};

export const retrieveTokenData = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    if (token !== null) {
      return token;
    }
    return '';
  } catch (error) {
    console.log(error);
  }
};

export const removeTokenData = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (error) {
    console.log(error);
  }
};
