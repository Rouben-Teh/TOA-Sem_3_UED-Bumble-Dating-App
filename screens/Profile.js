import React from "react";
import {ImageBackground, SafeAreaView, View, StyleSheet, Text, Image, TouchableOpacity, TouchableOpacityBase} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      
      <View style={{flex: 2.5, flexDirection:'row'}}>
      <ImageBackground source={require('../assets/bg/profile_top.png')} style={{width: '100%', height: 92,position: 'absolute',}}></ImageBackground>
      <View style={{flex: 1}}></View>
      <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('UserProfileDetails')}}>
      <Image
        style={{
          marginTop:76,
          width:172 ,
          height:176,}}
        source={require('../assets/user_photos/profile.png')}/>
      </TouchableOpacity>
      <View style={{flex: 1}}></View>
      </View>

      <View style={{flex: 0.2}}></View>
      
      <View style={{flex: 0.6}}>
      <Text style={{marginTop:10,
        fontSize:26, 
            fontFamily:'Nunito-Bold',
            alignSelf:'center', 
            color:'black'}}>Raymond, 23</Text>
      </View>
      
      <View style={{flex: 1.2, flexDirection:'row'}}>
      <View style={{flex: 1.3}}></View>
      <View style={{flex: 1.5}}>
      <TouchableOpacity
        style={{
            alignItems:'center',
            justifyContent:'center',
            width:70,
            height:70,
            backgroundColor:'#fff',
            borderRadius:50,
          }} onPress={()=>navigation.navigate('EditProfile')}>
      <Image
        style={{
          width:88 ,
          height:76,}}
        source={require('../assets/icons/edit.png')}/></TouchableOpacity>
        <Text style={{alignSelf:'center', marginTop:6, marginLeft:6, fontFamily:'Nunito-Bold', fontSize:16, color:'#BCBCBC'}}>Edit</Text>
      </View>
      <View style={{flex: 0.8}}></View>
      <View style={{flex: 2.5}}>
      <TouchableOpacity
        style={{
          marginTop:20,
            alignItems:'center',
            justifyContent:'center',
            width:100,
            height:96,
            backgroundColor:'#fff',
            borderRadius:50,
          }} onPress={()=>navigation.navigate('Camera')}>
      <Image
        style={{
          width:110 ,
          height:99,}}
        source={require('../assets/icons/add.png')}/></TouchableOpacity>
        <Text style={{alignSelf:'center', marginTop:6, marginLeft:1, fontFamily:'Nunito-Bold', fontSize:16, color:'#BCBCBC'}}>Add Media</Text>
      </View>
      <View style={{flex: 0.5}}></View>
      <View style={{flex: 2}}>
      <TouchableOpacity
        style={{
            alignItems:'center',
            justifyContent:'center',
            width:70,
            height:70,
            backgroundColor:'#fff',
            borderRadius:50,
          }} onPress={()=>navigation.navigate('Setting')}>
      <Image
        style={{
          width:88 ,
          height:76,}}
        source={require('../assets/icons/setting.png')}/></TouchableOpacity>
        <Text style={{alignSelf:'center', marginTop:6, marginRight:10, fontFamily:'Nunito-Bold', fontSize:16, color:'#BCBCBC'}}>Setting</Text>
      </View>
      <View style={{flex: 1}}></View>
      </View>

      <View style={{flex: 0.6}}></View>

      <View style={{flex: 1, flexDirection:'row',}}>
      <View style={{flex: 1}}></View>

      <LinearGradient
        colors={['#45A8C8', '#3FDBC0']} start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        style={{
          flex:7,
          flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:150,
            height:80,
            backgroundColor:'yellow',
            borderRadius:15}}>
