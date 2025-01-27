import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import JobDetails from './JobDetails'
import JobScreen from './JobScreen'

const Stack = createStackNavigator()
const JobStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='JobScreen'>
                <Stack.Screen name='JobScreen' component={JobScreen} options={{ headerShown: false }} />
                <Stack.Screen name='JobDetails' component={JobDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default JobStack