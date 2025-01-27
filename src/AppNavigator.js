import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
// import Splash from './normal/Splash'
import Parent from './Normal/Parent'
// import AuthStack from './Auth/AuthStack'
import { useFonts } from 'expo-font'


import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import LoadingScreen from './Auth/LoadingScreen'
import Login from './Auth/Login'
import Register from './Auth/Register'
import SchoolRegister from './Auth/SchoolRegister'
const Stack = createStackNavigator()

const AppNavigator = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalFadeTransition, // Customize the transition preset
        }}
      >

        
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Parent' component={Parent} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='SchoolRegister' component={SchoolRegister} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator