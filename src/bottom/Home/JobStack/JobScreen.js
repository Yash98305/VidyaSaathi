import { View, Text, ImageBackground, ActivityIndicator, TextInput, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';
import { JobsAPI } from '../../../API/JobsAPI';


const JobScreen = (props) => {
  const [input, setInput] = useState('');
  const [load, setLoad] = useState(true);
  const [filterData, setFilterData] = useState(JobsAPI);
  const [TemplesAPI, setTemplesAPI] = useState(JobsAPI);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])
  const searchBox = (text) => {
    if (text) {
      const newData = TemplesAPI.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    }
    else {
      setFilterData(TemplesAPI);
    }
    setInput(text)
  }

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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(7), justifyContent: 'center' }}>
          {/* <Image source={require('../../../../assets/book.png')} style={{ width: responsiveWidth(9), height: responsiveWidth(9), tintColor: colors.bg }} /> */}
          <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Available Jobs</Animatable.Text>
        </View>
      </View>

      <View style={Styles.searchbox_wrap}>
        <View style={Styles.searchbox}>
          <Image source={require('../../../../assets/search.png')} style={Styles.search_img} />
          <TextInput value={input} onChangeText={(text) => searchBox(text)} cursorColor={'#FF6E4E'} placeholder="Search Policies" placeholderTextColor={'#B3B3C3'} style={Styles.textInput} />
          {input ?
            <TouchableOpacity onPress={() => { setInput(''); setFilterData(JobsAPI); }}>
              <Image source={require('../../../../assets/close.png')} style={Styles.close_but_img} />
            </TouchableOpacity>
            : null}
        </View>
        <TouchableOpacity onPress={() => { }}>
          <View style={Styles.filter_but}>
            <Image source={require('../../../../assets/filter.png')} style={Styles.filter_but_img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={Styles.section2}>
        {load ? <View style={{ justifyContent: 'center', height: responsiveHeight(55), width: responsiveWidth(88), alignItems: 'center' }}>
          <ActivityIndicator size={50} color={colors.primary2} />
        </View> :
          <View style={{ height: responsiveHeight(50), width: responsiveWidth(95), borderRadius: responsiveWidth(9), alignItems: 'center', overflow: 'hidden', marginTop: responsiveHeight(2) }}>
            {filterData == '' ? <Text style={{ width: responsiveWidth(100), textAlign: 'center', color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveHeight(10) }}>Sorry, no results found.</Text> : null}
            <FlatList
              showsVerticalScrollIndicator={false}

              data={filterData}
              renderItem={({ item, index }) => (
                <View style={{ width: responsiveWidth(95), alignItems: 'center' }}>
                  <Pressable onPress={() => props.navigation.navigate('JobDetails', { title: item.title, location: item.location, url: item.url, discription: item.discription, cat: item.cat, dep: item.dep, link: item.link,Mystatus:item.Mystatus,mytxt:item.mytxt })}>
                    <Animatable.View
                      animation={'fadeInUp'}
                      duration={1000}
                      delay={index * 100}
                      style={Styles.scrollView_card}>
                      {/* <Text>{index+1}</Text> */}
                      <Image source={{ uri: item.url }} style={Styles.scrollView_card_img} />
                      <View>
                        <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.8) }}>{item.title}</Text>
                        <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.3) }}>{item.dep}</Text>
                      </View>
                    </Animatable.View>
                  </Pressable>
                </View>
              )} />
          </View>}
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


export default JobScreen