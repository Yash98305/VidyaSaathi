import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import PolicyStack from './PolicyStack/PolicyStack'
import Profile from './Profile'
import LoadingHome from './LoadingHome'
import AdminHome from './AdminPortal/AdminHome'
import StudentHome from './StudentPortal/StudentHome'
import FacultyHome from './FacultyPortal/FacultyHome'
import AttendenceScreen from './FacultyPortal/AttendenceScreen'
import MenuScreen from './FacultyPortal/MenuScreen'
import JobStack from './JobStack/JobStack'
import CourseStack from './CourseStack/CourseStack'
import Details from './Details'
import SuperAdminHome from './SuperAdmin/SuperAdminHome'
import CreateAdmin from './SuperAdmin/CreateAdmin'
import CreateAdminSide from './AdminPortal/CreateAdminSide'
import CreateFaculty from './AdminPortal/CreateFaculty'
import CreateStudent from './AdminPortal/CreateStudent'
import AdminProfile from './AdminPortal/AdminProfile'
import FacultyProfile from './FacultyPortal/FacultyProfile'
import StatusAdminStack from './StatusAdmin/StatusAdminStack'
import SurveyStack from './SurveyFormStack/SurveyStack'

const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='LoadingHome'>
            <Stack.Screen name='LoadingHome' component={LoadingHome} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='FacultyHome' component={FacultyHome} options={{ headerShown: false }} />
                <Stack.Screen name='AdminHome' component={AdminHome} options={{ headerShown: false }} />
                <Stack.Screen name='StudentHome' component={StudentHome} options={{ headerShown: false }} />
                <Stack.Screen name='SuperAdminHome' component={SuperAdminHome} options={{ headerShown: false }} />
                <Stack.Screen name='PolicyStack' component={PolicyStack} options={{ headerShown: false }} />
                <Stack.Screen name='JobStack' component={JobStack} options={{ headerShown: false }} />
                <Stack.Screen name='CourseStack' component={CourseStack} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name='AttendenceScreen' component={AttendenceScreen} options={{ headerShown: false }} />
                <Stack.Screen name='MenuScreen' component={MenuScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
                <Stack.Screen name='CreateAdmin' component={CreateAdmin} options={{ headerShown: false }} />
                <Stack.Screen name='CreateAdminSide' component={CreateAdminSide} options={{ headerShown: false }} />
                <Stack.Screen name='CreateFaculty' component={CreateFaculty} options={{ headerShown: false }} />
                <Stack.Screen name='CreateStudent' component={CreateStudent} options={{ headerShown: false }} />
                <Stack.Screen name='AdminProfile' component={AdminProfile} options={{ headerShown: false }} />
                <Stack.Screen name='FacultyProfile' component={FacultyProfile} options={{ headerShown: false }} />
                <Stack.Screen name='StatusAdminStack' component={StatusAdminStack} options={{ headerShown: false }} />
                <Stack.Screen name='SurveyStack' component={SurveyStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    )
}

export default HomeStack