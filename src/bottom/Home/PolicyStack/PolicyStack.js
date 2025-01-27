import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PolicyScreen from './PolicyScreen'
import PolicyDetails from './PolicyDetails'

const Stack = createStackNavigator()
const PolicyStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='PolicyScreen'>
                <Stack.Screen name='PolicyScreen' component={PolicyScreen} options={{ headerShown: false }} />
                <Stack.Screen name='PolicyDetails' component={PolicyDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default PolicyStack