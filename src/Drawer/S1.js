import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colors } from '../Dimensions'
import * as Animatable from 'react-native-animatable';
const S1 = (props) => {
  const names = [
    {
      name: 'https://img.jagranjosh.com/images/2022/May/352022/gujarat-govt-to-mass-promote-school-students.jpg'
    },
    {
      name: 'https://img.youtube.com/vi/9tYX9vsm1zc/hqdefault.jpg'
    },
    {
      name: 'https://dst.gujarat.gov.in/images/D-of-itc.jpg'
    },
    {
      name: 'https://i.ytimg.com/vi/5EQWTeetO_4/maxresdefault.jpg'
    },
    {
      name: 'https://probono-india.in/Indian-Society/Blog/207_National-Education-Policy-2020-NEP-2020-1280x720.jpeg'
    },
    {
      name: 'https://resize-img.sandesh.com/assets.sandesh.com/images/2022/03/12/3K1u8HQ0yxRLOSeZb5yCxFtMCAnm6ocPm4dwHrzu.jpg?resize=1000,562'
    }]
  return (
    <View style={Styles.full_section}>

      <View style={{ backgroundColor: colors.primary2, width: responsiveWidth(100), height: responsiveHeight(24), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }}>
        <View style={Styles.navbar}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}><View style={Styles.but_menu}>
            <Image source={require('../../assets/menu.png')} style={Styles.but_menu_img} />
          </View></TouchableOpacity>
    
          <TouchableOpacity onPress={() => { }}>
            <View style={[Styles.but_menu]}>
              <Image source={require('../../assets/user.png')} style={Styles.but_menu_img} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(5), justifyContent: 'center' }}>
          <Image source={require('../../assets/book.png')} style={{ width: responsiveWidth(9), height: responsiveWidth(9), tintColor: colors.bg }} />
          <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Vidya Saathi</Animatable.Text>
        </View>
      </View>

      <View style={{ width: responsiveWidth(88), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: responsiveHeight(2) }}>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('HotelsStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5, backgroundColor: '#fff6e0' }]}>
            <Image source={require('../../assets/employee.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Jobs
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('EventsStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5, backgroundColor: '#f0d3ff' }]}>
            <Image source={require('../../assets/policy.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Policies
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5, backgroundColor: '#ffd3d3' }]}>
            <Image source={require('../../assets/book2.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Courses
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5, backgroundColor: '#e0ffc7' }]}>
            <Image source={require('../../assets/list.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Details
          </Text>
        </View>
      </View>

      <View style={{ width: responsiveWidth(100), height: responsiveHeight(31), marginTop: responsiveHeight(1),overflow:'visible' }}>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        // inverted={true}
        data={names}
        renderItem={({ item }) =>
     
          <View style={{
            width: responsiveWidth(88), height: responsiveHeight(25), backgroundColor: 'white', marginHorizontal: responsiveWidth(6), borderRadius: responsiveWidth(10), shadowColor: "#000",
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            marginTop: responsiveHeight(2),
            elevation: 10,
            alignItems:'center',justifyContent:'center'
          }}>
            <Image source={{uri: item.name}} style={{ width: responsiveWidth(88), height: responsiveHeight(25), marginHorizontal: responsiveWidth(4), borderRadius: responsiveWidth(10) }} />
          </View>
        }
      />
      </View>
      <View style={{ marginTop: responsiveHeight(0), width: responsiveWidth(88) }}>
        <Text style={{ width: responsiveWidth(88), color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.5), textAlign: 'left' }}>Dropout Rate</Text>
        <View style={Styles.circular_card}><Text>Dropout Percentage</Text></View>
      </View>

    </View >
  )
}
const Styles = StyleSheet.create(
  {

    center: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    full_section: {
      flex: 1,
      alignItems: 'center',
      // backgroundColor: '#F5F6F8'
      backgroundColor:colors.secondary2
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
    card: {
      height: responsiveHeight(10),
      width: responsiveWidth(19),
      backgroundColor: 'white',
      borderRadius: responsiveWidth(3),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      elevation: 5,
      shadowOffset: 10,
      shadowRadius: 7,
    },
    card_inside: {
      backgroundColor: 'white',
      height: responsiveWidth(10),
      width: responsiveWidth(10),
      borderRadius: responsiveWidth(50),
      alignItems: 'center',
      justifyContent: 'center'
    },
    card_img: {
      tintColor: 'grey',
      height: responsiveWidth(8),
      width: responsiveWidth(8)
    },
    butLogo: {
      height: responsiveWidth(10),
      width: responsiveWidth(10),
      tintColor: colors.primary,
      margin: responsiveWidth(1)
    },
    section_second_but: {
      height: responsiveWidth(20),
      width: responsiveWidth(19),
      backgroundColor: colors.bg,
      borderRadius: responsiveWidth(3),
      shadowColor: 'black',
      shadowOffset: 10,
      shadowRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: responsiveWidth(0.5),
      borderColor: colors.bg
    },
    section_sec_but_text: {
      color: colors.txt_dark,
      fontSize: responsiveFontSize(1.5),
      fontFamily: 'Poppins_500Medium',
      marginTop: responsiveHeight(0.5)
    },
    circular_card: {
      height: responsiveHeight(20),
      width: responsiveWidth(88),
      backgroundColor: 'white',
      borderRadius: responsiveWidth(3),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      elevation: 5,
      shadowOffset: 10,
      shadowRadius: 7,

    }
  }
)


export default S1