import { View, ActivityIndicator, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid, TextInput, Animated, Keyboard } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import axios from "axios";
import * as Animatable from 'react-native-animatable';




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
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../Dimensions';
// import { SlideInUp } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);
    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
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

    const saveLoginData = async () => {
        Keyboard.dismiss();
       
        if (username == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (password == '') {
            ToastMessage('All fields are required');
            return;
        }
        setLoad(true);
        const data = {
            email: `${username}`,
            password: `${password}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/user/login', data);
            console.log(response.data);
            let token = response.data.token
            // let name = response.data.user.name
            // let email = response.data.user.email
            // console.log(token)
            // console.log(name)
            let user = { ...response.data.user};
            // Saving token to async storage
            const saveToken = async () => {
                try {
                    await AsyncStorage.setItem(
                        'token',
                        `${token}`,
                    );
                } catch (error) {
                    // Error saving data
                    console.log(error)
                }
            };
            // Saving user details to async storage
            const saveDetails = async () => {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(user));
                } catch (error) {
                    // Error saving data
                    console.log(error)
                }
            };
            saveToken();
            saveDetails();
            setLoad(false);
            props.navigation.replace('LoadingScreen');

        }
        catch (error) {
            // console.log(error);
            setLoad(false);

            console.log(error);
            if (error.response) {
                // User already exists, handle the response
                console.log(error.response);
                
                // Add your code to handle the response accordingly
            }
        }
    };
    const loginSuccessToast = () => {
        ToastAndroid.show('Login successfully.', ToastAndroid.SHORT, ToastAndroid.TOP,);
    };
    const ErrorToast = () => {
        ToastAndroid.show('Something went wrong, Try again later!', ToastAndroid.SHORT, ToastAndroid.TOP,);
    };




    return (
        <View style={Styles.screen}>
            <ImageBackground source={require('../../assets/bg7.jpg')} resizeMode="cover" style={{ flex: 1, width: responsiveWidth(100), alignItems: 'center', }} imageStyle={{ opacity: 1, backgroundColor: colors.text_light }}>
                <View style={Styles.screen_bg}>
                    <Animatable.View
                        animation={'slideInDown'}
                        duration={3000}
                        // delay={index * 100}
                        style={[{
                            width: responsiveWidth(77.5) * 2,
                            height: responsiveHeight(36.5),
                            backgroundColor: '#0074D9',
                            // backgroundColor:'#000000b0',
                            position: 'absolute',
                            top: 0,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            borderBottomLeftRadius: responsiveWidth(80),
                            borderBottomRightRadius: responsiveWidth(80),
                        }]}></Animatable.View>



                    <View style={{ width: responsiveWidth(90) }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            {/* <Image source={require('../../assets/book.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12) }} /> */}
                            <Animatable.Text animation={'fadeIn'} duration={1000} style={[Styles.heading1]}>VIDYA SAATHI</Animatable.Text>
                        </View>
                        <Text style={Styles.heading2}>Please sign in to continue.</Text>
                        <Text style={Styles.heading2}> </Text>

                        <Animatable.View
                            animation={'slideInDown'}
                            duration={1000}
                            // delay={index * 100}
                            style={Styles.cardBig}>
                            <View style={{ padding: responsiveWidth(7), alignItems: 'center', justifyContent: 'center' }}>

                                <View style={Styles.card_small}>
                                    <Image source={require('../../assets/email.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setUsername(text)} value={username} placeholder="Enter Email" style={Styles.card_small_txt} />
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../assets/lock.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setPassword(text)} value={password} placeholder="Enter Password" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} secureTextEntry={true} />
                                    <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity>
                                </View>


                            </View>

                        </Animatable.View>

                        <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} >
                            <TouchableOpacity onPress={() => saveLoginData()}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={Styles.big_but}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Sign in</Text>
                                </Animatable.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('SchoolRegister') }}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but, { backgroundColor: colors.primary2 }]}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>School Portal</Text>
                                </Animatable.View>
                            </TouchableOpacity> 
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: responsiveHeight(4) }}>
                            <Text style={[Styles.butText, { color: 'white' }]} >Don't have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}><Text style={[Styles.butText, { color: colors.secondary }]} >Sign up</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
            {load ? <View style={{ backgroundColor: colors.shade, justifyContent: 'center', alignItems: 'center', top: 0, width: responsiveWidth(100), height: responsiveHeight(100), position: 'absolute' }}>
                <ActivityIndicator size={'large'} color={colors.bg} />
            </View> : null}

            {/* <Toast /> */}
        </View>
    )
}
const Styles = StyleSheet.create(
    {
        screen_bg: {
            flex: 1,
            backgroundColor: '#000000bd',
            width: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center'
        },
        screen: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'black'
        },
        heading1: {
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Poppins_500Medium',
            marginBottom: responsiveHeight(0.5),
            // marginHorizontal: responsiveWidth(2),
            fontSize: responsiveFontSize(4.5),
            width: responsiveWidth(88)
        },
        heading2: {
            textAlign: 'center',
            color: '#eff3f6',
            fontFamily: 'Poppins_500Medium',
            // marginHorizontal: responsiveWidth(2),
            fontSize: responsiveFontSize(2),
            width: responsiveWidth(88)
        },
        center: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        butText: {
            textAlign: 'center',
            color: colors.text_light,
            fontFamily: 'Poppins_500Medium',
            fontSize: responsiveFontSize(2),
            marginTop: responsiveFontSize(0.5)

        },
        cardBig: {
            width: responsiveWidth(90),
            // backgroundColor: colors.secondary2,
            borderColor: 'black',
            // borderWidth:5,
            borderRadius: responsiveWidth(5),
            // shadowColor: 'black',
            // elevation: 5,
            // shadowOffset: 10,
            // shadowRadius: 5,
            overflow: 'hidden'
        },
        card_small: {
            width: responsiveWidth(85),
            backgroundColor: colors.text_light,
            height: responsiveHeight(7),
            borderRadius: responsiveWidth(3),
            borderWidth: 0,
            shadowColor: 'black',
            elevation: 5,
            shadowOffset: 5,
            shadowRadius: 2,
            overflow: 'hidden',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(2.5),
        },
        card_small_img: {
            height: responsiveWidth(5),
            width: responsiveWidth(5),
            tintColor: colors.secondary3,
            marginHorizontal: responsiveWidth(3)
        },
        card_small_txt: {
            textAlign: 'left',
            color: 'black',
            fontFamily: 'Poppins_500Medium',
            fontSize: responsiveFontSize(2),
            width: responsiveWidth(70),
            marginTop: responsiveFontSize(0.5)
        },
        big_but: {
            marginTop: responsiveHeight(2),
            width: responsiveWidth(41.5),
            height: responsiveHeight(6),
            backgroundColor: colors.secondary,
            borderRadius: responsiveWidth(10),
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },



    }
)

export default Login