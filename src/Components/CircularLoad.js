import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colors } from '../Dimensions'
import CircularProgress from 'react-native-circular-progress-indicator';

const CircularLoad = () => {
    const [active,setActive] = useState(0);
    const [deactive,setDeactive] = useState(0);
    useEffect(()=>{
        getStatus();
    },[])
    const r = responsiveWidth(16)
    const getStatus = async () => {
        // setLoad(true)
        try {
            const resp = await fetch("https://gujarat-app.onrender.com/api/v1/user/getStatus");
            const data = await resp.json();
            // console.log(data.activePerc)
            setActive(data.activePerc)
            setDeactive(data.deactivePerc)
            console.log(data[0])
            

        } catch (error) {
            console.log(error);
            

        }
    }
    return (
        <View style={{ marginTop: responsiveHeight(0), width: responsiveWidth(88) }}>
            <Text style={{ width: responsiveWidth(88), color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.5), textAlign: 'left' }}>Dropout Rate</Text>
            <View style={Styles.circular_card}>
                <CircularProgress
                    value={active}
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
                />
                <CircularProgress
                    value={deactive}
                    radius={r}
                    valueSuffix={'%'}
                    duration={3000}
                    progressValueColor={'red'}
                    activeStrokeColor={'red'}
                    inActiveStrokeColor={'red'}
                    inActiveStrokeOpacity={0.2}
                    maxValue={100}
                    title={'Deactive'}
                    titleColor={'black'}
                    titleStyle={{ fontWeight: 'bold' }}
                    titleFontSize={13}
                    progressValueFontSize={22}
                />
                
            </View>
        </View>
    )
}
const Styles = StyleSheet.create(
    {
        circular_card: {
            height: responsiveHeight(20),
            width: responsiveWidth(88),
            backgroundColor: 'white',
            borderRadius: responsiveWidth(3),
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
             

        }
    }
)

export default CircularLoad