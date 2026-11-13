import React from "react";
import {ImageBackground, Image, TouchableOpacity, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Conversation() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1 }}>
      <ImageBackground source={require('../assets/other_pages/conversation.png')} style={{width: '100%', height: '100%', }}>
      <View style={{marginTop:50, marginLeft:20, position:'absolute', width:30, height:45, backgroundColor:'white'}}></View>
        <TouchableOpacity style={{flex:1, marginTop:60, marginLeft:24, width:15, height:25}} onPress={()=>navigation.goBack()}>
                <Image style={{ width:15, height:25}} source={require('../assets/icons/back.png')}/></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}