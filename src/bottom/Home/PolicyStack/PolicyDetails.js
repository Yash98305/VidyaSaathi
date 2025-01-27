import { View, Text, ImageBackground, ActivityIndicator, TextInput,Linking, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React from 'react'

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';

const PolicyDetails = ({navigation,route}) => {
    const { title, location, url,discription,cat,dep,link,Mystatus,mytxt } = route.params;
    const openLinkInChrome = async () => {
        const url = `${link}`; // Replace with your desired URL
        const isSupported = await Linking.canOpenURL(url);
      
        if (isSupported) {
          await Linking.openURL(url);
        } else {
          console.error(`Cannot open URL: ${url}`);
        }
      };
  return (
    <View style={style.maindashboard}>
      <View style={style.topbox}>
        <View style={style.navbar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}><View style={style.but_menu}>
            <Image source={require('../../../../assets/menu.png')} style={style.but_menu_img} />
          </View></TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={[style.but_menu]}>
              <Image source={require('../../../../assets/back.png')} style={style.but_menu_img} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'center',justifyContent:'center', width: responsiveWidth(88), height: responsiveHeight(30) }}>
        <Image source={{uri:`${url}`}} style={{width:responsiveWidth(40),height:responsiveWidth(40),borderRadius:responsiveWidth(5)}}/>




        </View>
      </View>
      <View style={{ width: responsiveWidth(100), height: responsiveHeight(70), backgroundColor: colors.bg, borderTopRightRadius: responsiveWidth(20), alignItems: 'center' }}>
        <View style={{ marginTop: responsiveHeight(3) }}>
          <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(88), textAlign: 'left', color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>{dep}</Animatable.Text>
          <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(88), textAlign: 'left', color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.6), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>{title}</Animatable.Text>
          <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(88), textAlign: 'left', color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>{location}</Animatable.Text>
        </View>
        <View style={{ marginTop: responsiveHeight(2), width: responsiveWidth(88), alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { }}>
            <Animatable.View animation={'fadeInUp'} duration={500} style={[style.big_but, { backgroundColor: '#CEE4FC' }]}>
              <Text style={{ color: colors.primary2, fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>{Mystatus}</Text>
            </Animatable.View>
          </TouchableOpacity>

          <Animatable.Text animation={'slideInRight'} duration={1000} style={{ textAlign: 'right', color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.8), marginTop: responsiveFontSize(0.5) }}>{mytxt}</Animatable.Text>
        </View>
        <View style={{ width: responsiveWidth(88), height: responsiveHeight(0.3), backgroundColor: colors.shade2, marginTop: responsiveHeight(2) }}></View>
        <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(88), textAlign: 'left', color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>Description</Animatable.Text>
        
        <Animatable.Text animation={'slideInLeft'} duration={1000} style={{ height: responsiveHeight(12), marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(88), textAlign: 'left', color: colors.secondary3, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>{discription}</Animatable.Text>
        <TouchableOpacity onPress={() => {openLinkInChrome() }}>
          <Animatable.View animation={'fadeInUp'} duration={500} style={[style.big_but]}>
            <Text style={{ color: colors.bg, fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Apply</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  maindashboard: {
    flex: 1,
    backgroundColor: colors.primary2,
    alignItems: 'center'
  },
  big_but: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(38),
    height: responsiveHeight(5),
    backgroundColor: colors.secondary,
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  topbox:
  {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    backgroundColor: colors.primary2,

    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
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

})

export default PolicyDetails