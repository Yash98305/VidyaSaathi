import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CourseScreen from './CourseScreen'
import CourseDetails from './CourseDetails'

const Stack = createStackNavigator()
const CourseStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='CourseScreen'>
                <Stack.Screen name='CourseScreen' component={CourseScreen} options={{ headerShown: false }} />
                <Stack.Screen name='CourseDetails' component={CourseDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default CourseStack