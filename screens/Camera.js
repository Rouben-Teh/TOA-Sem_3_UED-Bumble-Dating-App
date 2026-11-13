import React from "react";
import {ImageBackground, Text, View, TouchableOpacity, TouchableOpacityBase} from "react-native";
import {Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function Camera() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1 }}>
      <ImageBackground source={require('../assets/other_pages/camera.png')} style={{width: '100%', height: '100%', }}></ImageBackground>

      <TouchableOpacity style={{
        position:'absolute', 
        bottom:24, 
        left:24,
        width:60,
        height:80,
        }} onPress={()=>navigation.goBack()}>
      </TouchableOpacity>

    </View>
  );
}