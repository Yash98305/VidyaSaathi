import { View, Text, ImageBackground, ActivityIndicator, TextInput, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';

const MenuScreen = (props) => {
  return (
    <View style={style.maindashboard}>
      <View style={style.topbox}>
        <View style={style.navbar}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}><View style={style.but_menu}>
            <Image source={require('../../../../assets/menu.png')} style={style.but_menu_img} />
          </View></TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <View style={[style.but_menu]}>
              <Image source={require('../../../../assets/back.png')} style={style.but_menu_img} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: responsiveWidth(88), marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', height: responsiveHeight(20) }}>
          <View style={{ width: responsiveWidth(30), height: responsiveWidth(30), borderRadius: responsiveWidth(50) }}>
            <Image source={require('../../../../assets/user2.png')} style={{ width: responsiveWidth(30), height: responsiveWidth(30), borderRadius: responsiveWidth(50) }} />
          </View>
          <View style={{ height: responsiveHeight(20), justifyContent: 'center' }}>
            <Animatable.Text animation={'slideInUp'} duration={500} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Welcome,</Animatable.Text>
            <Animatable.Text animation={'slideInUp'} duration={700} style={{ color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Jayant Sharma</Animatable.Text>
            <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Physics</Animatable.Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly', width: responsiveWidth(92), height: responsiveHeight(16), backgroundColor: 'white', borderRadius: responsiveWidth(5), marginTop: responsiveHeight(4), shadowColor: 'black', elevation: 5, shadowOffset: 10, shadowRadius: 7 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), width: responsiveWidth(15), backgroundColor: '#E8CEFB', borderRadius: responsiveWidth(50) }}>
          <Image source={require('../../../../assets/faculty.png')} style={{ height: responsiveWidth(8), width: responsiveWidth(8), tintColor: '#9D89B9' }} />
        </View>
        <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(7), marginTop: responsiveFontSize(1), marginHorizontal: responsiveWidth(2) }}>04</Animatable.Text>
        <View style={{ height: responsiveHeight(8), alignItems: 'flex-start', justifyContent: 'center' }}>
          <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>Classes</Animatable.Text>
          <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>Assigned</Animatable.Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: responsiveWidth(92), height: responsiveHeight(35), borderRadius: responsiveWidth(5), marginTop: responsiveHeight(0) }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: responsiveWidth(45), height: responsiveHeight(13), backgroundColor: 'white', borderRadius: responsiveWidth(5), marginTop: responsiveHeight(3), shadowColor: 'black', elevation: 5, shadowOffset: 10, shadowRadius: 7 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), width: responsiveWidth(15), backgroundColor: '#C5FDCC', borderRadius: responsiveWidth(2) }}>
              <Image source={require('../../../../assets/addStu.png')} style={{ height: responsiveWidth(8), width: responsiveWidth(8), tintColor: '#45C04E' }} />
            </View>
            <View style={{ height: responsiveHeight(8), alignItems: 'flex-start', justifyContent: 'center' }}>
              <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Add</Animatable.Text>
              <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>Student</Animatable.Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: responsiveWidth(45), height: responsiveHeight(13), backgroundColor: 'white', borderRadius: responsiveWidth(5), marginTop: responsiveHeight(3), shadowColor: 'black', elevation: 5, shadowOffset: 10, shadowRadius: 7 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), width: responsiveWidth(15), backgroundColor: '#FBC5BA', borderRadius: responsiveWidth(2) }}>
              <Image source={require('../../../../assets/policy.png')} style={{ height: responsiveWidth(8), width: responsiveWidth(8), tintColor: '#E95941' }} />
            </View>
            <View style={{ height: responsiveHeight(8), alignItems: 'flex-start', justifyContent: 'center' }}>
              <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>student's</Animatable.Text>
              <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2) }}>Detail</Animatable.Text>
            </View>
          </View>

        </View>
        
        <View style={{ alignItems: 'center', justifyContent: 'center', width: responsiveWidth(44), height: responsiveHeight(29), backgroundColor: 'white', borderRadius: responsiveWidth(5), marginTop: responsiveHeight(3), shadowColor: 'black', elevation: 5, shadowOffset: 10, shadowRadius: 7 }}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('AttendenceScreen')}}>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), width: responsiveWidth(15), backgroundColor: '#E8CEFB', borderRadius: responsiveWidth(2) }}>
            <Image source={require('../../../../assets/class.png')} style={{ height: responsiveWidth(8), width: responsiveWidth(8), tintColor: '#9D89B9' }} />
          </View>
          </TouchableOpacity>
          <Animatable.Text animation={'slideInUp'} duration={1000} style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2), textAlign: 'center' }}>Upload Attendence</Animatable.Text>


        </View>
   

      </View>

    </View>
  )
}
const style = StyleSheet.create({
  maindashboard: {
    flex: 1,
    backgroundColor: colors.shade2,
    alignItems: 'center'
  },
  topbox:
  {
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    backgroundColor: colors.primary2,
    borderBottomLeftRadius: responsiveWidth(10),
    borderBottomRightRadius: responsiveWidth(10),
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

export default MenuScreen