import { View, ActivityIndicator, Text, Image, StyleSheet, Alert, TouchableOpacity, ImageBackground, ToastAndroid, TextInput, Animated, Keyboard } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import axios from "axios";
import * as Animatable from 'react-native-animatable';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// import { SlideInUp } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../../Dimensions';





const Educational = (props) => {

    const [load, setLoad] = useState(false);
    const [lastSchool, setlastSchool] = useState("");
    const [yearOfDropout, setyearOfDropout] = useState(0);
    const [highestQualification, sethighestQualification] = useState("");
    const [reason, setreason] = useState("");
    const [fieldOfInterest, setfieldOfInterest] = useState("");


    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };


    const saveLoginData = async () => {
        Keyboard.dismiss();
       
        if (dob == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (gender == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (phone == '') {
            ToastMessage('All fields are required');
            return;
        }
        setLoad(true);
        const data = {
            dob: `${dob}`,
            gender: `${gender}`,
            phone: `${phone}`,
        };
        console.log(data)
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/admin/addFaculty', data);
            console.log(response.data.newFaculty.registrationNumber);
            // setId(response.data.registrationNumber);
            let registrationNu = response.data.newFaculty.registrationNumber;
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
                            <Animatable.Text animation={'fadeIn'} duration={1000} style={[Styles.heading1]}>Educational Details</Animatable.Text>
                        </View>
                        <Text style={Styles.heading2}>Please enter details to continue.</Text>
                        {/* <Text style={Styles.heading2}> </Text> */}

                        <Animatable.View
                            animation={'slideInDown'}
                            duration={1000}
                            // delay={index * 100}
                            style={Styles.cardBig}>
                            <View style={{ padding: responsiveWidth(5), alignItems: 'center', justifyContent: 'center' }}>


                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setlastSchool(text)} value={lastSchool} placeholder="Last School" style={[Styles.card_small_txt, { width: responsiveWidth(77) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setyearOfDropout(text)} value={yearOfDropout} placeholder="Year of Dropout" style={[Styles.card_small_txt, { width: responsiveWidth(77) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => sethighestQualification(text)} value={highestQualification} placeholder="Highest Qualification" style={[Styles.card_small_txt, { width: responsiveWidth(77) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setreason(text)} value={reason} placeholder="Course" style={[Styles.card_small_txt, { width: responsiveWidth(77) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../../assets/phone.png')} style={Styles.card_small_img} />
                                    <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setfieldOfInterest(text)} value={fieldOfInterest} placeholder="Field of Interest" style={[Styles.card_small_txt, { width: responsiveWidth(77) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>

                            


                            </View>

                        </Animatable.View>

                        <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto' }} >
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={Styles.big_but}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Go back</Text>
                                </Animatable.View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Reasons');
                            }}>
                                <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but, { backgroundColor: colors.primary2 }]}>
                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Next</Text>
                                </Animatable.View>
                            </TouchableOpacity>
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
            marginRight: 'auto',
            marginBottom:responsiveHeight(5)
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
            marginTop: responsiveHeight(1),
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

export default Educational