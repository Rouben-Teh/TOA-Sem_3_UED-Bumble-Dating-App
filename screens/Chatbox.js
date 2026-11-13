import React from "react";
import {
  ImageBackground, 
  Text,
  TextInput, 
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {ListItem } from "native-base";
import ProgressCircle from 'react-native-progress-circle'

export default function Chatbox() {
  const navigation = useNavigation();
  const [texts,onChangeTexts] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const openPanel = () => {setModalVisible(true); };
  const closePanel = () => {setModalVisible(false); };

  return (
    <View style={{flex:1, flexDirection: "column", backgroundColor:"white"}}>
      
      
      <View>
        <Modal style={{flex: 1, }}
        animationType= "fade"
        statusBarTranslucent={true}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {closePanel()}}>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1, marginTop:60, marginLeft:24}} onPress={()=>{closePanel()}}>
              <Image style={{ width:15, height:25}} source={require('../assets/icons/back.png')}/></TouchableOpacity>
            <View style={{flex:9, backgroundColor:'white',borderColor:'#FEC629', marginTop:50,
              borderWidth: 2, borderRadius:10, marginRight:24,paddingVertical:10, height:50}}> 
              <TextInput style={{fontSize:14,paddingHorizontal:10,fontFamily:'Roboto-Regular'}} 
              onChangeText={onChangeTexts} 
              text={texts} 
              autoFocus={true}
              keyboardType = {'default'} 
              clearButtonMode={"always"}  
              returnKeyType={"send"} 
              placeholder="Search"
              keyboardAppearance={'light'}/>
            </View>
          </View>

          <View style={{marginTop:10, height:6, backgroundColor:"#F6F6F6"}}></View>

          <View style={{flex:1,flexDirection:'row', justifyContent:'center',}}>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:16, alignSelf:'center',}}>No result</Text>
          </View>

        </Modal>
      </View>
      
        
      <View style={{flex:1}}>
      <ImageBackground source={require('../assets/bg/chat_top.png')} style={{width: '100%', height: 50,position: 'absolute',}}></ImageBackground>
          <Text style={{marginTop:50, marginHorizontal:24, fontSize:30,fontFamily:'Nunito-Bold', color:"black"}}>Chat</Text>

        <TouchableOpacity style={{marginTop:50, position:'absolute', right:24, elevation: 2 }} onPress={() => {openPanel()}}>
          <Image style={{width:46, height:42}} source={require('../assets/icons/search.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flex:0.05, backgroundColor:"#F6F6F6"}}></View>

      <View style={{flex:1.1, backgroundColor:"white"}}>
      <Text style={{marginVertical:5, marginHorizontal:24, fontSize:16,fontFamily:'Nunito-Bold', color:"black"}}>Match Queue</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ProgressCircle outerCircleStyle={{marginLeft:24, marginRight:10,}} percent={10} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#FEC629" bgColor="#fff">
          <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/1.jpg')}/> 
          </ProgressCircle>         
          <ProgressCircle outerCircleStyle={{marginRight:10,}} percent={10} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#FEC629" bgColor="#fff">
          <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/2.jpg')}/>
          </ProgressCircle>    
          <ProgressCircle outerCircleStyle={{marginRight:10,}} percent={0} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#FEC629" bgColor="#fff">
          <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/3.jpg')}/>
          </ProgressCircle>    
          <ProgressCircle outerCircleStyle={{marginRight:10,}} percent={30} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#FEC629" bgColor="#fff">
          <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/4.jpg')}/>
          </ProgressCircle>    
          <ProgressCircle outerCircleStyle={{marginRight:10,}} percent={40} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#FEC629" bgColor="#fff">
            <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/5.jpg')}/>
          </ProgressCircle>    
          <ProgressCircle outerCircleStyle={{marginRight:10,}} percent={70} radius={35} borderWidth={3} color="#A5A7B4" shadowColor="#D7373F" bgColor="#fff">
            <Image
                      style={{
                        alignSelf:'center',
                        width:58,
                        height:58,
                      borderRadius:50}}
                      source={require('../assets/chatbox/6.jpg')}/>
        </ProgressCircle>    

        </ScrollView>
      </View>

      <View style={{flex:0.05, backgroundColor:"#F6F6F6"}}></View>
                       
      <View
        style={{
          flex:5,
          margin: 0,
          backgroundColor:"white"
        }}>
        <Text style={{marginVertical:5, marginHorizontal:24, fontSize:16,fontFamily:'Nunito-Bold', color:"black"}}>Conversations</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            refreshing={true}
            data={[
              { strokeColor:'#FEC629', image:require('../assets/chatbox/11.jpg'), name: "Mint", conver: "Hi~~~" },
              { strokeColor:'#FEC629', image:require('../assets/chatbox/22.jpg'), name: "Shanom", conver:"How well do you know your man? Search \nhis number on my bio... " },
              { strokeColor:'#FEC629', image:require('../assets/chatbox/33.jpg'), name: "Joey", conver: "Lmfaoooo its tha Wassupppp yalll 4 me😂" },
              { strokeColor:'#FEC629', image:require('../assets/chatbox/44.jpg'), name: "Celine", conver: "can you not just move on and let me be \nalone😥" },
              { strokeColor:'#A5A7B4', image:require('../assets/chatbox/null_user.png'), ename: "Selina", econver: "Conversation expired" },
              { strokeColor:'#A5A7B4', image:require('../assets/chatbox/null_user.png'), ename: "Pui Yee", econver: "Conversation expired" },
              { strokeColor:'#A5A7B4', image:require('../assets/chatbox/null_user.png'), ename: "Ghis", econver: "Conversation expired" },
              { strokeColor:'#FFF' },
            ]}
            renderItem={({item, index }) => (
              <ListItem key={index} noBorder>
                <View style={{marginHorizontal:8, marginVertical:-10, justifyContent:'center', width:76, height:76, borderRadius:50, borderWidth:3, borderColor:item.strokeColor}}>
                  <Image style={{
                              alignSelf:'center',
                              width:64,
                              height:64,
                            borderRadius:50}}
                            source={item.image}/></View>
                <Text style={{alignSelf:'flex-start'}}>
                <Text style={{fontFamily:'Roboto-Bold', fontSize:18}}>{item.name}{"\n"}</Text>
                <Text style={{fontSize:5}}>{"\n"}</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:14}}>{item.conver}</Text>
                </Text>

                <Text style={{alignSelf:'flex-start'}}>
                <Text style={{fontFamily:'Roboto-Bold', fontSize:18, color:'#A5A7B4'}}>{item.ename}{"\n"}</Text>
                <Text style={{fontSize:5}}>{"\n"}</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:'#A5A7B4'}}>{item.econver}</Text>
                </Text>
              </ListItem>
            )}
          />
      </View>
    </View>
  );
}
