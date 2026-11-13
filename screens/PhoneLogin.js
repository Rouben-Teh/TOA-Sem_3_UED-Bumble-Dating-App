import React from "react";
import {ImageBackground, Image, TouchableWithoutFeedback, Alert, SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { useNavigation } from '@react-navigation/native';
import * as Haptics from "expo-haptics";

//icon
import { MaterialIcons} from '@expo/vector-icons'; 

export default function App() {
  const [number,onChangeNumber] = React.useState('');
  const [cca2, setCca2] = React.useState("US");
  const [callingCode, setCallingCode] = React.useState("");
  const [isOpenCountryModal, setOpenCountryModal] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(()=>{
   
    if(number.length > 10){
        alert('Max Length!')
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    }
  },[number])

  const selectCountry = (country) => {
    setCca2(country.cca2)
    setCallingCode(country.callingCode)
  };

  const showAlert = () =>
  Alert.alert(
    "We need to verify your number",
    "We need to make sure that " + callingCode + number + " is your number.",
    [
      {text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"},
      { text: "Ok", onPress:()=>navigation.navigate('VerificationCode') }
    ]
  );


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1, backgroundColor: 'white', }}>

    <View style={{flex: 1, backgroundColor: 'white', }}> 
    <ImageBackground source={require('../assets/bg/phonelogin_top.png')} style={{position:'absolute', top:0, width: '100%', height:86}}/>
    <ImageBackground source={require('../assets/bg/phonelogin_bottom.png')} style={{position:'absolute', bottom:0, width: '100%', height:230}}/>
      
    <TouchableOpacity style={{marginTop:60, marginLeft:24}} onPress={()=>navigation.goBack()}>
        <Image
                      style={{
                        width:15,
                        height:25}}
                      source={require('../assets/icons/back.png')}/></TouchableOpacity>

      <Text  style={{marginTop:10, fontFamily:'Nunito-Black', marginHorizontal:24, color:'black',fontSize:32, alignSelf:'stretch'}}>
      What's your{"\n"}number?</Text>
      <Text  style={{paddingTop:10, fontFamily:'Roboto-Regular', marginHorizontal:24, marginBottom:30, fontSize:14, alignSelf:'stretch'}}>
      We protect our community by making sure everyone on Bumble is real.</Text>
      
      
      
      <SafeAreaView style={{flex:1, flexDirection:'row', marginBottom:60}}>

            <TouchableOpacity style={{flex:1.4, flexDirection:'row', backgroundColor:'white', borderWidth:2, borderRadius:10, borderColor:'#FEC629', marginLeft:24, marginRight:10, padding:10, height:50 }} 
            onPress={(country) => setOpenCountryModal(true)}>
            <CountryPicker
                  onSelect={(country) => selectCountry(country)}
                  withCallingCode={true}
                  withFilter={true}
                  translation="eng"
                  countryCode={cca2}
                  visible={isOpenCountryModal}
                  onClose={() => setOpenCountryModal(false)}
                ></CountryPicker>
            <Text style={{alignSelf:'center'}}>{callingCode}</Text>
            </TouchableOpacity>


      <View style={{flex:4,backgroundColor:'white',borderColor:'#FEC629',
            borderWidth: 2, borderRadius:10, marginRight:24,paddingVertical:10, height:50}}> 
        <TextInput style={{fontSize:14,paddingHorizontal:10,fontFamily:'Roboto-Regular'}} 
        onChangeText={onChangeNumber} 
        text={number} 
        autoFocus={false}
        keyboardType = {'numeric'} 
        clearButtonMode={"always"}  
        returnKeyType={"send"} 
        placeholder="Phone number"
        maxLength={11} 
        keyboardAppearance={'light'}/>
      </View>
      </SafeAreaView>

      <View style={{flexDirection: "row", flex:1, position:'absolute', left:24, bottom:48, marginRight:130,}}>
        <MaterialIcons style={{flex:1,paddingRight:2,}} name="lock" size={24} color="black" />
        <Text  style={{flex:9, fontFamily:'Roboto-Light', fontSize:12, alignSelf:'stretch'}}>
        We never share this with anyone and it won't be on your profile.</Text>
      </View>

      <TouchableOpacity
        style={{
            position:'absolute',
            right:24,
            bottom:24,
            alignItems:'center',
            justifyContent:'center',
            width:72,
            height:72,
            backgroundColor:(number=='')?'#B0B0B0':'#FEC629',
            borderRadius:50,
          }} 
          disabled={number == '' ? true : false}
          onPress={showAlert}>
        <Image style={{ width:24, height:38}} source={require('../assets/icons/next.png')}/>
      </TouchableOpacity>
    </View>
    
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});