import React, {useState, useEffect}  from "react";
import {ImageBackground, Image, Text, View, TouchableOpacity} from "react-native";
import {Button} from 'native-base';
import { useNavigation } from '@react-navigation/native'; 
import {BoxShadow} from 'react-native-shadow'

export default function DateModeSelection() {
  const navigation = useNavigation();
  const [currentSelect,setCurrentSelect]= useState(0);

  const shadowOpt1 = { width:158, height:158, color:"#FEC629", border:6, radius:20, opacity:0.4, x:0, y:0, style:{marginLeft:24, marginRight:26, alignItems:'center',}}
  const shadowOpt2 = { width:158, height:158, color:"#FEC629", border:6, radius:20, opacity:0.4, x:0, y:0, style:{marginRight:24, alignItems:'center',}}

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

    <ImageBackground source={require('../assets/bg/choosedatemode_top.png')} style={{width: '100%', height: 144,position: 'absolute', top:0}}/>

      <Text  style={{marginTop:180, lineHeight:36, fontFamily:'Nunito-Black', marginHorizontal:30, color:'black',fontSize:32, alignSelf:'stretch'}}>
      Choose a mode to get started</Text>

      <Text  style={{paddingTop:10, lineHeight:18, fontFamily:'Roboto-Regular', marginHorizontal:30, color:'black', marginBottom:30, fontSize:14, alignSelf:'stretch'}}>
      Bumble's for making all kinds of connections! You'll be able to switch modes once you're all set up.</Text>

      {/* <RadioButton/> */}

      <View style={{flexDirection:'row'}}>
   <BoxShadow setting={shadowOpt1}>     
  <TouchableOpacity
  activeOpacity={1}
        style={{
            alignItems:'center',
            width:158,
            height:158,
            backgroundColor:'#fff',
            borderWidth:3,
            borderColor:(currentSelect==1)?'#FEC629':'#FFFFFF',
            borderRadius:20,
          }} onPress={() => setCurrentSelect(1)}>
      <Text style={{paddingHorizontal:30,
            marginTop:14,
            fontSize:18, 
            fontFamily:'Nunito-Bold', 
            textAlign:'center',
            color:'black'}}>Date</Text>
        <Image style={{marginTop:14, width:94, height:76}} source={require('../assets/datemode/date.png')}/>
      </TouchableOpacity>
      </BoxShadow>

      <BoxShadow setting={shadowOpt2}>  
      <TouchableOpacity
      activeOpacity={1}
        style={{
            alignItems:'center',
            width:158,
            height:158,
            borderWidth:3,
            borderColor:(currentSelect==2)?'#FEC629':'#FFFFFF',
            backgroundColor:'#fff',
            borderRadius:20,
          }} onPress={() => setCurrentSelect(2)}>
      <Text style={{paddingHorizontal:30,
            marginTop:14, 
            fontSize:18, 
            fontFamily:'Nunito-Bold', 
            textAlign:'center',
            color:'black'}}>BFF</Text>
            <Image style={{marginTop:10, width:43, height:88}} source={require('../assets/datemode/stage.png')}/>
            </TouchableOpacity>
            </BoxShadow>
            
            </View>
          <View style={{flexDirection:'row'}}>
            <View style={{marginTop:20, marginLeft:24, marginRight:26, width:158, height:158}}>
            <Text style={{
            fontSize:12, 
            textAlign:'center',
            fontFamily:'Roboto-Regular', 
            color:'black'}}>Find that spark in an{'\n'}empowered community</Text>
            </View>

            <View style={{marginTop:20, marginRight:24, width:158, height:158}}>
            <Text style={{
            fontSize:12, 
            textAlign:'center',
            fontFamily:'Roboto-Regular', 
            color:'black'}}>Make new friends at{'\n'}every stage of your life</Text>
            </View>
          </View>

      <Button style={{paddingHorizontal:138, 
                                marginHorizontal:24,
                                position:'absolute', 
                                bottom:24, 
                                height:50,
                                borderRadius: 50, 
                                elevation: 0,
                                alignSelf:'center', 
                                backgroundColor:(currentSelect == '')?'#B0B0B0':'#FEC629'}} onPress={()=>navigation.navigate('BottomTabbar')} disabled={currentSelect == '' ? true : false}>
                                <Text style={{fontFamily:'Nunito-Bold', 
                                fontSize:16, 
                                color:'white'}}>Continue</Text></Button>

    </View>
  );
}