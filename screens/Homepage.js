import React from "react";
import {Alert, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from "expo-av";
import ShakeEvent from "../ShakeComponent";
import * as Haptics from "expo-haptics";

export default function Homepage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentSelect,setCurrentSelect]= React.useState(0);

  const openPanel = () => {
    setModalVisible(true);
  };

  const ShakeRefresh = () => {
    setTimeout(() => {this.swiper.swipeLeft();}, 100)
    setTimeout(() => {this.swiper.swipeRight();}, 500)
    setTimeout(() => {this.swiper.swipeLeft();}, 900)
    setTimeout(() => {this.swiper.swipeRight();}, 1300)
  }

  useFocusEffect(() => {
    ShakeEvent.addListener(() => {
      Alert.alert(
        "Are you sure you want to refresh?",
        "You still have the chance to see persons who haven't been swiped previously after refreshing.",
        [
          {
            text: "cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "ok", onPress: () => ShakeRefresh() },
        ]
      );
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    });

    return () => {
      ShakeEvent.removeListener();
    };
  }, []);

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sfx/super_like_sfx.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{flex: 1, backgroundColor: 'white', }}>

    <ImageBackground source={require('../assets/bg/home_top.png')} style={{width: '100%', height: 42,position: 'absolute',}}></ImageBackground>

      <SafeAreaView style={{flex:0.5, flexDirection:'row', marginTop:50}}>

                  <SafeAreaView style={{flex:0.8}}></SafeAreaView>

                  <SafeAreaView style={{flex:7}}>
                    <Text style={{fontSize:30,fontFamily:'Nunito-Bold', color:'#FEC629'}}>bumble</Text>
                  </SafeAreaView>

                  <SafeAreaView style={{flex:1.7}}>
                    <TouchableOpacity onPress={ () => {this.swiper.goBackFromLeft() }}>
                    <Image style={{width:46, height:42}} source={require('../assets/icons/rewind.png')}/>
                    </TouchableOpacity>
                    </SafeAreaView>

                  <SafeAreaView style={{flex:1.7}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Beeline')}>
                    <Image style={{width:46, height:42}} source={require('../assets/icons/beeline.png')}/>
                    </TouchableOpacity>
                    </SafeAreaView>
  
                    <SafeAreaView style={{flex:1.7}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                    <Image style={{width:46, height:42}} source={require('../assets/icons/filter.png')}/>
                    </TouchableOpacity>
                    </SafeAreaView>

                      <SafeAreaView style={{flex:0.8}}></SafeAreaView>
          </SafeAreaView>

          
      <SafeAreaView style={{flex:8}}>
              <CardStack style={{flex:1, justifyContent: 'center', alignItems: 'center'}} ref={swiper => { this.swiper = swiper }}
              disableBottomSwipe= {true} loop={true}>

                <Card style={{flex:1, width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={() => {navigation.navigate('ProfileDetails'), openPanel()}}>      
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/1.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Keyi, 23</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:8, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound() }}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                  </Card>

                <Card style={{width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProfileDetails'), openPanel()}}>
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/2.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Joey, 22</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:4, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound()}}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </Card>

                <Card style={{width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProfileDetails'), openPanel()}}>
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/3.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Mint, 26</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:10, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound()}}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </Card>

                <Card style={{width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProfileDetails'), openPanel()}}>
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/4.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Joyce, 24</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:18, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound()}}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </Card>

                <Card style={{width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProfileDetails'), openPanel()}}>
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/5.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Aika, 25</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:10, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound()}}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </Card>

                <Card style={{width:342, height:580, borderRadius:20, justifyContent:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProfileDetails'), openPanel()}}>
                    <ImageBackground style={{ width:342,  height:580, }} imageStyle={{borderRadius:20}} source={require('../assets/user_photos/6.jpg')}>
                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0, 0, 0, 0)']} start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
                    style={{flexDirection:'row', position:'absolute', bottom:0, width:'100%', height:150, borderRadius:20}}>
                      <View style={{flex:1.3}}>
                        <Text style={{position:'absolute', bottom:20, left:20, fontSize:30,fontFamily:'Nunito-Bold', color:'white'}}>Joan, 22</Text>
                      </View>
                      <View style={{flex:1.2}}>
                      <Image style={{position:'absolute', bottom:30, marginLeft:10, width:16,  height:16}} source={require('../assets/icons/bluetick.png')}/>
                      </View>
                      <View style={{flex:0.9}}>
                        <TouchableOpacity style={{position:'absolute', bottom:26,}} onPress={ () => {this.swiper.swipeTop(),playSound()}}>
                        <Image style={{width:74,  height:54}} source={require('../assets/icons/smallsuperlike.png')}/>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </Card>
              </CardStack>
      </SafeAreaView>

      <SafeAreaView style={{flex:1}}></SafeAreaView>
      </View>
  );
}