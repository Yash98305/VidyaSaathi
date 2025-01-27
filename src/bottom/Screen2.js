import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../Dimensions'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Screen2 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.secondary2}}>
      <Text style={{ color: colors.primary, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(3), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Vidya Saathi</Text>
      <Text style={{ color: colors.secondary3, fontFamily: 'Poppins_500Medium', fontSize: responsiveFontSize(2.5), marginTop: responsiveFontSize(0.5), marginHorizontal: responsiveWidth(2) }}>Screen 3</Text>
    </View>
  )
}

export default Screen2