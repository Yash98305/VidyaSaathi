import { View, Text, ImageBackground, ActivityIndicator, TextInput, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';

import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import axios from 'axios';

const StatusScreen = (props) => {
    const [data, setData] = useState('');
    const [active, setActive] = useState('');
    const [deactive, setDeactive] = useState('');

    const prop = {
        activeStrokeWidth: 18,
        inActiveStrokeWidth: 19,
        inActiveStrokeOpacity: 0.3,

    };
    const r = responsiveWidth(25)
    useEffect(() => {
        ActiveFetchData();
        DeactiveFetchData();
    }, [])

    const ActiveFetchData = async () => {

        try {
            const response = await axios.get('https://gujarat-app.onrender.com/api/v1/admin/getActiveStudents');

            console.log(response.data.maleStudents);
            setActive(response.data)

        }
        catch (error) {
            console.log(error);
            if (error.response) {
                console.log(error.response);
            }
        }
    };
    const DeactiveFetchData = async () => {

        try {
            const response = await axios.get('https://gujarat-app.onrender.com/api/v1/admin/getDeactiveStudents');
            console.log(response.data);
            setDeactive(response.data)
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                console.log(error.response);
            }
        }
    };
    


    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };





    return (
        <View style={Styles.full_section}>

            <View style={{ backgroundColor: colors.primary2, width: responsiveWidth(100), height: responsiveHeight(30), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }}>
                <View style={Styles.navbar}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}><View style={Styles.but_menu}>
                        <Image source={require('../../../../assets/menu.png')} style={Styles.but_menu_img} />
                    </View></TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <View style={[Styles.but_menu]}>
                            <Image source={require('../../../../assets/back.png')} style={Styles.but_menu_img} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(6), justifyContent: 'center' }}>
                    {/* <Image source={require('../../../../assets/book.png')} style={{ width: responsiveWidth(9), height: responsiveWidth(9), tintColor: colors.bg }} /> */}
                    <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Analysis of School</Animatable.Text>
                </View>

            </View>

            {/* <CircularProgress
                    value={2}
                    radius={r}
                    valueSuffix={'%'}
                    duration={3000}
                    progressValueColor={'#0e9f00'}
                    activeStrokeColor={'#0e9f00'}
                    inActiveStrokeColor={'#0e9f00'}
                    inActiveStrokeOpacity={0.2}
                    maxValue={100}
                    title={'Active'}
                    titleColor={'black'}
                    titleStyle={{ fontWeight: 'bold' }}
                    titleFontSize={13}
                    progressValueFontSize={22}
                /> */}
            <View style={{ marginTop: responsiveHeight(8) }}>
                <CircularProgressBase
                    {...prop}
                    value={(deactive.l/(active.l+deactive.l)*100).toFixed(0)}
                    radius={r}
                    activeStrokeColor={'#e84118'}
                    inActiveStrokeColor={'#e84118'}
                    duration={3000}
                >
                    <CircularProgressBase
                        {...prop}
                        value={(active.l/(active.l+deactive.l)*100).toFixed(0)}
                        radius={r * 1.3}
                        activeStrokeColor={'#0e9f00'}
                        inActiveStrokeColor={'#badc58'}
                        duration={3000}
                    >


                    </CircularProgressBase>

                </CircularProgressBase>
            </View>
            <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'space-between',marginTop:responsiveFontSize(4) }}>
                <View style={{ alignItems: 'center' }}>
                    <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>{(active.l/(active.l+deactive.l)*100).toFixed(2)}%</Animatable.Text>
                    <TouchableOpacity onPress={() => logout()}>
                        <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but, { backgroundColor: '#0e9f00' }]}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Active</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>{(deactive.l/(active.l+deactive.l)*100).toFixed(2)}%</Animatable.Text>
                    <TouchableOpacity onPress={() => logout()}>
                        <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but, { backgroundColor: '#e84118' }]}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Deactive</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>







        </View>
    )
}
const Styles = StyleSheet.create(
    {
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
        section1_img_wrap: {
            height: responsiveWidth(30),
            width: responsiveWidth(30),
            borderWidth: responsiveWidth(0.5),
            borderColor: colors.primary,
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginTop: responsiveHeight(2)
        },
        center: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        full_section: {
            flex: 1,
            alignItems: 'center',
            // backgroundColor: '#F5F6F8'
            backgroundColor: colors.secondary2
        },
        navbar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(3),
            width: responsiveWidth(88)
        },
        but_menu: {
            backgroundColor: colors.primary,
            height: responsiveWidth(10),
            width: responsiveWidth(10),
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            justifyContent: 'center'
        },
        but_menu_img: {
            tintColor: colors.text_light,
            height: responsiveWidth(6),
            width: responsiveWidth(6)
        },
        searchbox_wrap: {
            height: responsiveHeight(10),
            alignItems: 'center',
            width: responsiveWidth(88),
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        searchbox: {
            width: responsiveWidth(75),
            height: responsiveHeight(6),
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingHorizontal: responsiveWidth(2),
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: 10,
            elevation: 5,
            shadowRadius: 2
        },
        search_img: {
            height: responsiveWidth(6),
            width: responsiveWidth(6),
            tintColor: colors.primary2
        },
        textInput: {
            width: responsiveWidth(55),
            textAlign: 'left',
            color: 'black',
            fontFamily: 'Poppins_500Medium',
            marginTop: responsiveFontSize(0.5),
            marginHorizontal: responsiveWidth(2),
            fontSize: responsiveFontSize(1.8)
        },
        close_but_img: {
            height: responsiveWidth(5),
            width: responsiveWidth(5),
            tintColor: colors.primary2
        },
        filter_but: {
            backgroundColor: colors.primary,
            height: responsiveWidth(11),
            width: responsiveWidth(11),
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center'
        },
        filter_but_img: {
            height: responsiveWidth(6),
            width: responsiveWidth(6),
            tintColor: 'white'
        },
        section2: {
            height: responsiveHeight(60),
            backgroundColor: colors.shade2,
            width: responsiveWidth(100),
            borderWidth: 0,
            borderTopLeftRadius: responsiveWidth(10),
            borderTopRightRadius: responsiveWidth(10),
            alignItems: 'center'
        },
        scrollView_card: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: responsiveWidth(90),
            backgroundColor: 'white',
            height: responsiveHeight(10),
            borderRadius: responsiveWidth(5),
            overflow: 'hidden',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            margin: responsiveWidth(1.5),
            shadowColor: 'black',
            shadowOffset: 10,
            elevation: 5,
            shadowRadius: 2
        },
        scrollView_card_img: {
            height: responsiveWidth(14),
            width: responsiveWidth(14),
            // tintColor: '#B3B3C3',
            marginLeft: responsiveWidth(5),
            borderWidth: 2,
            borderColor: colors.secondary,
            borderRadius: responsiveWidth(100)

        },
    }
)


export default StatusScreen