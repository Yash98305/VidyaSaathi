import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import S1 from './S1'
import S2 from './S2'
import S3 from './S3'
import Main from './Main'
import SchoolRegis from './SchoolRegis'
import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  
  return (
    
    <Drawer.Navigator initialRouteName='Main' drawerContent={props=><CustomDrawer {...props}/>} screenOptions={{
      drawerStyle: {
        width: responsiveWidth(80),
      },
    }}>
    {/* <Drawer.Navigator initialRouteName='Main'> */}
        {/* <Drawer.Screen name='Main' component={Main} options={{headerShown:false,title: '',headerStyle:{backgroundColor: '#013ECC'},headerTintColor:'white'}} /> */}
        <Drawer.Screen name='Main' component={Main} options={{headerShown:false}} />
        <Drawer.Screen name='S1' component={S1} options={{headerShown:false}} />
        <Drawer.Screen name='SchoolRegis' component={SchoolRegis} options={{headerShown:false}} />
        <Drawer.Screen name='S3' component={S3} options={{headerShown:false}} />
        <Drawer.Screen name='S2' component={S2} options={{headerShown:false}} />
        
  
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
