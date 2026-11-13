import React from "react";
import {ImageBackground, Text, View, TouchableOpacity} from "react-native";
import {Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white', }}>
      <StatusBar style="dark" />
      <ImageBackground source={require('../assets/bg/login_top.png')} style={{position:'absolute', top:0, width: '100%', height:404}}/>
      <ImageBackground source={require('../assets/bg/login_bottom.png')} style={{position:'absolute', bottom:0, width: '100%', height:196}}/>
      <Button style={{
        paddingHorizontal:20, 
        marginHorizontal:24,
        marginTop:550,
        marginBottom:20,
        height:50,
        borderRadius: 50, 
        elevation: 0,
        alignSelf:'center', 
        backgroundColor:'#1778F2'}}>
          <View style={{flex: 2, flexDirection:'row'}}>
          <EvilIcons style={{}} name="sc-facebook" size={28} color="white" />
          </View>
          <View style={{flex: 4.8, flexDirection:'row'}}>
          <Text style={{fontSize:16, 
            fontFamily:'Nunito-Bold', 
            color:'white'}}>Log in with Facebook</Text>
            </View>
            <View style={{flex: 1, flexDirection:'row'}}>
          </View>
      </Button>

      <TouchableOpacity style={{paddingHorizontal:80, 
        borderRadius: 50, 
        alignSelf:'center', 
        elevation: 0,
        backgroundColor:'rgba(0,0,0,0)'}} onPress={()=>navigation.navigate('PhoneLogin')}>
          
          <Text style={{fontSize:14, 
            fontFamily:'Nunito-SemiBold', 
            alignSelf:'center', 
            color:'black'}}>Log in with phone number</Text>
      </TouchableOpacity>

      <Text style={{position:'absolute', 
            bottom:50, 
            fontSize:12, 
            fontFamily:'Roboto-Light', 
            alignSelf:'center', 
            color:'black'}}>Don't worry! We never post to facebook.</Text>

      <TouchableOpacity transparent style={{
              position:'absolute', 
              left:120,
              height:20,
              bottom:24, 
              alignSelf:'center', 
              elevation: 0,}}>
                
                <Text style={{fontSize:10,
                  fontFamily:'Roboto-Light',  
                  alignSelf:'center', 
                  color:'black'}}>Terms of Service</Text>
            </TouchableOpacity>

            <TouchableOpacity transparent style={{
              position:'absolute', 
              right:120,
              height:20,
              bottom:24, 
              alignSelf:'center', 
              elevation: 0,}}>
                
                <Text style={{fontSize:10, 
                  fontFamily:'Roboto-Light',
                  alignSelf:'center', 
                  color:'black'}}>Privacy Policy</Text>
            </TouchableOpacity>

    </View>
  );
}