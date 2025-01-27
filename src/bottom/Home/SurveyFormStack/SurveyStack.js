import { View } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Personal from './Personal'
import Educational from './Educational'
import Reasons from './Reasons'

const Stack = createStackNavigator()
const SurveyStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator 
            initialRouteName="Personal"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS // Customize the transition preset
        }}>
                <Stack.Screen name='Personal' component={Personal} options={{ headerShown: false }} />
                <Stack.Screen name='Educational' component={Educational} options={{ headerShown: false }} />
                <Stack.Screen name='Reasons' component={Reasons} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default SurveyStack