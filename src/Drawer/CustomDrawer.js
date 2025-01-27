import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
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
import { colors } from '../Dimensions';


const CustomDrawer = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };


    useEffect(() => {
        retrieveUserDetails();
    }, []);

    const retrieveUserDetails = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            console.log(parsed)
            setName(parsed.name);
            setUsername(parsed.email);
        } catch (error) {
            ToastMessage('Unable to retrieve user details.')
            console.log(error)
        }
    };

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
    const signOut = () => {
        const removeToken = async () => {
            props.navigation.closeDrawer();

            try {
                const resp = await fetch("https://gujarat-app.onrender.com/api/v1/user/logout");
                const data = await resp.json();
                console.log(data)
                ToastMessage("You've been logged out.");
                try {
                    await AsyncStorage.removeItem('token');

                    setTimeout(() => {
                        props.navigation.replace('LoadingScreen');
                    }, 0)
                } catch (error) {
                    // Error while removing data
                    console.log(error)
                    ToastMessage("Logout Async ERROR");
                }
            } catch (error) {
                console.log(error);
                ToastMessage("Please, check your internet connection.");
            }

        };
        removeToken();
    }
    const logout = () => {
        const removeToken2 = async () => {
            props.navigation.closeDrawer();

            
            try {
                await AsyncStorage.removeItem('token');
                ToastMessage("You've been logged out.");
                setTimeout(() => {
                    props.navigation.replace('LoadingScreen');
                }, 1000);
                
            } catch (error) {
                // Error while removing data
                console.log(error)
                ToastMessage("Logout Async ERROR");
            }
            

        };
        removeToken2();

    }



    return (
        <View style={Styles.screen}>

            <View style={Styles.section1}>
                <View style={Styles.section1_inside}>
                    <View style={Styles.section1_img_wrap}>
                        <Image source={require('../../assets/user2.png')}
                            style={{
                                height: responsiveWidth(30),
                                width: responsiveWidth(30)
                            }} />
                    </View>
                    <View style={{ marginLeft: responsiveWidth(2) }}>
                        <Text style={Styles.section1_txt1}>{name}</Text>
                        <Text style={Styles.section1_txt2}>{username}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
                <View style={Styles.drawerCard}>
                    <Image source={require('../../assets/home.png')} style={Styles.drawerImg} />
                    <Text style={Styles.drawerTxt}>
                        Home
                    </Text>
                </View>
            </TouchableOpacity>
            
     
            
           
            <TouchableOpacity onPress={() => { logout() }}>
                <View style={Styles.drawerCard}>
                    <Image source={require('../../assets/logout.png')} style={[Styles.drawerImg, { tintColor: colors.primary }]} />
                    <Text style={Styles.drawerTxt}>Logout</Text>
                </View>
            </TouchableOpacity>




            <View style={{ marginTop: responsiveHeight(12) }}>
                <Text style={[Styles.drawerTxt, { color: 'grey' }]}>Created by Team Meteor</Text>
            </View>
            {/* <View style={{width:responsiveWidth(100),height:responsiveHeight(100),position:'absolute',top:0,backgroundColor:'black',}}></View> */}

        </View>

    )
}
const Styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            backgroundColor: colors.secondary2,
            alignItems: 'center',
            justifyContent: 'flex-start'

        },
        section1: {
            margin: 0,
            borderRadius: 0,
            backgroundColor: colors.primary2,
            height: responsiveHeight(32),
            width: responsiveWidth(80),
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomLeftRadius: responsiveWidth(10),
            borderBottomRightRadius: responsiveWidth(10)
        },
        section1_inside: {
            marginLeft: responsiveWidth(5)
        },
        section1_img_wrap: {
            height: responsiveWidth(30),
            width: responsiveWidth(30),
            borderWidth: responsiveWidth(0.5),
            borderColor: 'white',
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        },
        section1_txt1: {
            textAlign: 'left',
            color: 'white',
            fontFamily: 'Poppins_500Medium',
            fontSize: responsiveFontSize(2.5)
        },
        section1_txt2: {
            textAlign: 'left',
            color: colors.bg,
            fontFamily: 'Poppins_500Medium',
            fontSize: responsiveFontSize(1.5)
        },
        drawerCard: {
            width: responsiveWidth(80),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: responsiveHeight(7),
            borderBottomWidth: responsiveWidth(0.1),
            backgroundColor: 'white'
        },
        drawerImg: {
            height: responsiveWidth(6),
            width: responsiveWidth(6),
            tintColor: colors.primary,
            marginHorizontal: responsiveWidth(5)
        },
        drawerTxt: {
            textAlign: 'center',
            color: 'black',
            fontFamily: 'Poppins_500Medium',
            marginTop: responsiveFontSize(0.5),
            fontSize: responsiveFontSize(1.8)
        },
        center: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        butLogo: {
            height: 25,
            width: 25,
            tintColor: '#474747'
        }
    }
)
export default CustomDrawer