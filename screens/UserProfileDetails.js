import React from "react";
import {Modal, ImageBackground, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from "expo-av";
import ShakeEvent from "../ShakeComponent";

export default function Homepage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(true);

  const closePanel = () => {
    navigation.goBack();
    setModalVisible(false);
  };

  const dislike = () =>{
    closePanel();
    setTimeout(() => {
      this.swiper.swipeLeft();
    }, 300)
  }

  const superlike = () =>{
    closePanel();
    setTimeout(() => {
      this.swiper.swipeTop();
      playSound();
    }, 300)
  }

  const like = () =>{ 
    closePanel();
    setTimeout(() => {
      this.swiper.swipeRight();
    }, 300)
  }

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

  React.useEffect(()=>{
    ShakeEvent.removeListener();
  },[])

  return (
    <View style={{flex: 1, backgroundColor: 'white', }}>
      <Image
                      style={{
                        position:'absolute',
                        alignSelf:'center',
                        width:'150%',
                        height:500,}}
                      source={require('../assets/user_photos/7.jpg')}/>
  <Modal style={{flex: 1 }}
        animationType= "slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {closePanel()}}>
            
          <ScrollView showsVerticalScrollIndicator={false}>  
          
              <View style={{width:'100%', height:450}}></View>

                    <View style={{  width:'100%', height:1646, backgroundColor:'white', borderRadius:20}}>  
                      <View style={{marginHorizontal:24, marginTop:30}}>

                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Nunito-Bold', fontSize:30}}>Raymond,23</Text>
                          <Image style={{marginLeft:8, width:22,  height:22, alignSelf:'center'}} source={require('../assets/icons/bluetick.png')}/>
                        </View>

                        <Text style={{marginTop:14, fontFamily:'Nunito-Bold', fontSize:16, color:'#B0B0B0'}}>About Me</Text>
                        <Text style={{marginTop:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'black'}}>I get way too excited about...</Text>
                        <Text style={{marginTop:0, fontFamily:'Nunito-SemiBold', fontSize:30, color:'black'}}>grey's anatomy!</Text>

                        <Text style={{marginTop:26, fontFamily:'Nunito-Bold', fontSize:16, color:'#B0B0B0'}}>My basic info</Text>
                        <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_5.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>165cm</Text>
                          </View>
                          
                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_10.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Sometimes</Text>
                          </View>

                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_1.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Socialy</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:10, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_3.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Don't know yet</Text>
                          </View>
                          
                          <View style={{marginTop:10, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_11.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Libra</Text>
                          </View>
                        </View>

                        <Text style={{marginTop:26, fontFamily:'Nunito-Bold', fontSize:16, color:'#B0B0B0'}}>My interests</Text>
                        <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_12.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Art</Text>
                          </View>
                          
                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_8.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Photography</Text>
                          </View>

                          <View style={{marginTop:8, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_9.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Vocation</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:10, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_2.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Board games</Text>
                          </View>
                          
                          <View style={{marginTop:10, marginRight:10, flexDirection:'row', backgroundColor:'#FFF7D8', borderRadius:50}}>
                          <Image style={{marginLeft:14, marginRight:8, width:18,  height:18, alignSelf:'center'}} source={require('../assets/icons/icon_4.png')}/>
                          <Text style={{marginRight:14, marginVertical:8, fontFamily:'Nunito-SemiBold', fontSize:14, color:'#403F45'}}>Coffee</Text>
                          </View>
                        </View>

                      </View>

                      <Image style={{marginTop:26, width:'100%',  height:392, alignSelf:'center'}} source={require('../assets/user_photos/8.jpg')}/>

                        <View style={{marginHorizontal:24, marginTop:26}}>

                          <View style={{flexDirection:'row'}}>
                            <Image style={{marginRight:8, width:22,  height:22, alignSelf:'center'}} source={require('../assets/icons/location.png')}/>
                            <Text style={{fontFamily:'Nunito-Bold', fontSize:16, color:'#B0B0B0'}}>Raymond's location</Text>
                          </View> 

                          <Text style={{marginTop:18, fontFamily:'Nunito-SemiBold', fontSize:14, color:'black'}}>SS10, Bandar Sunway, Selangor</Text>
                          <Text style={{marginTop:18, fontFamily:'Nunito-SemiBold', fontSize:14, color:'black'}}>6.0 km away</Text>

                          <Text style={{marginTop:30, marginBottom:26, fontFamily:'Nunito-Bold', fontSize:30, lineHeight:34}}>Endorsed by{"\n"}other people</Text>

                          <View style={{flexDirection:'row', height:100, width:'100%', borderRadius:20, borderWidth:1, borderColor:'#FEC629', justifyContent:'space-between'}}>
                            <Text style={{flex:5.5, margin:10, fontFamily:'Roboto-Regular', fontSize:14, color:'black'}}>He is a liar, doesn't look same with his profile pic.</Text>
                            <Image style={{flex:1, margin:10, marginTop:40, width:48,  height:46, alignSelf:'center'}} source={require('../assets/profile/rotten_egg.png')}/>
                          </View>

                          <View style={{marginTop:12, flexDirection:'row', height:100, width:'100%', borderRadius:20, borderWidth:1, borderColor:'#FEC629', justifyContent:'space-between'}}>
                            <Text style={{flex:5.5, margin:10, fontFamily:'Roboto-Regular', fontSize:14, color:'black'}}>Mond Mond so cute, I like Mond Mond! Looking forward to the next date with Mond Mond.</Text>
                            <Image style={{flex:1, margin:10, marginTop:40, width:48,  height:46, alignSelf:'center'}} source={require('../assets/profile/honey.png')}/>
                          </View>

                          <View style={{marginTop:12, flexDirection:'row', height:100, width:'100%', borderRadius:20, borderWidth:1, borderColor:'#FEC629', justifyContent:'space-between'}}>
                            <Text style={{flex:5.5, margin:10, fontFamily:'Roboto-Regular', fontSize:14, color:'black'}}>He is very nice, gentle and considerate, and charming on the first date.</Text>
                            <Image style={{flex:1, margin:10, marginTop:40, width:48,  height:46, alignSelf:'center'}} source={require('../assets/profile/honey.png')}/>
                          </View>
                        
                          <View style={{marginTop:12, flexDirection:'row', height:100, width:'100%', borderRadius:20, borderWidth:1, borderColor:'#FEC629', justifyContent:'space-between'}}>
                            <Text style={{flex:5.5, margin:10, fontFamily:'Roboto-Regular', fontSize:14, color:'black'}}>He is great although he already has a gf :)</Text>
                            <Image style={{flex:1, margin:10, marginTop:40, width:48,  height:46, alignSelf:'center'}} source={require('../assets/profile/honey.png')}/>
                          </View>
                        </View> 
                      
                      </View>

                      <View style={{flexDirection:'row', position: 'absolute', top:420}}>
                          <View style={{flex:3}}></View>
                          <View style={{flex:1.3, }}>
                          <TouchableOpacity style={{marginLeft:30, elevation:1}} onPress={()=>{closePanel()}}>
                            <Image style={{width:60, height:54}} source={require('../assets/icons/down.png')}/>
                          </TouchableOpacity>
                          </View> 
                        </View>
                  
          </ScrollView>

    </Modal> 
  </View>
  );
}
