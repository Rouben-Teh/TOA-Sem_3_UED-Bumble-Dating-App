import React from "react";
import {ImageBackground, Image, StyleSheet, ScrollView, Text, SafeAreaView, View, TouchableOpacity, Touchable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default function Beeline() {
  const navigation = useNavigation();
  const [isScroll,setIsScroll] = React.useState(true); 

  return (
    <View style={{flex: 1,backgroundColor:'white' }}>
       <ImageBackground source={require('../assets/bg/beeline_top.png')} style={{width: '100%', height: 86, position: 'absolute',}}></ImageBackground>
      <View style={{flex: 0.15}}>
     
      <TouchableOpacity style={{marginTop:60, marginLeft:24,position:'absolute',}} onPress={()=>navigation.goBack()}>
        <Image
                      style={{
                        width:15,
                        height:25}}
                      source={require('../assets/icons/back.png')}/></TouchableOpacity>
      <Text style={{position:'absolute', marginTop:50, marginLeft:64, fontSize:30,fontFamily:'Nunito-Bold', color:"black"}}>Beeline</Text>
      <Image style={{marginTop:50, position:'absolute', right:20, width:32, height:32}} source={require('../assets/icons/timer.png')}/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false} scrollEnabled={isScroll} style={{flex: 5}}>
      
      <ImageBackground source={require('../assets/bg/beeline_graphic.png')} style={{width: 134, height: 115, position: 'absolute', margin:20, marginHorizontal:30}}></ImageBackground>
      
      <CardStack style={{position:'absolute', right:0, marginTop:40, marginHorizontal:30, width:156, height:226,justifyContent: 'center', alignItems: 'center'}} 
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false}>
                <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/1.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>                
      </CardStack>
      

      <CardStack style={{marginTop:170, marginHorizontal:30, width:156, height:226,justifyContent: 'center', alignItems: 'center'}}
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false} >
      <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/2.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>  
      </CardStack>

      <CardStack style={{position:'absolute', right:0, top:266, marginTop:20, marginHorizontal:30, width:156, height:226,justifyContent: 'center', alignItems: 'center'}} 
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false}>
                <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/3.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>                
      </CardStack>

      <CardStack style={{marginTop:20, marginHorizontal:30, width:156, height:226,justifyContent: 'center', alignItems: 'center'}} 
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false} >
      <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/4.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>  
      </CardStack>

      <CardStack style={{position:'absolute', right:0, top:512, marginTop:20, marginHorizontal:30, width:156, height:226,justifyContent: 'center', alignItems: 'center'}} 
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false}>
                <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/5.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>                
      </CardStack>

      <CardStack style={{marginVertical:20, marginHorizontal:30, width:156, height:226, justifyContent: 'center', alignItems: 'center'}} 
      onSwipe={() => setIsScroll(false)} onSwipeEnd={() => setIsScroll(true)} horizontalThreshold={50} outputRotationRange={['0deg', '0deg', '0deg']} verticalSwipe= {false}>
                <Card style={{flex:1, width:156, height:226, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('BeelineProfileDetails')}>
                    <Image
                      style={{
                        width:156,
                        height:226,
                      borderRadius:20}}
                      source={require('../assets/beeline/6.png')}/>
                      </TouchableOpacity>
                    </View>
                  </Card>                
      </CardStack>

      <ImageBackground source={require('../assets/bg/beeline_bottom.png')} style={{width: '100%', height: 126,}}></ImageBackground>

      </ScrollView>
    </View>
  );
}