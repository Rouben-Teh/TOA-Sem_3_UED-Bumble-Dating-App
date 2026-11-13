import React from 'react';
import { View,Text, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper'
import LottieView from 'lottie-react-native';
import {  Button, Left } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const swiper_ref=React.useRef(null)

  return (
      <View style={{flex: 1, backgroundColor: 'white', }}>
          <Swiper ref={swiper_ref} showsButtons={false} autoplay={false} autoplayTimeout={2.5}
                            loop={false}
                            dotColor={'grey'}
                            activeDotColor={'#FEC629'}
                            activeDotStyle={{width: 20, elevation: 0, }}
                            paginationStyle={{marginVertical: '96%', elevation: 0, }}
  >
            <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',}}>
              <ImageBackground source={require('../assets/bg/onboarding_1.png')} style={{width: '100%', height: 116,position: 'absolute', top:0}}/>
              <View style={{flex:1}}>
              <LottieView
                                    source={require('../assets/onboard/stage.json')}
                                     autoPlay
                                     loop
                                     style={{marginTop:'20%', width:210}}
                                /></View>
                                <View style={{flex:1.3}}>
                                <Text  style={{marginTop:80, lineHeight:36, fontFamily:'Nunito-Black', marginHorizontal:24, color:'black', fontSize:32, alignSelf:'stretch'}}>Make new friends 
                                at every stage of 
                                your life</Text>
                                <Text  style={{paddingTop:10, lineHeight:18, fontFamily:'Roboto-Regular', paddingBottom:24, marginHorizontal:24, marginBottom:130, fontSize:14, alignSelf:'stretch'}}>BFF will help you find new friendships, 
                                whether you're new to a city or just 
                                looking to expand your social circle.</Text></View>
                                <TouchableOpacity
                                style={{position:'absolute', 
                                top:40, 
                                left:30,}} onPress={()=>navigation.navigate('DateModeSelection')}>
                              <Text style={{
                                    fontSize:18, 
                                    fontFamily:'Nunito-SemiBold',  
                                    color:'black'}}>SKIP</Text>
                                    </TouchableOpacity>

                              <Button style={{paddingHorizontal:154, 
                                marginHorizontal:24,
                                position:'absolute', 
                                bottom:24, 
                                height:50,
                                borderRadius: 50, 
                                elevation: 0,
                                alignSelf:'center', 
                                backgroundColor:'#FEC629'}} onPress={()=>swiper_ref.current.scrollBy(1)}>
                                <Text style={{fontFamily:'Nunito-Bold', 
                                fontSize:16, 
                                color:'white'}}>Next</Text></Button>
            </View>

            <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',}}>
            <ImageBackground source={require('../assets/bg/onboarding_2.png')} style={{width: '100%', height: 123,position: 'absolute', top:0}}/>
            <View style={{flex:1}}>
              <LottieView
                                    source={require('../assets/onboard/time.json')}
                                     autoPlay
                                     loop
                                     style={{marginTop:'20%', width:230}}
                                /></View>
                                <View style={{flex:1}}>
                                <Text  style={{marginTop:28, lineHeight:36, fontFamily:'Nunito-Black', marginHorizontal:24, color:'black',fontSize:32, alignSelf:'stretch'}}>24 hours to connect</Text>
                                <Text  style={{paddingTop:10, lineHeight:18, fontFamily:'Roboto-Regular', paddingBottom:24, marginHorizontal:24, marginBottom:180, fontSize:14, alignSelf:'stretch'}}>Matches expire after 24 hours if first 
                                messages aren't exhanged.</Text></View>
                                <TouchableOpacity
                                style={{position:'absolute', 
                                top:40, 
                                left:30,}} onPress={()=>navigation.navigate('DateModeSelection')}>
                              <Text style={{
                                    fontSize:18, 
                                    fontFamily:'Nunito-SemiBold',  
                                    color:'black'}}>SKIP</Text>
                                    </TouchableOpacity>
                              <Button style={{paddingHorizontal:154, 
                                marginHorizontal:24,
                                position:'absolute', 
                                bottom:24, 
                                height:50,
                                borderRadius: 50, 
                                elevation: 0,
                                alignSelf:'center', 
                                backgroundColor:'#FEC629'}} onPress={()=>swiper_ref.current.scrollBy(1)}>
                                <Text style={{fontFamily:'Nunito-Bold', 
                                fontSize:16, 
                                color:'white'}}>Next</Text></Button>
            </View>

            <View style={{
                          flex:1,
                          flexDirection:'column',
                          justifyContent:'center',
                          alignItems:'center',}}>
            <ImageBackground source={require('../assets/bg/onboarding_3.png')} style={{width: '100%', height: 121,position: 'absolute', top:0}}/>
            <View style={{flex:1}}>
              <LottieView 
                                    source={require('../assets/onboard/women.json')}
                                     autoPlay
                                     loop
                                     style={{marginTop:'20%', width:230}}
                                /></View>
                                <View style={{flex:1}}>
                                <Text  style={{marginTop:28, lineHeight:36, fontFamily:'Nunito-Black', marginHorizontal:24, color:'black', fontSize:32, alignSelf:'stretch'}}>Women make the 
                                first move</Text>
                                <Text  style={{paddingTop:10, lineHeight:18, fontFamily:'Roboto-Regular', marginHorizontal:24, marginBottom:180, fontSize:14, alignSelf:'stretch'}}>When you match with someone, they have 
                                to send a message first.</Text></View>

                              <Button style={{paddingHorizontal:138, 
                                marginHorizontal:24,
                                position:'absolute', 
                                bottom:24, 
                                height:50,
                                borderRadius: 50, 
                                elevation: 0,
                                alignSelf:'center', 
                                backgroundColor:'#FEC629'}} onPress={()=>navigation.navigate('DateModeSelection')}>
                                <Text style={{fontFamily:'Nunito-Bold', 
                                fontSize:16, 
                                color:'white'}}>Continue</Text></Button>

            </View>
        </Swiper>
      </View>
  )
}