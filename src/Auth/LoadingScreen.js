import { View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../Dimensions'


// Its the first screen of the App

const LoadingScreen = ({ navigation }) => {

  useEffect(() => {
    retrieveToken();
    // setTimeout(() => {
    //       navigation.replace('Parent');
    //     }, 1000);
  }, [])
  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log("My Token is this " + value);
      if (value != null) {
        setTimeout(() => {
          navigation.replace('Parent');
        }, 0)
      }
      else {
        // navigation.replace('Login');
        setTimeout(() => {
          navigation.replace('Login');
        }, 0)
      }
    } catch (error) {
      // Error retrieving token
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} color={colors.primary2} />
    </View>
  )
}

export default LoadingScreen