import { View, ActivityIndicator, Text, Image, StyleSheet, Alert, TouchableOpacity, ImageBackground, ToastAndroid, TextInput, Animated, Keyboard } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import axios from "axios";
import * as Animatable from 'react-native-animatable';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// import { SlideInUp } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../../Dimensions';





const CreateAdminSide = (props) => {

    const [load, setLoad] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [pn, setPn] = useState("");
    const [an, setAn] = useState("");
    const [gender, setGender] = useState("");
    const [rn, setRn] = useState("");
    const [id, setId] = useState(null);


    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };


    const saveLoginData = async () => {
        Keyboard.dismiss();
        if (name == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (email == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (dob == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (pn == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (an == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (gender == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (rn == '') {
            ToastMessage('All fields are required');
            return;
        }
        setLoad(true);
        const data = {
            name: `${name}`,
            email: `${email}`,
            dob: `${dob}`,
            phone: `${pn}`,
            aadhaar: `${an}`,
            gender: `${gender}`,
            registrationNumber: `${rn}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/admin/addAdmin', data);
            console.log(response.data.newAdmin.registrationNumber);
            setId(response.data.registrationNumber);
            let registrationNu = response.data.newAdmin.registrationNumber;
            Alert.alert('Registration Number', `${registrationNu}`, [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

            setLoad(false);
            ToastMessage('Faculty Created Successfully.');


        }
        catch (error) {
            // console.log(error);
            setLoad(false);
            ToastMessage('Something went wrong.');

            console.log(error);
            if (error.response) {
                // User already exists, handle the response
                console.log(error.response.message);

                // Add your code to handle the response accordingly
            }
        }
    };
    // console.log(id)
    const loginSuccessToast = () => {
        ToastAndroid.show('Login successfully.', ToastAndroid.SHORT, ToastAndroid.TOP,);
    };
    const ErrorToast = () => {
        ToastAndroid.show('Something went wrong, Try again later!', ToastAndroid.SHORT, ToastAndroid.TOP,);
    };




    return (
        <View style={Styles.screen}>
            <ImageBackground source={require('../../../../assets/bg7.jpg')} resizeMode="cover" style={{ flex: 1, width: responsiveWidth(100), alignItems: 'center', }} imageStyle={{ opacity: 1, backgroundColor: colors.text_light }}>
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
                            <Animatable.Text animation={'fadeIn'} duration={1000} style={[Styles.heading1]}>Create Admin Profile</Animatable.Text>
                        </View>
                        <Text style={Styles.heading2}>Please enter details to continue.</Text>
                        <Text style={Styles.heading2}> </Text>

                        <Animatable.View
                            animation={'slideInDown'}
                            duration={1000}
                            // delay={index * 100}
                            style={Styles.cardBig}>
                            <View style={{ padding: responsiveWidth(5), alignItems: 'center', justifyContent: 'center' }}>

                                <View style={Styles.card_small}>
                                    <Image source={require('../../../../assets/user.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setName(text)} value={name} placeholder="Enter Name" style={Styles.card_small_txt} />
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/email.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setEmail(text)} value={email} placeholder="Enter email" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/date.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setDob(text)} value={dob} placeholder="Date of Birth (YYYY-MM-DD)" style={[Styles.card_small_txt, { width: responsiveWidth(88) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setPn(text)} value={pn} placeholder="Phone Number" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/policy.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setAn(text)} value={an} placeholder="Aadhaar Number" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/gender.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setGender(text.toLowerCase())} value={gender} placeholder="Gender" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/policy.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setRn(text)} value={rn} placeholder="Registration Number" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>


                            </View>

                        </Animatable.View>

                        <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto' }} >
                            <TouchableOpacity onPress={() => saveLoginData()}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={Styles.big_but}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Submit</Text>
                                </Animatable.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                props.navigation.goBack(

                                )
                            }}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but, { backgroundColor: colors.primary2 }]}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Go Back</Text>
                                </Animatable.View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: responsiveHeight(4) }}>
                            {/* <Text style={[Styles.butText, { color: 'white' }]} >Don't have an account? </Text> */}
                            {/* <TouchableOpacity onPress={() => props.navigation.navigate('Register')}><Text style={[Styles.butText, { color: colors.secondary }]} >Sign up</Text></TouchableOpacity> */}
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
            backgroundColor: colors.shade,
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
            fontSize: responsiveFontSize(2.9),
            width: responsiveWidth(100),
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        heading2: {
            textAlign: 'center',
            color: '#eff3f6',
            fontFamily: 'Poppins_500Medium',
            // marginHorizontal: responsiveWidth(2),
            fontSize: responsiveFontSize(2),
            width: responsiveWidth(88),
            marginLeft: 'auto',
            marginRight: 'auto'
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
            marginTop: responsiveHeight(1),
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },



    }
)

export default CreateAdminSide