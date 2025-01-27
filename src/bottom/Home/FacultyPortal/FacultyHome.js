import { View, Text, ImageBackground,Linking, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';
import CircularLoad from '../../../Components/CircularLoad';
import { ImagesAPI } from '../../../API/ImagesAPI';
import { names } from '../../../API/Crousel_Policy';


const FacultyHome = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index, looping back to the beginning if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImagesAPI.length);
    }, 6000); // Change the image every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  const openLinkInChrome = async () => {
    const url = "https://www.digitalgujarat.gov.in/SchemPortal/Policies.aspx"; // Replace with your desired URL
    const isSupported = await Linking.canOpenURL(url);
  
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };

  return (
    <View style={Styles.full_section}>

      <View style={{ overflow:'hidden', backgroundColor: colors.primary2, width: responsiveWidth(100), height: responsiveHeight(20), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }}>
        <ImageBackground source={{ uri: ImagesAPI[currentImageIndex].url }} resizeMode="cover" style={{ flex: 1, width: responsiveWidth(100), alignItems: 'center', }} imageStyle={{ opacity: 1, backgroundColor: colors.text_light }}>
        <View style={[{backgroundColor:colors.shade, width: responsiveWidth(100), height: responsiveHeight(20), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11)}]}>
          <View style={Styles.navbar}>

            <TouchableOpacity onPress={() => props.navigation.openDrawer()}><View style={Styles.but_menu}>
              <Image source={require('../../../../assets/menu.png')} style={Styles.but_menu_img} />
            </View></TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('FacultyProfile')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Faculty</Text>
                <View style={[Styles.but_menu]}>
                  <Image source={require('../../../../assets/user.png')} style={Styles.but_menu_img} />
                </View>
              </View>
            </TouchableOpacity>

          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(1), justifyContent: 'center' }}>
            <Image source={require('../../../../assets/pic2.png')} style={{ width: responsiveWidth(40), height: responsiveWidth(18) }} />
            {/* <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Vidya Saathi</Animatable.Text> */}
          </View>
          </View>
        </ImageBackground>
      </View>

      <View style={{ width: responsiveWidth(88), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: responsiveHeight(1) }}>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('JobStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../../assets/employee.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Jobs
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('PolicyStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../../assets/policy.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Policies
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => props.navigation.navigate('CourseStack')} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../../assets/book2.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Courses
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => {props.navigation.navigate('MenuScreen') }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../../assets/manage.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Manage
          </Text>
        </View>
      </View>

      <View style={{ width: responsiveWidth(100), height: responsiveHeight(30), marginTop: responsiveHeight(0), overflow: 'visible' }}>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // inverted={true}
          data={names}
          renderItem={({ item }) =>
            <Pressable onPress={()=>{openLinkInChrome()}}>
            <View style={{
              width: responsiveWidth(88), height: responsiveHeight(25), backgroundColor: 'white', marginHorizontal: responsiveWidth(6), borderRadius: responsiveWidth(6), shadowColor: "#000",
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              marginTop: responsiveHeight(2),
              elevation: 10,
              alignItems: 'center', justifyContent: 'center'
            }}>
              <Image source={{ uri: item.name }} style={{ width: responsiveWidth(87), height: responsiveHeight(24), marginHorizontal: responsiveWidth(4), borderRadius: responsiveWidth(6) }} />
            </View>
            </Pressable>
          }
        />
      </View>
      <CircularLoad />

    </View>
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
      backgroundColor: colors.primary2,
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
      width: responsiveWidth(20),
      backgroundColor: colors.bg,
      borderRadius: responsiveWidth(50),
      shadowColor: 'black',
      shadowOffset: 10,
      shadowRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: responsiveWidth(0.1),
      borderColor: colors.secondary3
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


export default FacultyHome