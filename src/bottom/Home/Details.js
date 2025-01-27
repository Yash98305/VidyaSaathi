import { View, ActivityIndicator, Text, Image, FlatList, Pressable, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid, TextInput, Animated, Keyboard } from 'react-native'
import React, { useState } from 'react'
import axios from "axios";
import * as Animatable from 'react-native-animatable';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// import { SlideInUp } from 'react-native-reanimated';
import { colors } from '../../Dimensions';
import { JobsAPI } from '../../API/JobsAPI';




const Details = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);
    // const [filterData, setFilterData] = useState(JobsAPI);
    const [districtf, setDistrictf] = useState(false);
    const [districtName,setDistrictName] =useState();
    const [mydistrict,setMyDistrict] = useState('');

    const [blockf, setBlockf] = useState(false);
    const [blockName,setBlockName] =useState();
    const [myblock,setMyBlock] = useState('');

    
    const [schoolf, setSchoolf] = useState(false);
    const [schoolName,setSchoolName] =useState();
    const [mySchool,setMySchool] = useState('');

    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };


    const districtShow = async () => {
        setBlockf(false)
        setSchoolf(false)
        setLoad(true);
        // const data = {
        //     email: `${username}`,
        //     password: `${password}`,
        // };
        try {
            const response = await axios.get('https://gujarat-app.onrender.com/api/v1/user/getDistrict');
            console.log(response.data);
            setDistrictName(response.data.district)
            setLoad(false);
            setDistrictf(true)

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

    }
    const blockShow = async () => {
        setDistrictf(false)
        setSchoolf(false)
        setLoad(true);
        const data = {
            district: `${mydistrict._id}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/user/getBlock',data);
            console.log(response.data);
            setBlockName(response.data.block)
            setLoad(false);
            setBlockf(true)

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

    }
    const schoolShow = async () => {
        setDistrictf(false)
        setBlockf(false)
        setLoad(true);
        const data = {
            block: `${myblock._id}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/user/getSchool',data);
            console.log(response.data);
            setSchoolName(response.data.school)
            setLoad(false);
            setSchoolf(true)

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

    }
    const submit=()=>{
        if(mySchool=='' || myblock=='' || mydistrict==''){
            ToastMessage('All fields are required.')
            return
        }
        setLoad(true)
        setTimeout(()=>{
            setLoad(false)
            ToastMessage('Your response has been submitted successfully.')

        },3000)
       
    }

    return (
        <View style={Styles.screen}>
            <ImageBackground source={require('../../../assets/bg7.jpg')} resizeMode="cover" style={{ flex: 1, width: responsiveWidth(100), alignItems: 'center', }} imageStyle={{ opacity: 1, backgroundColor: colors.text_light }}>
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
                            <Animatable.Text animation={'fadeIn'} duration={1000} style={[Styles.heading1]}>School Enrollment Form</Animatable.Text>
                        </View>
                        <Text style={Styles.heading2}>Please enter details to continue.</Text>
                        <Text style={Styles.heading2}> </Text>

                        <Animatable.View
                            animation={'slideInDown'}
                            duration={1000}
                            // delay={index * 100}
                            style={Styles.cardBig}>
                            <View style={{ padding: responsiveWidth(7), alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={()=>{districtShow()}}>
                                    <View style={Styles.card_small}>
                                        <Image source={require('../../../assets/student.png')} style={Styles.card_small_img} />
                                        <TextInput editable={false} placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} value={mydistrict.name} placeholder="Select District" style={Styles.card_small_txt} />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{blockShow()}}>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../assets/student.png')} style={Styles.card_small_img} />
                                    <TextInput editable={false} placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} value={myblock.name} placeholder="Select Block" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]}  />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{schoolShow()}}>
                                <View style={[Styles.card_small]}>
                                    <Image source={require('../../../assets/student.png')} style={Styles.card_small_img} />
                                    <TextInput editable={false} placeholderTextColor={colors.secondary3} cursorColor={colors.secondary}  value={mySchool.name} placeholder="Select School" style={[Styles.card_small_txt, { width: responsiveWidth(52) }]} />
                                    {/* <TouchableOpacity><Text style={[Styles.butText, { color: '#4294ff' }]} >forgot</Text></TouchableOpacity> */}
                                </View>
                                </TouchableOpacity>


                            </View>

                        </Animatable.View>

                        <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto' }} >
                            <TouchableOpacity onPress={() => {submit()}}>
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

                   {districtf? <View style={{ height: responsiveHeight(45), width: responsiveWidth(88), borderRadius: responsiveWidth(9), alignItems: 'center', overflow: 'hidden', marginTop: responsiveHeight(2), backgroundColor: 'white', position: 'absolute', top: 0, marginTop: responsiveHeight(44) }}>

                        <FlatList
                            showsVerticalScrollIndicator={false}

                            data={districtName}
                            renderItem={({ item, index }) => (
                                <View style={{ width: responsiveWidth(95), alignItems: 'center' }}>
                                    <Pressable onPress={() => {setDistrictf(false); setMyDistrict(item);}}>
                                        <Animatable.View
                                            animation={'fadeInUp'}
                                            duration={1000}
                                            delay={index * 100}
                                            style={Styles.scrollView_card}>
                                            {/* <Text>{index+1}</Text> */}
                                        
                                            <View style={{borderBottomWidth:responsiveWidth(1),borderColor:colors.secondary2}}>
                                                <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.8) }}>{item.name}</Text>
                                                {/* <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.3) }}>{item.dep}</Text> */}
                                            </View>
                                        </Animatable.View>
                                    </Pressable>
                                </View>
                            )} />
                    </View>:null}
                   {blockf? <View style={{ height: responsiveHeight(37), width: responsiveWidth(88), borderRadius: responsiveWidth(9), alignItems: 'center', overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0, marginTop: responsiveHeight(53) }}>

                        <FlatList
                            showsVerticalScrollIndicator={false}

                            data={blockName}
                            renderItem={({ item, index }) => (
                                <View style={{ width: responsiveWidth(95), alignItems: 'center' }}>
                                    <Pressable onPress={() => {setBlockf(false); setMyBlock(item);}}>
                                        <Animatable.View
                                            animation={'fadeInUp'}
                                            duration={1000}
                                            delay={index * 100}
                                            style={Styles.scrollView_card}>
                                            {/* <Text>{index+1}</Text> */}
                                        
                                            <View style={{borderBottomWidth:responsiveWidth(1),borderColor:colors.secondary2}}>
                                                <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.8) }}>{item.name}</Text>
                                                {/* <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.3) }}>{item.dep}</Text> */}
                                            </View>
                                        </Animatable.View>
                                    </Pressable>
                                </View>
                            )} />
                    </View>:null}
                   {schoolf? <View style={{ height: responsiveHeight(28), width: responsiveWidth(88), borderRadius: responsiveWidth(9), alignItems: 'center', overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0, marginTop: responsiveHeight(63) }}>

                        <FlatList
                            showsVerticalScrollIndicator={false}

                            data={schoolName}
                            renderItem={({ item, index }) => (
                                <View style={{ width: responsiveWidth(95), alignItems: 'center' }}>
                                    <Pressable onPress={() => {setSchoolf(false); setMySchool(item);}}>
                                        <Animatable.View
                                            animation={'fadeInUp'}
                                            duration={1000}
                                            delay={index * 100}
                                            style={Styles.scrollView_card}>
                                            {/* <Text>{index+1}</Text> */}
                                        
                                            <View style={{borderBottomWidth:responsiveWidth(1),borderColor:colors.secondary2}}>
                                                <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.8) }}>{item.name}</Text>
                                                {/* <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.3) }}>{item.dep}</Text> */}
                                            </View>
                                        </Animatable.View>
                                    </Pressable>
                                </View>
                            )} />
                    </View>:null}

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
            fontSize: responsiveFontSize(3.1),
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },



    }
)

export default Details