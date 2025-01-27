import { View, ActivityIndicator, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../Dimensions';




const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const [load, setLoad] = useState(false);
    // const [language, setLanguage] = useState('E');
    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };



    const saveLoginData = async () => {
        Keyboard.dismiss();
        if (username == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (email == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (password == '') {
            ToastMessage('All fields are required');
            return;
        }

        setLoad(true);
        const data = {
            name: `${username}`,
            email: `${email}`,
            password: `${password}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/user/register', data);
            console.log(response.data);
            let token = response.data.token
            console.log(token)
            setEmail('')
            setPassword('')
            setUsername('')
            ToastMessage('Your account has been successfully created.')
            setLoad(false)
            props.navigation.replace('LoadingScreen');
            
        }
        catch (error) {
  
            setEmail('')
            setPassword('')
            setUsername('')
            setLoad(false)
            console.log(error);
            if (error.response) {
                // User already exists, handle the response
                console.log(error.response.data.message);
                ToastMessage(error.response.data.message);
            }
        }
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
                            width: responsiveWidth(68.5) * 2.1,
                            height: responsiveHeight(33.5),
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
                        <Text style={Styles.heading1}>Create Account</Text>
                        <Text style={Styles.heading2}>Enter your details.</Text>
                        <Text style={Styles.heading2}> </Text>
                        <Text style={Styles.heading2}></Text>

                        <Animatable.View
                            animation={'slideInDown'}
                            duration={1000}
                            // delay={index * 100}
                            style={Styles.cardBig}>
                            <View style={{ padding: responsiveWidth(7), alignItems: 'center', justifyContent: 'center' }}>

                                <View style={Styles.card_small}>
                                    <Image source={require('../../assets/user.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setUsername(text)} value={username} placeholder="Enter Full Name" style={Styles.card_small_txt} />
                                </View>

                                <View style={Styles.card_small}>
                                    <Image source={require('../../assets/email.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setEmail(text)} value={email} placeholder="Enter Email" style={Styles.card_small_txt} />
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../assets/lock.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setPassword(text)} value={password} placeholder="Enter Password" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} secureTextEntry={true} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>



                            </View>



                        </Animatable.View>
                        <TouchableOpacity onPress={() => saveLoginData()}>
                            <View style={Styles.big_but}>
                                <Text style={{ color: colors.text_light, fontSize: responsiveFontSize(2.5), marginTop: responsiveHeight(0.5), marginHorizontal: responsiveWidth(1), fontFamily: 'Poppins_500Medium' }}>Sign up</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: responsiveHeight(4) }}>
                            <Text style={[Styles.butText, { color: 'white' }]} >Already have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}><Text style={[Styles.butText, { color: colors.secondary }]} >Sign In</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
            {load ? <View style={{ backgroundColor: colors.shade, justifyContent: 'center', alignItems: 'center', top: 0, width: responsiveWidth(100), height: responsiveHeight(100), position: 'absolute' }}>
                <ActivityIndicator size={'large'} color={colors.bg} />
            </View> : null}
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
            backgroundColor: 'white'
        },
        heading1: {
            textAlign: 'center',
            color: colors.bg,
            fontFamily: 'Poppins_500Medium',
            marginTop: responsiveHeight(8),
            marginHorizontal: responsiveWidth(2),
            fontSize: responsiveFontSize(4),
            width: responsiveWidth(88)
        },
        heading2: {
            textAlign: 'center',
            color: colors.text_light,
            fontFamily: 'Poppins_500Medium',
            marginHorizontal: responsiveWidth(2),
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
            // backgroundColor:colors.secondary2,
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
            marginTop: responsiveHeight(3),
            width: responsiveWidth(41.5),
            height: responsiveHeight(6),
            backgroundColor: colors.secondary,
            borderRadius: responsiveWidth(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
)

export default Register;