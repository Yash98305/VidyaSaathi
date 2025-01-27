import { View, Text,Image } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from './Home/HomeStack'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { colors } from '../Dimensions'

const Bottom = createBottomTabNavigator()
const BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,tabBarActiveBackgroundColor:colors.primary2,tabBarInactiveBackgroundColor:colors.primary2,tabBarInactiveTintColor:'grey',tabBarActiveTintColor:'#FF6E4E',tabBarShowLabel:false
   }}>
        <Bottom.Screen name='HomeStack' component={HomeStack} options={{headerShown:false,
        tabBarIcon:(tabInfo)=>{return(
            <Image source={require('../../assets/home.png')} style={{height:25,width:25,tintColor:tabInfo.focused?colors.bg:colors.primary}}/>
            )}}} />
        <Bottom.Screen name='Message' component={Screen1} options={{headerShown:false,
        tabBarIcon:(tabInfo)=>{return(
            <Image source={require('../../assets/chatbot.png')} style={{height:25,width:25,tintColor:tabInfo.focused?colors.bg:colors.primary}}/>
            )}}} />
        <Bottom.Screen name='Near by' component={Screen2} options={{headerShown:false,
        tabBarIcon:(tabInfo)=>{return(
            <Image source={require('../../assets/settings.png')} style={{height:25,width:25,tintColor:tabInfo.focused?colors.bg:colors.primary}}/>
            )}}} />
      
  
       
    </Bottom.Navigator>
  )
}

export default BottomNavigator