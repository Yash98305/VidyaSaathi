import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StatusScreen from './StatusScreen'


const Stack = createStackNavigator()
const StatusAdminStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='PolicyScreen'>
                <Stack.Screen name='StatusScreen' component={StatusScreen} options={{ headerShown: false }} />
          
            </Stack.Navigator>
        </View>
    )
}

export default StatusAdminStack