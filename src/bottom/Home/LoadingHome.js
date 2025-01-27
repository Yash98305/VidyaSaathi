import { View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../../Dimensions'



// Its the first screen of the App

const LoadingHome = ({ navigation }) => {

    useEffect(() => {
        retrieveToken();
    }, [])
    const retrieveToken = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            const user = JSON.parse(value);
            const role = user.role;
            console.log("My role is " + role);
            if (role === 'user') {
                setTimeout(() => {
                    navigation.replace('Home');
                }, 0)
            }
            else if (role === 'admin') {
                // navigation.replace('Login');
                setTimeout(() => {
                    navigation.replace('AdminHome');
                }, 0)
            }
            else if (role === 'student') {
                // navigation.replace('Login');
                setTimeout(() => {
                    navigation.replace('StudentHome');
                }, 0)
            }
            else if (role === 'faculty') {
                // navigation.replace('Login');
                setTimeout(() => {
                    navigation.replace('FacultyHome');
                }, 0)
            }
            else if (role === 'superadmin') {
                // navigation.replace('Login');
                setTimeout(() => {
                    navigation.replace('SuperAdminHome');
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

export default LoadingHome