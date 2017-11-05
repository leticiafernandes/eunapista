import {AsyncStorage} from 'react-native'

const Session = {
  setItem: async function(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  },
  getItem: async function(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  },
  removeItem: async function(key){
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
};

Session.componentName = 'Session';

export default Session;