<Image style={{marginLeft:-10, marginRight:2, width:26,  height:26, alignSelf:'center'}} source={require('../assets/icons/spotlight.png')}/>
      <Text style={{fontSize:20, 
            fontFamily:'Nunito-Bold', 
            color:'white'}}>Spotlight</Text></LinearGradient>

      <View style={{flex: 0.6}}></View>

      <LinearGradient
        colors={['#736CB0', '#667CEA']} start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        style={{
          flex:7,
          flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:150,
            height:80,
            backgroundColor:'yellow',
            borderRadius:15}}>
      <Image style={{marginLeft:-10, marginRight:2, width:26,  height:26, alignSelf:'center'}} source={require('../assets/icons/boost.png')}/>
      <Text style={{fontSize:20, 
            fontFamily:'Nunito-Bold', 
            color:'white'}}>Boost</Text></LinearGradient>
      <View style={{flex: 1}}></View>
      </View>

      <View style={{flex: 1.05, flexDirection:'row'}}>
      <View style={{flex: 1}}></View>

        <LinearGradient
        colors={['#FFBD03', '#FFE3A9']} start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        style={{
          flex:15.8,
          alignItems:'center',
          justifyContent:'center',
          width:150,
          height:140,
          borderRadius:20}}>
      
        <Swiper showsButtons={false} autoplay={true} autoplayTimeout={2.5}
                            loop={true}
                            dotColor={'white'}
                            activeDotColor={'black'}
                            paginationStyle={{marginBottom: -20, elevation: 0, }}>
                        <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',
                          marginBottom:40}}>
                          <Text style={{marginTop:20, fontSize:20, fontFamily:'Nunito-Bold', color:'black'}}>Bumble Premium</Text>
                          <Text style={{fontSize:14, fontFamily:'Roboto-Regular', textAlign:'center', color:'black'}}>Unlock all of our features to be in complete{"\n"}control of your experience</Text>
                        </View>

                        <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',
                          marginBottom:40}}>
                          <Text style={{marginTop:20, fontSize:20, fontFamily:'Nunito-Bold', color:'black'}}>Beeline</Text>
                          <Text style={{fontSize:14, fontFamily:'Roboto-Regular', textAlign:'center', color:'black'}}>See who's swiped right on you{"\n"}</Text>
                        </View>

                        <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',
                          marginBottom:40}}>
                          <Text style={{marginTop:20, fontSize:20, fontFamily:'Nunito-Bold', color:'black'}}>Incognito</Text>
                          <Text style={{fontSize:14, fontFamily:'Roboto-Regular', textAlign:'center', color:'black'}}>Get seen by only the people you swipe right{"\n"}</Text>
                        </View>

                        <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',
                          marginBottom:40}}>
                          <Text style={{marginTop:20, fontSize:20, fontFamily:'Nunito-Bold', color:'black'}}>Travel</Text>
                          <Text style={{fontSize:14, fontFamily:'Roboto-Regular', textAlign:'center', color:'black'}}>Change your location to find matches in{"\n"}different places</Text>
                        </View>

                        <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',
                          marginBottom:40}}>
                          <Text style={{marginTop:20, fontSize:20, fontFamily:'Nunito-Bold', color:'black'}}>More Premium Features</Text>
                          <Text style={{fontSize:14, fontFamily:'Roboto-Regular', textAlign:'center', color:'black'}}>You also get all Boost features like Rematch,{"\n"}Extend, Spotlight and more</Text>
                        </View>
        </Swiper>

        <TouchableOpacity style={{backgroundColor:'white', width:'100%', height:30, 
        borderBottomStartRadius:20, borderBottomEndRadius:20, borderWidth:1, borderColor:'#FEC629',
        justifyContent:'center'}}>
          <Text style={{fontSize:14, fontFamily:'Nunito-Bold', color:'black', alignSelf:'center'}}>Upgrade Now</Text>
        </TouchableOpacity>
      </LinearGradient>
      
      <View style={{flex: 1}}></View>
      </View>

      <View style={{flex: 1.5}}></View>

    </View>
  );
}