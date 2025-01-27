import { View, Text, ImageBackground, ActivityIndicator, TextInput, Image, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, FlatList, Modal, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../../Dimensions';
import { PolicyAPI } from '../../../API/PolicyAPI';
import axios from 'axios';


const AttendenceScreen = (props) => {
    const [input, setInput] = useState('');
    const [load, setLoad] = useState(false);
    const [filterData, setFilterData] = useState(PolicyAPI);
    const [TemplesAPI, setTemplesAPI] = useState(PolicyAPI);
    const [showModal, setShowModal] = useState(false);
    const [myclass, setmyClass] = useState('');
    const [grade, setGrade] = useState('');
    const [allStudents, setAllStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);

    const ToastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT,
            ToastAndroid.CENTER,);
    };

    const saveLoginData = async () => {
        Keyboard.dismiss();
        setShowModal(false);
        if (myclass == '') {
            ToastMessage('All fields are required');
            return;
        }
        if (grade == '') {
            ToastMessage('All fields are required');
            return;
        }
        setLoad(true);
        const data = {
            grade: `${myclass}`,
            section: `${grade}`,
        };
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/faculty/fetchStudents', data);
           
            console.log(response.data.result);
            setAllStudents(response.data.result);
            setLoad(false);
            ToastMessage('All Students of class are fetched.')
        
        } catch (error) {
            console.error(error);
            setGrade('');
            setmyClass('');
            setLoad(false);
            ToastMessage('An error occurred while making the request.');
        }
        
    };

    const submitAttendence = async () => {
      
        setLoad(true);
        const data = {
            selectedStudents:[...selectedStudents],
            grade: `${myclass}`,
            section: `${grade}`,
        };
        console.log(data)
        try {
            const response = await axios.post('https://gujarat-app.onrender.com/api/v1/faculty/markAttendence', data);
            console.log(response.data);
            setLoad(false);
            ToastMessage('Attendence Uploaded.')
      

        }
        catch (error) {
            // console.log(error);
            setLoad(false);

            console.log(error);
            if (error.response) {
                // User already exists, handle the response
                console.log(error.response);
                ToastMessage(error.response)
                
                // Add your code to handle the response accordingly
            }
            ToastMessage('Unable to upload Attendence.')
        }
    };

    const toggleStudentSelection = (studentName) => {
        
        // Check if the student is already selected and toggle their selection status
        if (selectedStudents.includes(studentName)) {
            setSelectedStudents(selectedStudents.filter((name) => name !== studentName));
        } else {
            setSelectedStudents([...selectedStudents, studentName]);
        }
        
    };
    console.log(selectedStudents)

    return (
        <View style={Styles.full_section}>

            <View style={{ backgroundColor: colors.primary2, width: responsiveWidth(100), height: responsiveHeight(20), alignItems: 'center', borderBottomRightRadius: responsiveWidth(11), borderBottomLeftRadius: responsiveWidth(11) }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(2), justifyContent: 'center' }}>
                    {/* <Image source={require('../../../../assets/book.png')} style={{ width: responsiveWidth(9), height: responsiveWidth(9), tintColor: colors.bg }} /> */}
                    <Animatable.Text animation={'fadeIn'} duration={1000} style={{ color: colors.bg, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Upload Attendence</Animatable.Text>
                </View>
            </View>

            <View style={Styles.searchbox_wrap}>
                <View style={Styles.searchbox}>
                    {/* <Text>Add Class</Text> */}
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        <View style={Styles.filter_but}>
                            <Image source={require('../../../../assets/add.png')} style={Styles.filter_but_img} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setSelectedStudents(allStudents.map(student => student._id))}}>
                        <View style={Styles.filter_but}>
                            <Image source={require('../../../../assets/tick.png')} style={Styles.filter_but_img} />
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={Styles.section2}>
                {load ? <View style={{ justifyContent: 'center', height: responsiveHeight(55), width: responsiveWidth(88), alignItems: 'center' }}>
                    <ActivityIndicator size={50} color={colors.primary2} />
                </View> :
                    <View style={{ height: responsiveHeight(53), width: responsiveWidth(95), borderRadius: responsiveWidth(9), alignItems: 'center', overflow: 'hidden', marginTop: responsiveHeight(2) }}>
                        {filterData == '' ? <Text style={{ width: responsiveWidth(100), textAlign: 'center', color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), marginTop: responsiveHeight(10) }}>Sorry, no results found.</Text> : null}
                        <FlatList
                            showsVerticalScrollIndicator={false}

                            data={allStudents}
                            renderItem={({ item, index }) => (
                                <View style={{ width: responsiveWidth(95), alignItems: 'center' }}>
                                    <Pressable onPress={() => { }}>
                                        <Animatable.View
                                            animation={'fadeInUp'}
                                            duration={1000}
                                            delay={index * 100}
                                            style={Styles.scrollView_card}>
                                            {/* <Text>{index+1}</Text> */}
                                            {/* <Image source={{ uri: item.url }} style={Styles.scrollView_card_img} /> */}
                                            <View>
                                                <Text style={{ width: responsiveWidth(57), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.8) }}>{item.name}</Text>
                                                {/* <Text style={{ width: responsiveWidth(77), overflow: 'hidden', textAlign: 'left', color: 'black', fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0), marginHorizontal: responsiveWidth(2.5), fontSize: responsiveFontSize(1.3) }}>{item.dep}</Text> */}
                                            </View>
                                            <TouchableOpacity onPress={() => toggleStudentSelection(item._id)}>
                                                <Animatable.View animation={'fadeInUp'} duration={500} style={[Styles.big_but2, { backgroundColor: selectedStudents.includes(item._id) ? 'green' : 'red' }]}>
                                                    <Text style={{ color: 'white', fontSize: responsiveFontSize(1.8), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>{selectedStudents.includes(item._id) ? 'Present' : 'Absent'}</Text>
                                                </Animatable.View>
                                            </TouchableOpacity>
                                        </Animatable.View>
                                    </Pressable>
                                </View>
                            )} />
                    </View>}
                <TouchableOpacity onPress={() => submitAttendence()}>
                    <Animatable.View animation={'fadeInUp'} duration={500} style={Styles.big_but}>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins_500Medium', marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(1) }}>Submit</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>


            <Modal transparent={true} visible={showModal} animationType='fade'>
                <View style={{ position: 'absolute', backgroundColor: '#0000008a', alignItems: 'center', justifyContent: 'center', height: responsiveHeight(100), width: responsiveWidth(100) }}>
                    <View style={{ backgroundColor: 'white', width: responsiveWidth(85), borderRadius: responsiveWidth(5), paddingVertical: responsiveWidth(5), shadowColor: 'black', elevation: 10, shadowOffset: 10, shadowRadius: 10 }}>

                        <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8), margin: responsiveWidth(3) }}>Enter Class Details</Text>
                        <View style={Styles.card_small}>
                            <Image source={require('../../../../assets/class.png')} style={Styles.card_small_img} />
                            <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setmyClass(text)} value={myclass} placeholder="Enter Class" style={Styles.card_small_txt} />
                        </View>
                        <View style={Styles.card_small}>
                            <Image source={require('../../../../assets/menu.png')} style={Styles.card_small_img} />
                            <TextInput placeholderTextColor={colors.secondary3} cursorColor={colors.secondary} onChangeText={(text) => setGrade(text)} value={grade} placeholder="Enter Section" style={Styles.card_small_txt} />
                        </View>


                        <View style={{ marginLeft: 'auto', marginRight: 'auto', width: responsiveWidth(75), height: responsiveWidth(12), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>


                            <TouchableOpacity onPress={() => saveLoginData()}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: responsiveWidth(62), backgroundColor: '#FF6E4E', height: responsiveWidth(11), borderRadius: responsiveWidth(2) }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(1.8) }}>Apply</Text>
                                </View></TouchableOpacity>
                            <TouchableOpacity onPress={() => setShowModal(false)}><View style={{ alignItems: 'center', justifyContent: 'center', width: responsiveWidth(11), backgroundColor: '#010035', height: responsiveWidth(11), borderRadius: responsiveWidth(2) }}>
                                <Image source={require('../../../../assets/close.png')} style={{ height: responsiveWidth(5), width: responsiveWidth(5), tintColor: 'white' }} />
                            </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>



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
            width: responsiveWidth(88),
            height: responsiveHeight(7),
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'flex-end',
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
            backgroundColor: colors.bg,
            height: responsiveWidth(11),
            width: responsiveWidth(11),
            borderRadius: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: responsiveWidth(2),
            borderWidth: responsiveWidth(0.2),
            borderColor: colors.primary
        },
        filter_but_img: {
            height: responsiveWidth(6),
            width: responsiveWidth(6),
            tintColor: colors.primary
        },
        section2: {
            height: responsiveHeight(70),
            backgroundColor: '#e1e1e1',
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
            height: responsiveHeight(6.5),
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
        big_but2: {
            marginTop: responsiveHeight(0),
            width: responsiveWidth(25),
            height: responsiveHeight(4),
            backgroundColor: 'red',
            borderRadius: responsiveWidth(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        card_small: {
            width: responsiveWidth(74),
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
            marginLeft: 'auto',
            marginRight: 'auto'
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
    }
)


export default AttendenceScreen