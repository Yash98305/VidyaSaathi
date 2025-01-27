import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../Dimensions';
import CircularLoad from '../../Components/CircularLoad';
import { ImagesAPI } from '../../API/ImagesAPI';
import { names } from '../../API/Crousel_Policy';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    retrieveUserDetails();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index, looping back to the beginning if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImagesAPI.length);
    }, 6000); // Change the image every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);



  const retrieveUserDetails = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      console.log(parsed)

    } catch (error) {
      // ToastMessage('Unable to retrieve user details.')
      console.log(error)
    }
  };

  return (
    <View style={Styles.full_section}>

      <View style={{ overflow: 'hidden', backgroundColor: colors.primary2, width: responsiveWidth(100), height: responsiveHeight(33), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }}>
        <ImageBackground source={{ uri: ImagesAPI[currentImageIndex].url }} resizeMode="cover" style={{ flex: 1, width: responsiveWidth(100), alignItems: 'center', }} imageStyle={{ opacity: 1, backgroundColor: colors.text_light }}>
          <View style={[{ backgroundColor: colors.shade, width: responsiveWidth(100), height: responsiveHeight(33), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }]}>
            <View style={Styles.navbar}>

              <TouchableOpacity onPress={() => props.navigation.openDrawer()}><View style={Styles.but_menu}>
                <Image source={require('../../../assets/menu.png')} style={Styles.but_menu_img} />
              </View></TouchableOpacity>

              <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>User</Text>
                  <View style={[Styles.but_menu]}>
                    <Image source={require('../../../assets/user.png')} style={Styles.but_menu_img} />
                  </View>
                </View>
              </TouchableOpacity>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(5), justifyContent: 'center' }}>
              <Image source={require('../../../assets/pic2.png')} style={{ width: responsiveWidth(40), height: responsiveWidth(18) }} />
              {/* <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.secondary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Vidya Saathi</Animatable.Text> */}
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={{ width: responsiveWidth(88), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: responsiveHeight(4.2) }}>
        <Animatable.View animation={'slideInUp'} duration={500} delay={200} style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('JobStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../assets/employee.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Jobs
          </Text>
        </Animatable.View>
        <Animatable.View animation={'slideInUp'} duration={500} delay={300} style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('PolicyStack'); }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../assets/policy.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Policies
          </Text>
        </Animatable.View>
        <Animatable.View animation={'slideInUp'} duration={500} delay={400} style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('CourseStack') }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../assets/book2.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Courses
          </Text>
        </Animatable.View>
        <Animatable.View animation={'slideInUp'} duration={500} delay={500} style={{ alignItems: 'center' }}>
          <Pressable onPress={() => { props.navigation.navigate('Details') }} style={({ pressed }) => [Styles.section_second_but, { elevation: pressed ? 0 : 5 }]}>
            <Image source={require('../../../assets/list.png')} style={[Styles.butLogo]} />
          </Pressable>
          <Text style={Styles.section_sec_but_text}>
            Details
          </Text>
        </Animatable.View>
      </View>

      <View style={{ width: responsiveWidth(100), height: responsiveHeight(30), marginTop: responsiveHeight(0), overflow: 'visible' }}>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // inverted={true}
          data={names}
          renderItem={({ item }) =>

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
          }
        />
      </View>
      {/* <CircularLoad /> */}
      <View style={{ flexDirection: 'row', width: responsiveWidth(88), justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} >
        <TouchableOpacity onPress={() =>{props.navigation.navigate('SurveyStack')}}>
          <Animatable.View animation={'fadeInUp'} duration={500} style={Styles.big_but}>
            <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Dropout Survey</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>

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
    },
    big_but: {
      marginTop: responsiveHeight(2),
      width: responsiveWidth(88),
      height: responsiveHeight(7),
      backgroundColor: colors.secondary,
      borderRadius: responsiveWidth(10),
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
  }
  }
)


export default Home